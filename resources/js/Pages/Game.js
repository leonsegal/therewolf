import React, { useState, useEffect } from "react";
// import InfoPanel from "./header/InfoPanel";
import Messages from "./Messages";
import ChatForm from "./ChatForm";

export default function Game() {
    let [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("/messages")
            .then((res) => res.json())
            .then((data) => setMessages(data));
    }, []);

    return (
        <>
            <h1>Chat</h1>

            {/*<InfoPanel players={players} />*/}
            <Messages messages={messages} />
            <ChatForm user="{{ Auth::user() }}" />
        </>
    );
}
