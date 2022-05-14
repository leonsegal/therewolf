import React, { useState, useEffect } from "react";
// import InfoPanel from "./header/InfoPanel";
import Messages from "./Messages";
import ChatForm from "./ChatForm";

export default function Game() {
    let [messages, setMessages] = useState([]);

    useEffect(() => {
        axios
            .get("/messages")
            .then((res) => setMessages(res.data))
            .catch(console.error);
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
