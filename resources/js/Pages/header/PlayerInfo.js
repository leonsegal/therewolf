import React from "react";

export default function PlayerInfo({ players, player }) {
    let thePlayer = players.find((plyr) => plyr.id === player.id);

    return (
        <div className="m-2" id="players">
            <span>
                <strong>Players:</strong>
            </span>
            {thePlayer ? (
                <span className="bg-red-400 text-white m-2 p-2">
                    {thePlayer.name} (you)
                </span>
            ) : null}
            {players
                .filter((player) => {
                    if (thePlayer) {
                        return thePlayer.id !== player.id;
                    }
                })
                .map((player, id) => (
                    <span className="bg-blue-400 text-white m-2 p-2" key={id}>
                        {player.name}
                    </span>
                ))}
        </div>
    );
}
