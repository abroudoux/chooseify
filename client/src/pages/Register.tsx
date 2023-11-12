import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Input from '../components/Form/Input';


export default function Register() {

    const variants1 = {
        hidden: {
            x: "100%",
            opacity: 1,
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

    const variants2 = {
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

    return (

        <motion.section className="h-screen flex-row-center bg-green" initial="hidden" animate="visible">

            <motion.div className="h-full w-2/4 p-6 flex-col-center-center gap-14 bg-black rounded-s-lg" variants={variants1}>

                <div className="flex-col-center gap-4">
                    <Link to={"/"}>
                        <div className="h-20 w-20 bg-green rounded-full"></div>
                    </Link>
                    <h1 className=" text-center text-grey-light text-4xl font-bold">
                        Sign In
                    </h1>
                </div>

                <form action="#" method="POST" className="flex flex-col">

                    <div className="mb-6">
                        <Input name="email" type="email" placeholder="Enter your email" label="Email" />
                    </div>

                    <div className="mb-10">
                        <Input name="password" type="password" placeholder="Enter your password" label="Password" />
                    </div>

                    <div className="flex-row-center-center">
                        <button type="submit"
                            className="btn-green-icon">
                                Sign in
                                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                        </button>
                    </div>

                </form>

                <div>
                    <p className="font-grey-light font-light text-base">
                        Already have an account ? 
                        <span>
                            <Link to={"/login"} className="ml-1 font-normal text-green hover:cursor-pointer hover:text-green-lighten">
                                Log In
                            </Link>
                        </span>
                    </p>
                </div>

            </motion.div>

            <motion.div className="h-full w-2/4 flex flex-col justify-center items-start gap-4 bg-blue-light rounded-e-lg p-10" variants={variants2}>
                <p className="text-grey-dark font-black text-7xl">
                    Don't know which album to listen to ?
                </p>
                <p className="text-grey-dark font-medium text-3xl">
                    Let <span className="font-semibold italic">Choosify</span> help you choose
                </p>
            </motion.div>

        </motion.section>

    )

};
