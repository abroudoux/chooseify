import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contact() {

    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    return (
        <section className="flex flex-row">

            <div className="h-auto w-2/4 p-6 flex flex-col justify-center items-center gap-14 bg-black" >

                <div className="flex flex-col gap-4 items-center">
                    <h1 className="text-center font-bold text-grey-light text-4xl ">
                        Contact
                    </h1>
                </div>

                <form action="#" method="POST" className="flex flex-col">
                    <div className="mb-6">
                        <label htmlFor="email" className="text-lg font-normal text-grey-light">
                            Email
                        </label>
                        <input id="email" name="email" type="email"  autoComplete="off" placeholder="Enter your email" required onChange={handleChange}
                            className="mt-2 w-full px-3 bg-grey-dark text-base rounded-md border-0 py-2 ring-0 outline-none ring-grey focus:ring-2 focus:ring-inset focus:ring-green text-blue-light placeholder:text-blue-light placeholder:font-light placeholder:text-base"/>
                    </div>

                    <div className="mb-10">
                        <label htmlFor="message" className="text-lg text-grey-light font-normal">
                            Your message
                        </label>
                        <textarea id="message" name="message" autoComplete="off"  placeholder="Enter your message" required onChange={handleChange}
                            className="mt-2 w-full px-3 bg-grey-dark text-base rounded-md border-0 py-2 ring-0 outline-none ring-grey focus:ring-2 focus:ring-inset focus:ring-green text-blue-light placeholder:text-blue-light placeholder:font-light placeholder:text-base"/>
                    </div>

                    <div className="flex flex-row items-center justify-center">
                        <button type="submit"
                            className="btn gap-1 delay-150 bg-green px-4 py-2 text-lg font-medium leading-6 text-black hover:bg-green-lighten hover:gap-2">
                                Send
                                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                        </button>
                    </div>
                </form>

            </div>

            <div className="h-auto w-2/4 p-6 flex flex-col justify-center items-center gap-14 bg-black" >

                <pre>{JSON.stringify(formData, null, 2)}</pre>

            </div>

        </section>
    )
};