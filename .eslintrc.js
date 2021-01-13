module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'no-undef': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-extra-semi': 'error',
    'eqeqeq': 'warn',
    'no-trailing-spaces': 'warn',
    'comma-style': 'warn',
    'comma-spacing': 'warn',
    'no-delete-var': 'error',
    'no-var': 'error',
    'eol-last': 'warn',
    'space-before-function-paren': ['warn', 'never'],
    'semi': 'warn',
    'object-curly-spacing': 'warn',
    'object-property-newline': 'warn',
    'object-curly-newline': ['warn', {
      'ObjectExpression': {
        'multiline': true,
        'minProperties': 1,
      },
      'ObjectPattern': 'never',
      'ImportDeclaration': 'never',
      'ExportDeclaration': 'never',
    }],
    'key-spacing': 'warn',
    'quotes': ['warn', 'single'],
    'space-infix-ops': 'error',
    'no-debugger': 'off',
    'no-console': 'off',
    'lines-between-class-members': [
      'error',
      'always', {
        exceptAfterSingleLine: true,
      },
    ],
    'keyword-spacing': 'error',
    'no-multi-spaces': 'error',
    'space-before-blocks': 'error',
    'arrow-spacing': 'error',
    'no-shadow': ['error', {
      'builtinGlobals': false,
      'hoist': 'functions',
    }],

    // 'vue/script-indent': 'error',
    'vue/attribute-hyphenation': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-indent': 'error',
    'vue/html-self-closing': 'error',
    'vue/max-attributes-per-line': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/name-property-casing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/custom-event-name-casing': 'off',
    'vue/no-mutating-props': 'warn',
  }
}
