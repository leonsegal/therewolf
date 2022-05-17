import React from "react";
import RoleInfo from "./RoleInfo";
import PlayerInfo from "./PlayerInfo";

export default function InfoPanel({ players, user }) {
    return (
        <div id="info">
            <RoleInfo />
            <PlayerInfo players={players} user={user} />
        </div>
    );
}
