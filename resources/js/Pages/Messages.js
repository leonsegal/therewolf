import React from "react";
import Message from "../Components/Message";

export default function Messages({ player, messages }) {
    return (
        <ul className="space-y-2 fixed inset-x-0 bottom-30 max-h-3 scroll-hidden left-0 grid grid-cols-1">
            {messages &&
                messages.map((message, key) => (
                    <Message key={key} message={message} player={player} />
                ))}
        </ul>
    );
}
