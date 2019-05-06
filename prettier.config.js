module.exports = {
    arrowParens: 'always',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
    overrides: [
        {
            files: 'package*.json',
            options: {
                printWidth: 1000
            }
        }
    ]
};
