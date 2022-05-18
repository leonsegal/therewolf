import React from "react";

export default function RoleInfo({ roles, player }) {
    let theRole = roles.find((role) => role.id === player.role_id);

    return (
        <div id="roles">
            <span>
                <strong>Roles:</strong>
            </span>
            <ul>
                <li>(you){theRole}</li>
                {roles
                    .filter((role) => role.id !== player.role_id)
                    .map((role, id) => (
                        <li key={id}>{role.name}</li>
                    ))}
            </ul>
        </div>
    );
}
