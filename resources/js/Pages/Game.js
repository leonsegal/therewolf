import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import InfoPanel from "./header/InfoPanel";
import Messages from "./Messages";
import ChatForm from "./ChatForm";

let apiEndpoint = "http://localhost:4500";
let socket = socketIOClient(apiEndpoint);

export default function Game() {
    let [players, setPlayers] = useState([]);
    let [messages, setMessages] = useState([]);

    Echo.private(`foo`).notification(() => {});
    useEffect(() => {
        socket.on("player connected", ({ players, messages }) => {
            setPlayers(players);
            setMessages(messages);
        });
    }, []);

    return (
        <>
            <InfoPanel players={players} />
            <Messages socket={socket} allMessages={messages} />
            <ChatForm socket={socket} />
        </>
    );
}
