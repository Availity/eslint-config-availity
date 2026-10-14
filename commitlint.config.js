export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [0, 'always', 500],
    'footer-max-line-length': [0, 'always', 500],
  },
};
