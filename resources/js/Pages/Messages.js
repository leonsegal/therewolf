import React from "react";

export default function Messages({ messages, user }) {
    return (
        <ul>
            {messages.map((message) => (
                <li key={message.id}>
                    {message.player_name}
                    {user.id === message.player_id ? "(you): " : ": "}
                    {message.body}
                </li>
            ))}
        </ul>
    );
}
