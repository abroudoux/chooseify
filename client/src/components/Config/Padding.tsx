import React, { FC } from "react";


type PaddingProps = {
    position : string,
    color : string,
};

const Padding : FC<PaddingProps> = ( props ) => {

    return (

        <div className={`${props.position}-0 left-0 fixed h-4 w-full bg-${props.color} z-20`}></div>

    );
};


export default Padding;
