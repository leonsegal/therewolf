import React from "react";

export default function RoleInfo({ roles, player }) {
    let otherRoles = roles.filter((role) => role.id !== player.role_id);
    let roleNames = otherRoles.map((role) => role.name);

    return (
        <div id="roles">
            <strong>Roles: </strong>

            {roleNames.join(" - ")}
        </div>
    );
}
