const mix = require("laravel-mix");
const path = require("path");

mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.join(__dirname, "resources/js"),
            "~": path.join(__dirname, "resources/sass"),
        },
    },
})
    .ts("resources/js/app.tsx", "public/js/bundles")
    // .postCss("resources/css/app.css", "public/css/bundles", [])
    .sass("resources/sass/app.scss", "public/css/bundles")
    .sourceMaps(false);
