import React, { useState } from "react";

export default function ChatForm() {
    let [message, setMessage] = useState("");

    let sendMessage = (e) => {
        e.preventDefault();

        axios
            .post("/message", { body: message })
            .then(setMessage(""))
            .catch(console.error);
    };

    return (
        <form method="POST" id="form" onSubmit={(e) => sendMessage(e)}>
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
