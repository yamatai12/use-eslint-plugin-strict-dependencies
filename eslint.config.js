import typescriptEslintParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import tseslint from 'typescript-eslint';
import strictDependencies from 'eslint-plugin-strict-dependencies';

export default [
    {languageOptions: {
        parser: typescriptEslintParser,
        parserOptions: {
          project: true,
          sourceType: "module",
        },
      }
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
          "strict-dependencies": strictDependencies,
        },
    },
   {
       rules: {
        "strict-dependencies/strict-dependencies": [
          "error",[{
            "excludeTypeImportChecks": true,
            "module": "sub",// importされるmoduleのパス
            "allowReferenceFrom": ["sub"],// import可能なmoduleのパス
          },
        ],
        {
           "pathIndexMap": { "*": 1 }
        }
        ]
       }  
   }
];