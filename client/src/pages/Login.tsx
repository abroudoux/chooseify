import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Input from "@/components/Form/Input";
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

    return (

        <motion.section className="w-full h-full p-4 min-h-screen flex-row-center-between bg-green" initial="hidden" animate="visible">

            <SignInfos roundedPosition="s" initialPositionX="100%"/>

            <motion.div className="w-2/4 h-screen p-4 flex-col-center-center gap-14 bg-black rounded-e-lg" variants={ variants }>

                <div className="flex-col-center-center gap-4">
                    <Link to={"/"}>
                        <div className="h-20 w-20 rounded-full bg-green"></div>
                    </Link>
                    <h1 className="text-center font-bold text-grey-light text-5xl ">
                        Login
                    </h1>
                </div>

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
                                <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
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

