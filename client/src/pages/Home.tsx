import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/Cards/Card";


export default function Home() {

    return (

        <section className="page gap-64">

            <div className="h-auto w-full flex-col-center gap-20">

                <h1 className="text-center text-6xl h1-hero-banner max-w-5xl font-black" data-aos="fade-up" data-aos-duration="3000">
                    From a Notion Database, launch randomly an album on Spotify
                </h1>
                <p className="max-w-3xl text-center text-xl text-grey-light font-normal" data-aos="fade-up" data-aos-duration="3000">
                    J'avoue je sais pas encore quoi écrire mais t'inquiètes pas ça va venir pour le moment je laisse ça comme ça
                </p>
                <ul className="flex-row-center gap-8 text-lg">
                    <li data-aos="fade-up" data-aos-duration="3000">
                        <Link to={"/start"} className="btn-green-icon">
                            Get started
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="3000">
                        <a href="https://github.com/abroudoux/chooseify" target="_blank" className="btn-grey-dark-icon">
                            Github
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>

            </div>

            <div className="h-auto w-full flex-col-center max-w-5xl gap-16">

                <div className=" w-full flex flex-col items-start gap-3">
                    <p className="text-xl text-grey-light font-extralight leading-10">
                        Lorem, ipsum.
                    </p>
                    <h2 className="text-5xl max-w-5xl text-white font-bold">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, minima?
                    </h2>
                    <p className="text-lg text-grey-light font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eaque optio sunt nam voluptatibus maiores explicabo quam cumque adipisci voluptates recusandae maxime necessitatibus odio officia commodi ea nisi, nemo perferendis.
                    </p>
                </div>

                <div className="w-full flex-row-center-between">
                    <Card title="1st Card"/>
                    <Card title="2nd Card"/>
                    <Card title="3rd Card"/>
                </div>

            </div>


        </section>

    )
};