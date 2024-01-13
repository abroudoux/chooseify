const variantsAuth = {
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


export default variantsAuth;