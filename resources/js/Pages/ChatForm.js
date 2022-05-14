import React, { useState } from "react";

export default function ChatForm() {
    let [message, setMessage] = useState("");

    let sendMessage = (e) => {
        e.preventDefault();
    };

    return (
        <form id="form" onSubmit={() => sendMessage()}>
            <input
                id="input"
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                autoFocus={true}
                autoComplete="off"
            />
            <input type="submit" value="Send" />
        </form>
    );
}
