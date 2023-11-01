import React from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";


export default function Header() {

    return (

        <header className="w-full flex-row-center-between px-10 py-4 sticky top-4 bg-grey-dark rounded-t-lg">

            <div>
                <Link to={"/"}>
                    <div className="h-14 w-14 bg-green rounded-full"></div>
                </Link>
            </div>

            <nav className="flex-1 px-16">
                <ul className="flex-row-center w-auto">
                    <NavLinks path="/" title="Home" />
                    <NavLinks path="/start" title="Start" />
                    <NavLinks path="/about" title="About" />
                    <NavLinks path="/contact" title="Contact" />
                    <li className="slide absolute top-0 left-0 w-full h-full -z-10 transition-all opacity-0"></li>
                </ul>
            </nav>

            <div>
                <ul className="flex-row-center gap-2">
                    <li>
                        <Link to={"/login"} className="btn text-grey-light hover:text-blue-light">
                            Log In
                        </Link>
                    </li>
                    <li>
                        <Link to={"/register"} className="btn-white">
                            Sign In
                        </Link>
                    </li>
                </ul>
            </div>

        </header>

    )
}