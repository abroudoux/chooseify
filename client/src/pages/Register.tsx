import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import axios, { AxiosError, AxiosResponse } from "axios";

import { registerRoute } from "../utils/APIRoutes";

import "../index.css";
import "react-toastify/dist/ReactToastify.css";


function Register() {

    const navigate = useNavigate();

    const toastOptions: ToastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });

    const handleChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleValidation = () => {
        const { password, passwordConfirmation, username, email } = values;

        if ( password !== passwordConfirmation ) {
            toast.error(
                "Password and confirm password should be same.",
                toastOptions
            );
            return false;

        } else if ( username.length < 3 ) {
            toast.error(
                "Username should be greater than 3 characters.",
                toastOptions
            );
            return false;

        } else if ( password.length < 8 ) {
            toast.error(
                "Password should be equal or greater than 8 characters.",
                toastOptions
            );
            return false;

        } else if ( email === "" ) {
            toast.error(
                "Email is required.", 
                toastOptions
            );
            return false;
        };

        return true;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (handleValidation()) {
            const { username, email, password } = values;

            try {
                const response: AxiosResponse = await axios.post(registerRoute, {
                    username,
                    email,
                    password,
                });

                if ( response.data.status ) {
                    localStorage.setItem("chat-app-user", JSON.stringify(response.data.user));
                } else {
                    toast.error(response.data.msg, toastOptions);
                };

                navigate("/");

            } catch ( error: any | AxiosError ) {

                if ( axios.isAxiosError(error) ) {
                    if (error.response) {
                        console.error("Erreur de serveur :", error.response.data);
                    } else {
                        console.error("Erreur de réseau :", error.message);
                    };

                } else {
                    console.error("Erreur inconnue :", error);
                };

            };
        };
    };

    return (

        <section className="w-full max-w-md">
            <form
                onSubmit={(event) => handleSubmit(event)}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <h1 className="text-gray-700 mb-4 text-xl">Register</h1>

                <div className="mb-4">
                <label
                    htmlFor="username"
                    className="block text-gray-700 text-sm mb-2"
                >
                    Username
                </label>
                <input
                    required
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => handleChange(e)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                </div>

                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
                    Email
                </label>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => handleChange(e)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                </div>

                <div className="mb-4">
                <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm mb-2"
                >
                    Password
                </label>
                <input
                    required
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => handleChange(e)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                </div>

                <div className="mb-4">
                <label
                    htmlFor="passwordConfirmation"
                    className="block text-gray-700 text-sm mb-2"
                >
                    Confirm your password
                </label>
                <input
                    required
                    type="password"
                    name="passwordConfirmation"
                    placeholder="Confirm your password"
                    onChange={(e) => handleChange(e)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                </div>

                <div className="flex items-center justify-between">
                <button className="btn" type="submit">
                    Create User
                </button>
                <span className="inline-block align-baseline text-sm text-blue-500 hover:cursor">
                    Already have an account ?<Link to="/login"> Login</Link>
                </span>
                </div>
            </form>
            <ToastContainer />
        </section>

    );

};

export default Register;
