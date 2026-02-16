# CJS→ESM Transform Gap Specifications

Documented from cjs2esm v6.0.0 evaluation against eslint-config-availity.
Each gap represents a pattern the tool missed that required manual intervention.

## G1: Re-export via require

```
{source = `module.exports = require('./foo')`}
  transform(source)
{output = `export { default } from './foo.js'`}
```

**What happened**: Tool produced `export default require('./foo')` — mixed ESM export with CJS require.
**Correct**: Use `export { default } from` re-export syntax.
**File**: `index.js:1`

## G2: `__dirname` replacement

```
{source contains `__dirname`}
  transform(source)
{output replaces `__dirname` with `import.meta.dirname`}
  PRE: node_version >= 21.2 ∨ fallback_to_fileURLToPath
```

**What happened**: `__dirname` left untouched — runtime ReferenceError in ESM.
**Correct**: `import.meta.dirname` (Node 21.2+) or `fileURLToPath(new URL('.', import.meta.url))`.
**File**: `compat.js:4`

## G3: Inline require in expression position

```
{source = `{ key: require('pkg') }`}
  transform(source)
{output = `import pkg from 'pkg'; ... { key: pkg }`}
  POST: import hoisted to top of file
```

**What happened**: `parser: require('@babel/eslint-parser')` left as require inside object literal.
**Correct**: Hoist to top-level import, replace inline usage with identifier.
**File**: `base.js:20`

## G4: Conditional require in try/catch

```
{source = `try { x = require('pkg') } catch (e) { ... }`}
  transform(source)
{output = `try { const { default: x } = await import('pkg') } catch (e) { ... }`}
  POST: top_level_await ∨ async_function_wrapper
```

**What happened**: `require('typescript-eslint')` inside try/catch left untouched.
**Correct**: Convert to `await import()` with `.default` destructuring.
**File**: `base.js:77`

## G5: Require with chained property/method access

```
{source = `const x = require('./foo').method(...)`}
  transform(source)
{output = `import foo from './foo.js'; const x = foo.method(...)`}
```

**What happened**: `require('./base').find(...)` left as require with chained `.find()`.
**Correct**: Split into import + chained call on the imported identifier.
**File**: `browser.js:11`

## G6: named-export-generation crash (tool bug)

```
{source = `module.exports = { compat }`}
  transform(source)  // CRASH: ExportSpecifier missing 'exported' field
{expected = no crash}
```

**What happened**: 5to6-codemod's `named-export-generation` transform threw due to AST types version mismatch.
**Root cause**: `ExportSpecifier` builder requires `exported` field in newer ast-types but 5to6-codemod doesn't supply it.
**File**: `compat.js`

## G7: Object-wrapped named export

```
{source = `module.exports = { foo }`}
  transform(source)
{output = `export { foo }` ∨ `export const foo = ...`}
  NOT: `export default { foo }`
```

**What happened**: Converted to `export default { compat }` (wrapping named exports in default).
**Correct**: Detect shorthand property pattern and emit named exports.
**File**: `compat.js:7`

## G8: CJS package without default ESM export (discovered during testing)

```
{source = `import resolve from 'resolve'`}
  verify(source)
{error: 'resolve' does not provide export named 'default'}
  FIX: check_package_exports(pkg) → adjust_import_style
```

**What happened**: cjs2esm converted `const resolve = require('resolve')` to `import resolve from 'resolve'`, but the `resolve` package exports `{ async, sync }` in ESM (no default).
**Correct**: `import { sync as resolveSync } from 'resolve'` and update call sites.
**This gap requires**: Package export analysis — the tool would need to check whether a CJS package actually provides a default export when consumed via ESM.

## G9: Missing `"exports"` map in package.json

```
{pkg.type = "module" ∧ pkg.files contains subpath entries}
  transform(pkg)
{pkg.exports maps each subpath ± extension}
  POST: ∀ entry ∈ files: exports["./entry"] ∧ exports["./entry.js"]
```

**What happened**: After migration, `import browser from 'eslint-config-availity/browser'` failed with `ERR_MODULE_NOT_FOUND`. The `"exports"` field was absent — ESM strict resolution requires explicit subpath exports.
**Correct**: Add `"exports"` map with both extensionless and `.js`-suffixed entries for every published subpath.
**Discovery**: Only found via consumer integration test — unit tests within the package passed fine.
