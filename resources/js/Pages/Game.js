import React from "react";
import InfoPanel from "./header/InfoPanel";
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
            players: [],
        };
    }

    componentDidMount() {
        this.getMessages();
        this.getUser();
        this.getPlayers();

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

    getPlayers() {
        axios
            .get("/players")
            .then((res) => this.setState({ players: res.data.players }));
    }

    sendMessage = (e, msg) => {
        e.preventDefault();

        axios
            .post("/message", { body: msg })
            .then((res) => {
                this.setState({
                    message: "",
                    messages: [...this.state.messages, res.data.message],
                });
            })
            .catch(console.error);
    };

    render() {
        return (
            <>
                <h1>Chat</h1>

                {/*<InfoPanel players={players} />*/}

                <Messages
                    messages={this.state.messages}
                    user={this.state.user}
                />

                <ChatForm
                    message={this.state.message}
                    sendMessage={this.sendMessage}
                    changeMessage={(e) =>
                        this.setState({ message: e.target.value })
                    }
                />
            </>
        );
    }
}
