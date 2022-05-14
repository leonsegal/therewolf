import React from "react";
import InfoPanel from "./header/InfoPanel";
import Messages from "./Messages";
import ChatForm from "./ChatForm";

export default function Game() {
    let messages = [
        {
            id: 1,
            text: "test message 1",
        },
        {
            id: 2,
            text: "test message 2",
        },
        {
            id: 3,
            text: "test message 3",
        },
        {
            id: 4,
            text: "test message 4",
        },
    ];

    return (
        <>
            <h1>Chat</h1>

            <Messages messages={messages} />
            {/*<ChatForm user="{{ Auth::user() }}" />*/}
            {/*<InfoPanel players={players} />*/}
            {/*<Messages socket={socket} allMessages={messages} />*/}
        </>
    );
}
