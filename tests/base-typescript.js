export default () => `
// @typescript-eslint/no-wrapper-object-types (error)
const str: String = 'hello';

// @typescript-eslint/no-explicit-any (warn)
const anything: any = 'test';

// @typescript-eslint/no-unused-vars (error)
const unused: string = 'unused';

// @typescript-eslint/no-unused-vars ignoreRestSiblings (should NOT fire)
const { ignored, ...rest }: Record<string, string> = { ignored: 'a', kept: 'b' };
console.log(rest);

export { str, anything };
`;
