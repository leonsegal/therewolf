import React from "react";
import RoleInfo from "./RoleInfo";
import PlayerInfo from "./PlayerInfo";

export default function InfoPanel({ players, player }) {
    return (
        <div id="info">
            <RoleInfo player={player} roles={[]} />
            <PlayerInfo players={players} player={player} />
        </div>
    );
}
