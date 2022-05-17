import React from "react";

function PlayerInfo({ players, user }) {
    let thePlayer = players.find((player) => player.id === user.id);

    return (
        <div id="players">
            <span>
                <strong>Players:</strong>
            </span>
            <ul>
                {thePlayer ? <li>{thePlayer.name} (you)</li> : null}
                {players
                    .filter((player) => {
                        if (thePlayer) {
                            return thePlayer.id !== player.id;
                        }
                    })
                    .map((player, id) => (
                        <li key={id}>{player.name}</li>
                    ))}
            </ul>
            <hr />
        </div>
    );
}

export default PlayerInfo;
