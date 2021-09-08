module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' }}],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver', {
        root: ['./'],
        alias: {
          '@configs': ['./src/configs'],
          '@usecases': ['./src/app/domain/usecases'],
          '@models': ['./src/app/domain/models']
        },
        extensions: ['.js', '.ts']
      }
    ]
  ],
  ignore: [
    'node_modules',
    '**/*.spec.ts',
    '**/*.test.ts',
    'jest.config.ts',
    'babel.config.js',
    '.gitignore',
    '.eslintrc.json',
    '.editorconfig'
  ]
}
