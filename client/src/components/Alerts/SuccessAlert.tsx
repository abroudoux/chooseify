import React from "react";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../style/components/success.scss";



type SuccessAlertProps = {
    message : string;
    messageCta : string;
    path : string;
};

const SuccessAlert = ( props : SuccessAlertProps ) => {

    return (

        <div className="h-full w-full absolute top-0 left-0 flex-col-center-center overflow-y-hidden">

            <Link to={ props.path } className="h-full w-full absolute">
                <div className="h-full w-full bg-blue-light opacity-90 absolute"></div>
            </Link>

            <div className="w-auto min-w-min h-auto flex-col-center gap-10 p-14 bg-grey-dark  rounded-lg z-10">

                <div className="w-auto h-auto rounded-lg flex-row-center-between gap-3 bg-grey-dark">
                    <div className="success-animation">
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                    <p className="text-xl font-semibold text-grey-light">
                        { props.message }
                    </p>
                </div>

                <div className="w-full h-auto flex-col-center gap-5">
                    <Link to={ props.path } className="btn-white-icon">
                        { props.messageCta }
                        <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                    </Link>
                </div>

            </div>

        </div>

    )
}


export default SuccessAlert;
