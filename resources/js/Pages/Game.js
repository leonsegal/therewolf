import React from "react";
// import InfoPanel from "./header/InfoPanel";
import Messages from "./Messages";
import ChatForm from "./ChatForm";

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            user: {
                name: "",
                id: "",
            },
        };
    }

    componentDidMount() {
        this.getMessages();
        this.getUser();

        window.Echo.private("chat").listen("MessageSent", (e) =>
            this.setState({ messages: [...this.state.messages, e.message] })
        );
    }

    getMessages() {
        axios
            .get("/messages")
            .then((res) => this.setState({ messages: res.data.messages }))
            .catch(console.error);
    }

    getUser() {
        axios
            .get("/user")
            .then((res) => this.setState({ user: res.data.user }));
    }

    render() {
        return (
            <>
                <h1>Chat</h1>

                {/*<InfoPanel players={players} />*/}
                <Messages
                    messages={this.state.messages}
                    user={this.state.user}
                />
                <ChatForm />
            </>
        );
    }
}
