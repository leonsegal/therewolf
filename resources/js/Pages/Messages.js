import React from "react";

export default function Messages({ player, messages }) {
    console.clear(); // deleteme
    console.log(messages); // deleteme
    return (
        <ul>
            {messages.map((message) => {
                let playerId = message.player_id;
                let playerName = message.player_name;
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
