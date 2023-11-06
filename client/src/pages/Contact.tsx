import React, { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SuccessAlert from "../components/Alerts/SuccessAlert";
import Input from "../components/Form/Input";


export default function Contact() {

    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [showSuccess, setShowSuccess] = useState(false);

    const handleSend = () => {
        setShowSuccess(true);
    };


    return (

        <section className="flex flex-row w-full h-full">

            {showSuccess && (
                <SuccessAlert message="Message succesfully sent" messageCta="Go Home" path="/" />
            )}

            <div className="h-auto w-2/4 p-36 flex flex-col-center gap-10 bg-black rounded-es-lg">

                <div className="flex flex-col-center gap-4">
                    <h1 className="text-center font-bold text-grey-light text-4xl ">
                        Contact
                    </h1>
                </div>

                <form action="#" method="POST" className="flex flex-col">

                    <div className="mb-6">
                        <Input name="email" type="email" placeholder="Enter your email" label="Email" onChange={ handleChange }/>
                    </div>

                    <div className="mb-10">
                        <Input element="textarea" name="message" label="Your message" placeholder="Enter your message" onChange={ handleChange } />
                    </div>

                    <div className="flex-row-center-center">
                        <p onClick={ handleSend }
                            className="btn-green-icon hover:cursor-pointer">
                                Send
                                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                        </p>
                        {/* <button type="submit"
                            className="btn-green-icon">
                                Send
                                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                        </button> */}
                    </div>
                </form>

            </div>

            <div className="h-auto w-2/4 p-36 flex-col-center gap-14 bg-blue-light rounded-ee-lg">

                <div className="flex-col-center gap-4">
                    <h1 className="text-center font-bold text-grey-dark text-4xl ">
                        Your message
                    </h1>
                </div>

                <pre className="text-grey-dark">
                    {JSON.stringify(formData, null, 2)}
                </pre>

            </div>

        </section>

    )
};