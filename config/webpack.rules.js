const autoprefixer = require("autoprefixer");

const babelOptions = {
    "presets": [
        ["es2015", { "modules": false }],
        "react",
        "stage-0"
    ],
    "plugins": [
        "react-hot-loader/babel"
    ]
}

module.exports = {
    rules: [
        {
            test: /\.tsx?$/,
            use: [
                {
                    loader: "babel-loader",
                    options: babelOptions,
                },
                {
                    loader: "ts-loader"
                },
                {
                    loader: "tslint-loader",
                    options: {
                        failOnHint: false,
                        configuration: require("../tslint.json")
                    }
                }
            ],
        },
        {
            test: /\.jsx?$/,
            use: [
                {
                    loader: "babel-loader",
                    options: babelOptions,
                },
            ],
        },
        {
            test: /\.less$/,
            use: [
                { loader: "style-loader", options: { sourceMap: true } },
                { loader: "css-loader", options: { sourceMap: true, importLoaders: 1 } },
                { loader: "postcss-loader", options: { plugins: (loader) => [autoprefixer({ browsers: ["last 2 versions"] })] } },
                { loader: "less-loader" }
            ]
        }

    ]
}