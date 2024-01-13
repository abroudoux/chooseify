import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from "react";

import Input from '@/components/Form/Input';
import SignInfos from "@/components/Content/SignInfos";


export default function Login() {

    const variants = {
        hidden: {
            x: "-100%",
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
            },
        },
    };

    // je veux envoyer une requête post au endpoit "localhost:4050/api/auth/login" avec le contenu du formulaire
    // je veux que le serveur me renvoie un token

    useEffect(() => {
        fetch("http://localhost:4050/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: " ",
                password: " ",
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
    }, []);

    return (

        <motion.section className="w-full h-full p-4 min-h-screen flex-row-center-between bg-green" initial="hidden" animate="visible">

            <SignInfos roundedPosition="s" initialPositionX="100%"/>

            <motion.div className="w-2/4 h-screen p-4 flex-col-center-center gap-14 bg-black rounded-e-lg" variants={ variants }>

                <h1 className="text-center font-bold text-grey-light text-5xl ">
                    Login
                </h1>

                <form action="#" method="POST" className="flex-col mb-20">

                    <div className="mb-6">
                        <Input name="email" type="email" placeholder="Enter your email" label="Email" />
                    </div>

                    <div className="mb-14">
                        <Input name="password" type="password" placeholder="Enter your password" label="Password" />
                    </div>

                    <div className="flex-row-center-center">
                        <button type="submit"
                            className="btn-green-icon">
                                Log In
                                <FontAwesomeIcon icon={faArrowRight} className="text-md" />
                        </button>
                    </div>
                </form>

                <div>
                    <p className="font-grey-light font-light text-lg">
                        Don't have an account yet ? 
                        <span>
                            <Link to={"/auth/register"}  className="ml-1 font-normal text-green hover:cursor-pointer hover:text-green-lighten">
                                Sign In
                            </Link>
                        </span>
                    </p>
                </div>

            </motion.div>

        </motion.section>

    );

};

