import React from "react";
import { Link } from "react-router-dom";


export default function HeaderDashboard() {

    let userName = "Arthur";

    return (

        <header className="w-full flex flex-row justify-between items-center sticky top-4 bg-grey-dark px-10 py-4 rounded-t-lg">

            <div>
                <Link to={"/"} className="flex flex-row items-center gap-3">
                    <div className="h-14 w-14 bg-green rounded-full"></div>
                    <p className="text-3xl font-semibold">
                        Choosify
                    </p>
                </Link>
            </div>

            <div>
                <Link to={"dashboard/account"} className="flex flex-row items-center gap-2">
                    <p>{ userName }</p>
                    <div className="h-10 w-10 bg-grey-light rounded-full"></div>
                </Link>
            </div>

        </header>

    )
}