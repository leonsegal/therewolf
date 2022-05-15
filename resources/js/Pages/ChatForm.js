import React from "react";

export default class ChatForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { message: this.props.message };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.message !== this.props.message) {
            this.setState({ message: this.props.message });
        }
    }

    render() {
        return (
            <form
                method="POST"
                id="form"
                onSubmit={(e) => this.props.sendMessage(e, this.state.message)}
            >
                <input
                    id="input"
                    type="text"
                    name="message"
                    value={this.state.message}
                    onChange={(e) => this.props.changeMessage(e)}
                    placeholder="Type your message here..."
                    autoFocus={true}
                    autoComplete="off"
                />
                <input type="submit" value="Send" />
            </form>
        );
    }
}
