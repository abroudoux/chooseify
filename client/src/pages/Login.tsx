import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Login() {

    // const variants = {
    //     hidden: {opacity: 0, x: "-100%"},
    //     visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
    // };

    const variants1 = {
        hidden: {
            x: "-50%",
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
            x: "50%",
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

    return (

        <motion.section className="h-screen flex flex-row bg-green" initial="hidden" animate="visible" variants={variants1}>

            <motion.div className="h-full w-2/4 flex flex-col justify-center items-start gap-4 p-10 bg-blue-light rounded-s-lg" variants={variants1}>
                    <p className="text-grey-dark font-black text-7xl">
                        Don't know which album to listen to ?
                    </p>
                    <p className="text-grey-dark font-medium text-3xl">
                        Let <span className="font-semibold italic">Choosify</span> help you choose
                    </p>
            </motion.div>

            <motion.div className="h-full w-2/4 p-6 flex flex-col justify-center items-center gap-14 bg-black rounded-e-lg" variants={variants2}>

                <div className="flex flex-col gap-4 items-center">
                    <Link to={"/"}>
                        <div className="h-20 w-20 rounded-full bg-green"></div>
                    </Link>
                    <h1 className="text-center font-bold text-grey-light text-4xl ">
                        Log In
                    </h1>
                </div>

                <form action="#" method="POST" className="flex flex-col">
                    <div className="mb-6">
                        <label htmlFor="email" className="text-lg font-normal text-grey-light">
                            Email
                        </label>
                        <input id="email" name="email" type="email"  autoComplete="off" placeholder="Enter your email" required
                            className="mt-2 w-full px-3 bg-grey-dark text-base rounded-md border-0 py-2 ring-0 outline-none ring-grey focus:ring-2 focus:ring-inset focus:ring-green text-blue-light placeholder:text-blue-light placeholder:font-light placeholder:text-base"/>
                    </div>

                    <div className="mb-10">
                        <label htmlFor="password" className="text-lg text-grey-light font-normal">
                            Password
                        </label>
                        <input id="password" name="password" type="password" autoComplete="off"  placeholder="Enter your password" required
                            className="mt-2 w-full px-3 bg-grey-dark text-base rounded-md border-0 py-2 ring-0 outline-none ring-grey focus:ring-2 focus:ring-inset focus:ring-green text-blue-light placeholder:text-blue-light placeholder:font-light placeholder:text-base"/>
                    </div>

                    <div className="flex flex-row items-center justify-center">
                        <button type="submit"
                            className="btn gap-1 delay-150 bg-green px-4 py-2 text-lg font-medium leading-6 text-black hover:bg-green-lighten hover:gap-2">
                                Log In
                                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                        </button>
                    </div>
                </form>

                <div>
                    <p className="font-grey-light font-light text-base">
                        Don't have an account yet ? 
                        <span>
                            <Link to={"/register"}  className="ml-1 font-normal text-green hover:cursor-pointer hover:text-green-lighten">
                                Sign In
                            </Link>
                        </span>
                    </p>
                </div>

            </motion.div>

        </motion.section>

    )

};

