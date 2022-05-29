import React, { useState } from "react";

export default function ChatForm() {
    let [messageBody, setMessageBody] = useState("");
    let roomId = 0;

    let sendMessage = (e) => {
        e.preventDefault();

        axios
            .post("/message", { messageBody, roomId }) //  might need player and game info
            .then(setMessageBody(""))
            .catch(console.error);
    };

    return (
        <form
            className="absolute inset-x-0 bottom-5 left-5"
            method="POST"
            id="form"
            onSubmit={(e) => sendMessage(e)}
        >
            <input
                id="input"
                type="text"
                name="message"
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                placeholder="Type your message here..."
                autoFocus={true}
                autoComplete="off"
            />
            <input type="submit" value="Send" />
        </form>
    );
}
