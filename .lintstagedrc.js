// https://github.com/okonet/lint-staged#how-can-i-ignore-files-from-eslintignore-
const { CLIEngine } = require('eslint');

const cli = new CLIEngine({});

module.exports = {
  './src/**/*.{js,ts,tsx}': (files) => {
    const match = files.filter((file) => !cli.isPathIgnored(file)).join(' ');
    return 'eslint --max-warnings=0 ' + match;
  },
  './**/*.{json,md,yml}': ['prettier --write'],
};
