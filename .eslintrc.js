module.exports = {
  "extends": "airbnb-base",
  "globals": {
    "arguments": true,
    "window": true
  },
  "rules": {
    // generic rules
    "indent": ["error", 2, {
      "SwitchCase": 1
    }],
    "max-len": ["error", {
      "code": 120
    }],
    "comma-dangle": ["error", "never"],
    "no-console": ["error", {
      allow: ["error", "info"]
    }],
    "default-case": 0,
    "import/prefer-default-export": 0,
  }
};
