const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
        publicPath: '//localhost:3001/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-typescript', '@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
        ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'UISystemModule',
            filename: 'remoteEntry.js',
            exposes: {
                ThemeProvider: './src/ThemeProvider'
            },
            shared: ['react', '@material-ui/core', '@material-ui/icons' ]
        })
    ]
}