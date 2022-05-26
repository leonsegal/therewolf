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

        this.roles = [
            { id: 0, name: "Werewolf" },
            { id: 1, name: "Seer" },
            { id: 2, name: "Villager" },
        ];

        this.state = {
            hasGameStarted: false,
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

            .joining((player) => {
                this.addPlayer(player);
                if (this.state.players.length > 2) {
                    this.startGame();
                }
            })

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
                    player={this.state.player}
                    players={this.state.players}
                    roles={this.roles}
                />

                <Messages
                    player={this.state.player}
                    messages={this.state.messages}
                />

                <ChatForm />
            </>
        );
    }

    startGame() {
        this.selectRoles();
        this.setState({ hasGameStarted: true });
    }

    selectRoles() {
        axios
            .post("/select-roles", { players: this.state.players, roomId: 0 })
            .then((res) => console.log(res)) // should contain role for this player only (possibly not all in case it gets intercepted)
            .catch(console.error);
    }
}
