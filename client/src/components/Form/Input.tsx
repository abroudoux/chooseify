import React, { ChangeEvent, FC } from "react";


type InputProps = {
    name : string,
    label : string,
    type ? : string,
    placeholder : string,
    element ? : string,
    onChange ? : (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>)  => void,
};

const Input : FC<InputProps> = ( props ) => {

    return (

        <>
            <label htmlFor={ props.name } className="text-lg font-normal text-grey-light">
                { props.label }
            </label>
            {props.element === "textarea" ? (
                <textarea name={ props.name } autoComplete="off" placeholder={ props.placeholder } onChange={ props.onChange } required className="input-green-ring"/>
            ) : ( 
                <input name={ props.name } type={ props.type }  autoComplete="off" placeholder={ props.placeholder } onChange={ props.onChange } required className="input-green-ring"/>
            )}
        </>

    )
}

export default Input;