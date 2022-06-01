import React from "react";

export default function Message({ message, player }) {
    let isMessageFromUser = player.id === message.player_id;

    return (
        <li
            className={`p-2 rounded-2xl ${
                isMessageFromUser
                    ? "place-self-end bg-orange-100 rounded-bl-none"
                    : "place-self-start bg-purple-100 rounded-br-none"
            }`}
        >
            {isMessageFromUser ? "you: " : `${message.player_name}: `}
            {message.body}
        </li>
    );
}
