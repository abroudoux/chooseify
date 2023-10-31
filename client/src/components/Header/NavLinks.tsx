import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";


type NavLinkProps = {
    path : string;
    title : string;
};

const NavLinks : FC<NavLinkProps> = ( props ) => {

    const location = useLocation();

    return (

        <li className={`px-4 py-2 text-blue-light ${location.pathname === props.path ? "active" : ""} hover:text-blue-light-lighten`}>
            <Link to={ props.path }>
                { props.title }
            </Link>
        </li>

    )
};


export default NavLinks;
