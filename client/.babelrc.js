module.exports = {
    plugins: [
        ["babel-plugin-root-import", {
          "rootPathPrefix": "@",
          "rootPathPrefix": "src"
        }]
    ],
    presets: ['@babel/preset-env'],
}