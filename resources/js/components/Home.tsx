import React, { ChangeEvent } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { CounterProps } from "./Counter";
import "~/components/home.scss";

interface HomeProps {}

interface HomeState {
    initialCount?: number;
}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {
            initialCount: 0,
        };

        this.handleInitialCounterChange = this.handleInitialCounterChange.bind(
            this
        );
    }

    handleInitialCounterChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ initialCount: parseInt(event.target.value) });
    }

    visitCounter() {
        Inertia.visit("counter", {
            data: this.counterData,
            onSuccess: () => {
                console.log("visitCounter done.");
            },
        });
    }

    get counterData(): CounterProps {
        return {
            initialCount: this.state.initialCount,
        };
    }

    get buttonText(): string {
        return `I want to count from ${this.state.initialCount}!`;
    }

    render() {
        return (
            <div className="col">
                <div className="row">
                    <h1 className="header">Home component</h1>
                </div>

                <div className="row mb-10">
                    <input
                        className="form-control"
                        type="number"
                        value={this.state.initialCount}
                        onChange={this.handleInitialCounterChange}
                    />
                </div>

                <div className="row mt-10">
                    <div className="col-6">
                        <InertiaLink
                            href="/counter"
                            method="get"
                            as="button"
                            type="button"
                            className="btn btn-primary"
                            data={this.counterData}
                        >
                            {this.buttonText}
                        </InertiaLink>
                    </div>

                    <div className="col-6">
                        <button
                            className="btn btn-secondary"
                            onClick={() => this.visitCounter()}
                        >
                            {this.buttonText} (Manually)
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
