import React, { FC } from "react";


type InputProps = {
    name : string,
    label : string,
    type : string,
    placeholder : string,
};

const Input : FC<InputProps> = ( props ) => {

    return (

        <>
            <label htmlFor={ props.name } className="text-lg font-normal text-grey-light">
                { props.label }
            </label>
            <input
                name={ props.name } type={ props.type }  autoComplete="off" placeholder={ props.placeholder } required
                className="input-green-ring"/>
        </>

    )
}

export default Input;