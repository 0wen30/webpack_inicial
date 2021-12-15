const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");


const plugincopy = new CopyPlugin({
    patterns: [
        { from: "src/assets/img/webpack-logo.png", to: "assets/img/webpack-logo.png" }
    ],
})

const pluginHtml = new HtmlWebPack({
    title: 'miApp',
    template: './src/index.html',
    filename: './index.html'
});

const reglahtml = {
    test: /\.html$/i,
    loader: 'html-loader',
    options: {
        sources: false,
        minimize: false,
    },
};

const reglacss = {
    test: /\.css$/i,
    exclude: /estilos.css$/,
    use: ["style-loader", "css-loader"],
}

const reglaminicss = {
    test: /estilos\.css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
}

const reglaimagenes = {
    test: /\.(png|jpe?g|gif)$/i,
    use: ['file-loader'],
}

module.exports = {

    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [reglahtml, reglacss, reglaminicss, reglaimagenes]
    },
    plugins: [new MiniCssExtractPlugin(), pluginHtml, plugincopy]

}