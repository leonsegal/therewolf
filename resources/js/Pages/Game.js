import React from "react";
import InfoPanel from "./header/InfoPanel";
import Messages from "./Messages";
import ChatForm from "./ChatForm";

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.roomIds = {
            main: 0,
            werewolf: 1,
            dead: 2,
        };

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

        Echo.join(`chat.${this.roomIds.main}`)
            .here((users) => {
                this.setState({ players: users });
            })
            .joining((user) => this.addUser(user))
            .leaving((user) => this.removeUser(user))
            .listen("MessageSent", (e) =>
                this.setState({ messages: [...this.state.messages, e.message] })
            )
            .error((error) => console.error(error));
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

    addUser(user) {
        this.setState({ players: [...this.state.players, user] });
    }

    removeUser(user) {
        this.setState({
            players: this.state.players.filter((usr) => usr.id !== user.id),
        });
    }

    render() {
        return (
            <>
                <InfoPanel
                    players={this.state.players}
                    user={this.state.user}
                />

                <Messages
                    messages={this.state.messages}
                    user={this.state.user}
                />

                <ChatForm />
            </>
        );
    }
}
