import React, { useState, useEffect } from "react";
// import InfoPanel from "./header/InfoPanel";
import Messages from "./Messages";
import ChatForm from "./ChatForm";

export default function Game() {
    let [messages, setMessages] = useState([]);
    let [user, setUser] = useState({});
    useEffect(() => {
        Echo.private("chat").listen("MessageSent", (e) => {
            console.log(e); // deleteme
            setUser(e.user);
            setMessages([e.message, ...messages]);
        });
    }, []);

    useEffect(() => {
        axios
            .get("/messages")
            .then((res) => {
                setMessages(res.data.messages);
                setUser(res.data.user);
            })
            .catch(console.error);
    }, []);

    return (
        <>
            <h1>Chat</h1>

            {/*<InfoPanel players={players} />*/}
            <Messages messages={messages} user={user} />
            <ChatForm />
        </>
    );
}
