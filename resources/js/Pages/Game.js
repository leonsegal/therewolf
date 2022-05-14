import React from "react";
// import InfoPanel from "./header/InfoPanel";
import Messages from "./Messages";
import ChatForm from "./ChatForm";

export default function Game() {
    let messages = [];

    for (let i = 0; i < 10; i++) {
        messages.push({
            id: i + 1,
            player: `Player ${i + 1}`,
            text: `test message ${i + 1}`,
        });
    }

    return (
        <>
            <h1>Chat</h1>

            {/*<InfoPanel players={players} />*/}
            <Messages messages={messages} />
            <ChatForm user="{{ Auth::user() }}" />
        </>
    );
}
