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

    visitCount() {
        Inertia.visit("");
    }

    render() {
        return (
            <div>
                <h1>Home component</h1>

                {/* <button onClick={() => this.visitCount()}>
                    I want to count!
                </button> */}

                <input
                    type="number"
                    value={this.state.initialCount}
                    onChange={this.handleInitialCounterChange}
                />

                <InertiaLink
                    href="/counter"
                    method="get"
                    as="button"
                    type="button"
                    data={
                        {
                            initialCount: this.state.initialCount,
                        } as CounterProps
                    }
                >
                    I want to count from {this.state.initialCount}!
                </InertiaLink>
            </div>
        );
    }
}

export default Home;
