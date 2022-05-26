import React from "react";

export default function RoleInfo({ roles, player }) {
    return (
        <div id="roles">
            <strong>Roles: </strong>

            {roles
                .filter((role) => role.id !== player.role_id)
                .map((role, id) => (
                    <span key={id}>{role.name} </span>
                ))}
        </div>
    );
}
