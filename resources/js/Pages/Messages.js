import React from "react";

export default function Messages({ messages, player }) {
    return (
        <ul>
            {messages.map((message) => {
                let playerId = message.user
                    ? message.user.id
                    : message.player_id;
                let playerName = message.user
                    ? message.user.name
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
