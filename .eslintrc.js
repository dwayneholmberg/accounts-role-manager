module.exports = {
  "extends": "@meteorjs/eslint-config-meteor",
  "plugins": [
    "import"
  ],
  "env": {
    "meteor": true
  },
  "rules": {
    "no-return-assign": ["error", "except-parens"],
    "import/no-unresolved": [ 2, { "ignore": ["^meteor/"] } ]
  },
};
