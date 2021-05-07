import React from "react";
import { render } from "react-dom";
import { InertiaApp } from "@inertiajs/inertia-react";
import NavBar from "@/components/NavBar";

const app = document.getElementById("app");
const componentResolver = (name: string) =>
    import(`./components/${name}`).then((module) => module.default);

render(
    <>
        <NavBar />
        <InertiaApp
            initialPage={app ? JSON.parse(app.dataset.page!) : "{}"}
            resolveComponent={componentResolver}
        />
    </>,
    app
);
