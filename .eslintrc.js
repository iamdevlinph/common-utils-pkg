module.exports = {
  "extends": "airbnb-base",
  "globals": {
    "arguments": true
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
    "no-console": ["error", { allow: ["error"] }]
  }
};
