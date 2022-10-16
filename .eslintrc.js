module.exports = {
    // ...require("prettier-config-x"),
    root: true,
    overrides: [
      {
        files: ["*.ts"],
        parserOptions: {
          project: [
            "./tsconfig.json",
            "tsconfig.*?.json",
            "e2e/tsconfig.json"
          ],
          createDefaultProgram: true
        },
        extends: ["plugin:@angular-eslint/recommended",
        // AirBnB Styleguide rules
        'airbnb-typescript/base',
        // Settings for Prettier
        'plugin:prettier/recommended'
        ],
        rules: {
         // Custom rules
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/unbound-method': [
          'error',
        {
        ignoreStatic: true,
        }
        ]
        }
      },
      {
        files: ["*.component.html"],
        extends: ["plugin:@angular-eslint/template/recommended"],
        rules: {
          "max-len": ["error", { "code": 140 }]
        }
      },
      {
        files: ["*.component.ts"],
        extends: ["plugin:@angular-eslint/template/process-inline-templates"]
      }
    ]
  }