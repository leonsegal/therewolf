import React from "react";

export default function Messages({ player, messages }) {
    return (
        <ul>
            {messages.map((message) => {
                let playerId = message.player
                    ? message.player.id
                    : message.player_id;
                let playerName = message.player
                    ? message.player.name
                    : message.player_name;
                return (
                    <li key={message.id}>
                        {player.id === playerId
                            ? `${playerName}(you): `
                            : `${playerName}: `}
                        {message.body}
                    </li>
                );
            })}
        </ul>
    );
}
