const mix = require("laravel-mix");

mix.ts("resources/js/app.tsx", "public/js/bundles")
    .postCss("resources/css/app.css", "public/css/bundles", [])
    .sourceMaps(false);
