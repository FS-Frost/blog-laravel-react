import React, { ChangeEvent } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { CounterProps } from "./Counter";

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
            <div>
                <h1>Home component</h1>

                <input
                    type="number"
                    value={this.state.initialCount}
                    onChange={this.handleInitialCounterChange}
                />

                <div>
                    <InertiaLink
                        href="/counter"
                        method="get"
                        as="button"
                        type="button"
                        data={this.counterData}
                    >
                        {this.buttonText}
                    </InertiaLink>

                    <button onClick={() => this.visitCounter()}>
                        {this.buttonText} (Manually)
                    </button>
                </div>
            </div>
        );
    }
}

export default Home;
