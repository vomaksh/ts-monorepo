module.exports = {
    root: true,
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname
    },
    extends: ['nextjs', 'plugin:@next/next/core-web-vitals']
};
