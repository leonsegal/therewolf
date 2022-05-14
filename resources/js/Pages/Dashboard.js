import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Therewolf!
                </h2>
            }
        >
            <Head>
                <title>Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Link
                        href={route("game")}
                        className="p-6 bg-gray-800 text-white border-b border-gray-200 shadow-sm sm:rounded-lg"
                    >
                        Join game!
                    </Link>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 font-bold">
                            How to play
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                            <p className="font-semibold">Overview:</p>
                            <p>
                                Each game will have one werewolf and one seer.
                                The other players are normal villagers. The game
                                is divided into day and night phases.
                            </p>
                            <br />
                            <p className="font-semibold">Night:</p>
                            <p>
                                At night the werewolf can select a player to
                                kill one player. That player will no longer be
                                active in the game, but will be able to see what
                                is being said.
                            </p>
                            <br />
                            <p>
                                The seer can choose one player at night to see
                                if they're a werewolf or not. The seer can then
                                steer the village, but if the werewolf works out
                                who the seer is they can kill them the next
                                night, so the seer has to be careful, unless
                                they can be sure the village will believe them
                                and lynch the werewolf.
                            </p>
                            <br />
                            <p className="font-semibold">Day:</p>
                            <p>
                                During the day all players can vote for a
                                suspicious player to get them lynched. The seer
                                and werewolf can both vote.
                            </p>
                            <br />
                            <p className="font-semibold">Game End:</p>
                            <p>
                                The village wins when the werewolf is dead. The
                                werewolf wins if they are the last player. The
                                werewolf therefore wins when they have equal
                                numbers to the village, at which point they will
                                rise up openly and kill the remaining villagers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
