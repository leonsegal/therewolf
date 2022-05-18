import React from "react";

export default function PlayerInfo({ players, player }) {
    let thePlayer = players.find((plyr) => plyr.id === player.id);

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
        </div>
    );
}
