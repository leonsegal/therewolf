import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div className="py-12">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <Link
                        href={route("game")}
                        className="p-6 bg-gray-800 text-white border-b border-gray-200 shadow-sm sm:rounded-lg"
                    >
                        Join game!
                    </Link>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 font-bold">
                            How to play
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                            <p className="font-semibold">Overview:</p>
                            <p>
                                <p>
                                    🐺 Each game will have at least one werewolf
                                    and up to one seer
                                </p>
                                <p>🐺 The other players are normal villagers</p>
                                <p>
                                    🐺 The game is divided into day and night
                                    phases
                                </p>
                            </p>
                            <br />
                            <p className="font-semibold">Night:</p>
                            <p>
                                <p>
                                    🐺 At night the werewolf can select a player
                                    to kill:
                                </p>
                                <p className="ml-4">
                                    🐺 Dead players are not active in the game
                                    (can't chat or vote)
                                </p>
                                <p className="ml-4">
                                    🐺 Dead players can still see the game chat
                                </p>
                            </p>
                            <br />
                            <p>
                                <p>
                                    🐺 At night, the seer can select a player to
                                    see if they're a werewolf:
                                </p>
                                <p className="ml-4">
                                    🐺 The seer can then reveal their identity
                                    to the village, but this makes them a target
                                    for the werewolf
                                </p>
                                <p className="ml-4">
                                    🐺 The seer can also choose to keep their
                                    identity secret and quietly steer the
                                    village
                                </p>
                            </p>
                            <br />
                            <p className="font-semibold">Day:</p>
                            <p>
                                🐺 At the start of the day phase, players can
                                openly discuss among themselves, to see if they
                                can work out who is the werewolf
                            </p>
                            <p>
                                🐺 At the end of the day phase, all players can
                                anonymously vote for any other player
                            </p>
                            <p>🐺 The seer and werewolf can both vote</p>
                            <p>
                                🐺 The player with the most votes gets lynched
                                and is dead (see above on dead players)
                            </p>
                            <br />
                            <p className="font-semibold">Game End:</p>
                            <p>🐺 The village wins when the werewolf is dead</p>
                            <p>
                                🐺 The werewolf wins when all the villagers are
                                dead:
                            </p>
                            <p className="ml-4">
                                🐺 If there is one villager plus the werewolf
                                left, the werewolf openly kills the remaining
                                villager and wins
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
