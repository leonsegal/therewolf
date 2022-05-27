import React from "react";
import RoleInfo from "./RoleInfo";
import PlayerInfo from "./PlayerInfo";

export default function InfoPanel({ players, player, roles }) {
    return (
        <div id="info">
            <RoleInfo player={player} roles={roles} />
            <hr />
            <PlayerInfo players={players} player={player} />
        </div>
    );
}
