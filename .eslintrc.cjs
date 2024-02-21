module.exports = {
  extends: ['airbnb-base', 'plugin:astro/recommended', 'prettier'],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        "ecmaVersion": 6,
        "ecmaFeatures": {
          "experimentalObjectRestSpread": true
        }
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
        "@typescript-eslint/restrict-template-expressions": "off",
        "react/prop-types": "off",
        "comma-spacing": "error",
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "never"],
        "max-len": [
          "warn",
          {
            code: 100,
            ignoreUrls: true,
            ignoreTemplateLiterals: true,
            ignoreStrings: true,
            ignoreTrailingComments: true,
          },
        ],
      },
    },
  ],
};
