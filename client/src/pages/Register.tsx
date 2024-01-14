import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FormData } from "@/types/types";
import { variantsRegisterAuth } from "@/lib/animations";

import Input from "@/components/Form/Input";
import SignInfos from "@/components/Content/SignInfos";


export default function Register() {

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.REACT_APP_BASE_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.access_token);
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error: any) {
            console.error("Error:", error.message);
        };
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <motion.section className="w-full h-full p-4 min-h-screen flex-row-center bg-green" initial="hidden" animate="visible">
            <motion.div className="w-2/4 h-screen flex-col-center-center gap-14 bg-black rounded-s-lg" variants={ variantsRegisterAuth }>
                <h1 className="text-center font-bold text-grey-light text-5xl">Sign In</h1>

                <form onSubmit={handleSubmit} className="flex-col mb-20">
                    <div className="mb-6">
                        <Input name="firstName" type="text" placeholder="Enter your firstname" label="First Name" onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <Input name="email" type="email" placeholder="Enter your email" label="Email" onChange={handleChange} />
                    </div>
                    <div className="mb-14">
                        <Input name="password" type="password" placeholder="Enter your password" label="Password" onChange={handleChange} />
                    </div>
                    <div className="flex-row-center-center">
                        <button type="submit" className="btn-green-icon">
                            Sign In <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
                        </button>
                    </div>
                </form>

                <div>
                    <p className="font-grey-light font-light text-lg">
                        Already have an account ?
                        <span>
                            <Link to={"/auth/login"} className="ml-1 font-normal text-green hover:cursor-pointer hover:text-green-lighten">Login</Link>
                        </span>
                    </p>
                </div>
            </motion.div>

            <SignInfos roundedPosition="e" initialPositionX="-100%"/>
        </motion.section>
    )
};

