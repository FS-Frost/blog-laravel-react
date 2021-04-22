import React from "react";
import { render } from "react-dom";
import { InertiaApp } from "@inertiajs/inertia-react";

const app = document.getElementById("app");
const componentResolver = (name: string) =>
    import(`./components/${name}`).then((module) => module.default);

render(
    <InertiaApp
        initialPage={app ? JSON.parse(app.dataset.page!) : "{}"}
        resolveComponent={componentResolver}
    />,
    app
);
