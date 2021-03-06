import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    const { player } = props.auth;
    return (
        <>
            <Head>
                <title>Welcome</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {player ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-gray-700 underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-700 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div>
                    <h1>Where Wolf?</h1>
                </div>
            </div>
        </>
    );
}
