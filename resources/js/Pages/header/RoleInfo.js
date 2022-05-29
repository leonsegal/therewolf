import React from "react";

export default function RoleInfo({ roles, player }) {
    let otherRoles = roles.filter((role) => role.id !== player.role_id);

    return (
        <div className="m-2" id="roles">
            <strong>Roles: </strong>

            {otherRoles.map((role) => (
                <span key={role.id} className="bg-blue-400 text-white m-2 p-2">
                    {role.name}
                </span>
            ))}
        </div>
    );
}
