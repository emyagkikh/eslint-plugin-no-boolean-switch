'use strict';

module.exports = {
  rules: {
    'no-boolean-switch': require('./src/rules/no-boolean-switch'),
  },
  configs: {
    'recommended': {
      rules: {
        'no-boolean-switch': 'warn',
      },
    },
    'ts-recommended': {
      rules: {
        'no-boolean-switch': 'warn',
      },
    },
    'strict': {
      rules: {
        'no-boolean-switch': 'warn',
      },
    },
    'ts-strict': {
      rules: {
        'no-boolean-switch': 'warn',
      },
    },
  },
}
