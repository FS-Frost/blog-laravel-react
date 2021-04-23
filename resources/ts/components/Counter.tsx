import React from "react";
import "~/components/counter.scss";

export interface CounterProps {
    initialCount?: number;
}

interface CounterState {
    currentCount: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);

        this.state = {
            currentCount: this.props.initialCount
                ? this.props.initialCount - 0
                : 0,
        };
    }

    increaseCounter(amount: number = 1) {
        this.setState({
            currentCount: this.state.currentCount + amount,
        });
    }

    decreaseCounter(amount: number = 1) {
        this.setState({
            currentCount: this.state.currentCount - amount,
        });
    }

    get countType(): string {
        return typeof this.state.currentCount;
    }

    render() {
        return (
            <div>
                <h1 className="header">
                    Current count: {this.state.currentCount} ({this.countType})
                </h1>

                <button
                    className="btn btn-primary"
                    onClick={() => this.increaseCounter()}
                >
                    +
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => this.decreaseCounter()}
                >
                    -
                </button>
            </div>
        );
    }
}

export default Counter;
