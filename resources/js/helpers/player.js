export default class PlayerHelper {
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
}
