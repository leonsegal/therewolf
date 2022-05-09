import React from "react";

function PlayerInfo({ players }) {
    // get id from user
    let thePlayer = players.find((player) => player.id === userId);
    return (
        <div id="players">
            <span>
                <strong>Players:</strong>
            </span>
            <ul>
                <li>{thePlayer.name} (you)</li>
                {players
                    .filter((player) => player.id !== thePlayer.id)
                    .map((player, id) => (
                        <li key={id}>{player.name}</li>
                    ))}
            </ul>
        </div>
    );
}

export default PlayerInfo;
