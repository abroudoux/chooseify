import { FC } from "react";
import { motion } from 'framer-motion';


type SignInfosProps = {
    roundedPosition : string;
    initialPositionX : string;
};

const SignInfos : FC<SignInfosProps> = ( props ) => {

    const variants = {
        hidden: {
            x: props.initialPositionX,
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
        <motion.div className={`w-2/4 h-screen flex flex-col-start-center items-start gap-8 p-12 bg-blue-light rounded-${ props.roundedPosition }-lg`} variants={ variants }>
            <p className="text-grey-dark font-black text-7xl">
                Don't know which album to listen to ?
            </p>
            <p className="text-grey-dark font-medium text-3xl">
                Let <span className="font-semibold italic">Choosify</span> help you choose
            </p>
        </motion.div>
    );

};


export default SignInfos;
