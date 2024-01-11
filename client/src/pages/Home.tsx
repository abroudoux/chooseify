import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import Card from "@/components/Cards/Card";


export default function Home() {
    return (
        <section className="w-full h-full min-h-screen min-w-screen bg-green flex-col-center-center px-4">
            <div className="w-full h-screen bg-black flex-col-center-center rounded-lg gap-16">
                <h1 className="text-center text-7xl h1-hero-banner max-w-5xl font-black">
                    From a Notion Database, launch randomly an album on Spotify
                </h1>
                <p className="max-w-4xl text-center text-3xl text-grey-light font-normal mb-10">
                    Connect Notion & Spotify together to create a playground that can decide for you which album to listen to
                </p>
                <ul className="flex-row-center gap-8 text-lg">
                    <li>
                        <Link to={"/auth/login"} className="btn-green-icon">
                            Get started
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/abroudoux/chooseify" target="_blank" className="btn-grey-dark-icon">
                            Github
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};