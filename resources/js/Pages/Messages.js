import React from "react";

export default function Messages({ player, messages }) {
    return (
        <ul className="overflow-hidden h-4/6 absolute inset-x-0 left-5 bottom-20">
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
