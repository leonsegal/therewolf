import React from "react";

export default function Messages({ messages }) {
    return (
        <ul>
            {messages.map((message) => (
                <li key={message.id}>{message.text}</li>
            ))}
        </ul>
    );
}
