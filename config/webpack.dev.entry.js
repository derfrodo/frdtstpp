var environment = process.env.NODE_ENV;
console.log(environment);

const entries = {
    "css/styles": ["./src/styles/styles.js"],
    "script/hotApp": ["./src/hotApp.jsx"]
}

if (environment !== "production") {
    const devArray =
        ["react-hot-loader/patch",
            "webpack-dev-server/client?http://localhost:8080",
            "webpack/hot/only-dev-server"];

    for (const prop in entries) {
        entries[prop].unshift(...devArray);

        console.log(entries[prop])
    }
}

module.exports = entries;
