import React, { ChangeEvent } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { CounterProps } from "@/components/Counter";
import "~/components/home.scoped.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

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
            <Col>
                <Row>
                    <h1 className="header">Home component2</h1>
                </Row>

                <Row className="mb-10">
                    <FormControl
                        type="number"
                        value={this.state.initialCount}
                        onChange={this.handleInitialCounterChange}
                    />
                </Row>

                <Row className="mt-10">
                    <Col md={6}>
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
                    </Col>

                    <Col md={6}>
                        <Button
                            variant="secondary"
                            onClick={() => this.visitCounter()}
                        >
                            {this.buttonText} (Manually)
                        </Button>
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Home;
