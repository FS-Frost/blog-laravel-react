import React from "react";
import { render } from "react-dom";
import { InertiaApp } from "@inertiajs/inertia-react";

const app = document.getElementById("app");
const reviver = (_: string, value: any) => (isNaN(value) ? value : value - 0);
const componentResolver = (name: string) =>
    import(`./components/${name}`).then((module) => module.default);

console.log("app");

render(
    <InertiaApp
        initialPage={app ? JSON.parse(app.dataset.page!, reviver) : "{}"}
        resolveComponent={componentResolver}
    />,
    app
);
