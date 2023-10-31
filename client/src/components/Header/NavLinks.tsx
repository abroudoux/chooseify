import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import '../../style/components/navlinks.scss';


type NavLinkProps = {
    path : string;
    title : string;
    left ? : number;
};

const NavLinks : FC<NavLinkProps> = ( props ) => {

    const location = useLocation();

    return (

        <li className={`px-4 py-2 text-blue-light left-${ props.left } hover:text-blue-light-lighten ${location.pathname === props.path ? "active" : ""}`}>
            <Link to={ props.path }>
                { props.title }
            </Link>
        </li>

    )
};


export default NavLinks;
