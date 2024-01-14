import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { variantsLoginAuth } from "@/helpers/animations";
import { FormData } from "@/types/types";
import useStore from "@/helpers/store";

import Input from "@/components/Form/Input";
import SignInfos from "@/components/Content/SignInfos";
import { Icons } from '@/components/ui/icons';


export default function Login() {

    const { isLoading, setIsLoading } = useStore();

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.REACT_APP_BASE_URL}/auth/login`, {
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
                toast.error("Error during connexion, please retry.");
            }
        } catch (error: any) {
            console.error("Error:", error.message);
        };

        setIsLoading(false);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <motion.section className="w-full h-full p-4 min-h-screen flex-row-center-between bg-green" initial="hidden" animate="visible">
            <SignInfos roundedPosition="s" initialPositionX="100%"/>

            <motion.div className="w-2/4 h-screen p-4 flex-col-center-center gap-14 bg-black rounded-e-lg" variants={ variantsLoginAuth }>

                <h1 className="text-center font-bold text-grey-light text-5xl ">Login</h1>

                <form action="#" method="POST" onSubmit={handleSubmit} className="flex-col mb-20">
                    <div className="mb-6">
                        <Input name="email" type="email" placeholder="Enter your email" label="Email" onChange={handleChange} />
                    </div>
                    <div className="mb-14">
                        <Input name="password" type="password" placeholder="Enter your password" label="Password" onChange={handleChange} />
                    </div>
                    <div className="flex-row-center-center">
                        <button type="submit" className="btn-green-icon">
                        {isLoading ? (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <div>Log In<FontAwesomeIcon icon={faArrowRight} className="text-md" /></div>
                        )}
                        </button>
                    </div>
                </form>

                <div>
                    <p className="font-grey-light font-light text-lg">Don't have an account yet ? 
                        <span><Link to={"/auth/register"}  className="ml-1 font-normal text-green hover:cursor-pointer hover:text-green-lighten">Sign In</Link></span>
                    </p>
                </div>
            </motion.div>
        </motion.section>
    )
};

