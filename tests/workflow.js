export default () => `
import SomeComp from '@/components/SomeComp';

// Workflow globals should not trigger no-undef
const isDev = __DEV__;
const isTest = __TEST__;
const isProd = __PROD__;
const isStaging = __STAGING__;

export default function App() {
  return <SomeComp dev={isDev} test={isTest} prod={isProd} staging={isStaging} />;
}
`;
