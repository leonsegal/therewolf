import React from "react";

function RoleInfo({ player }) {
    console.log("player", player);

    return (
        <div id="roles">
            <span>
                <strong>Roles:</strong>
            </span>
            <ul></ul>
        </div>
    );
}

export default RoleInfo;
