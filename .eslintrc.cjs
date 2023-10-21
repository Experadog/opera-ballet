const base = {
  indent: 'off',
  'no-use-before-define': 'off',
  'no-unused-vars': 'warn',
  'no-undef': 'off',
  'comma-dangle': ['error', 'always-multiline'],
  'jsx-quotes': ['error', 'prefer-double'],
  'node/no-callback-literal': 'off',
  'no-useless-return': 'off',
  'no-redeclare': 'off',
  camelcase: 'off',
  quotes: ['error', 'single'],
}

const react = {
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'off',
  'react/display-name': 'off',
  'react/jsx-closing-bracket-location': 1,
  // 'react/jsx-curly-newline': 1,
  'react/jsx-indent': ['warn', 2, {
    indentLogicalExpressions: true,
  }],
  'react/jsx-indent-props': ['warn', 2],
  'react/jsx-wrap-multilines': ['warn', {
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    // prop: 'parens-new-line',
  }],
  'react/jsx-space-before-closing': [1, 'always'],
  'react/jsx-curly-spacing': [1, {
    when: 'never',
    // children: {
    //   when: 'never',
    // },
  }],
}

const config = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended', // Используем плагин для React
    'plugin:react-hooks/recommended',
    'standard',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react', // Добавляем плагин для React
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    ...base,
    ...react,
  },
}

module.exports = config
