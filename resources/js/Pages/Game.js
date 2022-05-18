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
            player: {
                name: "",
                id: "",
            },
            players: [],
        };
    }

    componentDidMount() {
        this.getMessages();
        this.getPlayer();

        Echo.join(`chat.${this.roomIds.main}`)
            .here((players) => this.setState({ players }))
            .joining((player) => this.addPlayer(player))
            .leaving((player) => this.removePlayer(player))
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

    getPlayer() {
        axios
            .get("/player")
            .then((res) => this.setState({ player: res.data.player }));
    }

    addPlayer(player) {
        this.setState({ players: [...this.state.players, player] });
    }

    removePlayer(thePlayer) {
        this.setState({
            players: this.state.players.filter(
                (player) => player.id !== thePlayer.id
            ),
        });
    }

    render() {
        return (
            <>
                <InfoPanel
                    players={this.state.players}
                    player={this.state.player}
                />

                <Messages
                    messages={this.state.messages}
                    player={this.state.player}
                />

                <ChatForm />
            </>
        );
    }
}
