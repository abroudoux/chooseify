import React from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";


export default function Header() {

    return (

        <header className="w-full flex flex-row justify-between items-center px-10 py-4 sticky top-4 bg-grey-dark rounded-t-lg">

            <div>
                <Link to={"/"}>
                    <div className="h-14 w-14 bg-green rounded-full"></div>
                </Link>
            </div>

            <nav className="flex-1 px-16">
                <ul className="flex flex-row items-center">
                    <NavLinks path="/" title="Home" />
                    <NavLinks path="/start" title="Start" />
                    <NavLinks path="/about" title="About" />
                    <NavLinks path="/contact" title="Contact" />
                </ul>
            </nav>

            <div>
                <ul className="flex flex-row items-center gap-2">
                    <li>
                        <Link to={"/login"} className="btn text-grey-light hover:decoration-green">
                            Log In
                        </Link>
                    </li>
                    <li>
                        <Link to={"/register"} className="btn text-grey-dark bg-grey-light rounded-lg border-grey-light border-2 delay-75 hover:bg-grey-dark hover:border-grey-light hover:text-grey-light">
                            Sign In
                        </Link>
                    </li>
                </ul>
            </div>

        </header>

    )
}