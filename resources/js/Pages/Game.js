import React, { useState, useEffect } from "react";
// import InfoPanel from "./header/InfoPanel";
import Messages from "./Messages";
import ChatForm from "./ChatForm";

export default function Game() {
    let [messages, setMessages] = useState([]);
    let [user, setUser] = useState({});

    useEffect(() => {
        Echo.private("chat").listen("MessageSent", (e) =>
            setMessages([e.message, ...messages])
        );

        axios
            .get("/messages")
            .then((res) => setMessages(res.data.messages))
            .catch(console.error);

        axios.get("/user").then((res) => setUser(res.data.user));
    }, [user, messages]);

    return (
        <>
            <h1>Chat</h1>

            {/*<InfoPanel players={players} />*/}
            <Messages messages={messages} user={user} />
            <ChatForm />
        </>
    );
}
