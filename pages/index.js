import Link from "next/link";
import {motion} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter,faGithub } from "@fortawesome/free-brands-svg-icons";
import {useEffect} from "react";

function HomePage() {
    useEffect(() => {
        document.title = 'Blog - Ş. EFE ÖZ';
    });
    return(
        <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
    <>
        <div className="bg">
        <div className="site-4xl-container mx-5 lg:mx-auto flex flex-col md:flex-row items-center">
            <div className="max-w-2xl m-6 border-2 rounded-xl p-2 bg-zinc-100 bg-opacity-20  md:basis-1/2">
                <img className="rounded-xl saturate-50 hover:saturate-100 transition" src="/me-portrait.JPG" alt=""/>
            </div>
            <div className="space-y-4 mx-5 md:mx-0 md:basis-1/2 text-center md:text-left ">

            <h1 className="raleway-light text-3xl text-light-blue">
                Hello. I'm Sadan Efe.
            </h1>
            <h2 className="text-2xl raleway-md text-semi-blue">
                I'm studying Software Engineering at Istinye University.
            </h2>
            </div>
            </div>
            <div className="site-4xl-container space-y-4 m-8 lg:mx-auto">
                <p className="text-lg text-normal-blue raleway-semibold">
                    I have HTML and CSS certificate from Yıldız Teknik University and created Websites.
                    I improved myself on Adobe products. I can design in Photoshop and edit video in Premiere Pro.
                </p>
                <p className="text-lg text-normal-blue raleway-semibold">
                    I love playing basketball, reading technology news and playing video games with friends.
                    I enjoy creating or learning new things.
                </p>
                <p className="text-lg text-normal-blue raleway-semibold">
                    I'm trying do Graffiti and Illustration for personal.

                    <br/>
                    You can check it on
                    <Link href="/art">
                        <a className="underline mx-1 underline-offset-2 hover:text-dark-blue
                 ease-in-out duration-100">
                            Art
                        </a>
                    </Link>
                    page.
                </p>
            </div>
    <div className=" site-container flex items-center justify-around mt-10 mb-20 raleway-semibold">
        <Link href="https://www.instagram.com/sefeoz/">
            <a target="_blank" className="flex items-center text-light-blue hover:text-dark-blue ease-in-out duration-200">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl md:mr-3 mr-2"></FontAwesomeIcon>
                Instagram
            </a>
        </Link>
        <Link href="https://twitter.com/sefeoz">
            <a target="_blank" className="flex items-center text-light-blue hover:text-dark-blue ease-in-out duration-200">
                <FontAwesomeIcon icon={faTwitter} className="text-3xl md:mr-3 mr-2"></FontAwesomeIcon>
                Twitter
            </a>
        </Link>
        <Link href="https://github.com/kelboindaserver">
            <a target="_blank" className="flex items-center text-light-blue hover:text-dark-blue ease-in-out duration-200">
                <FontAwesomeIcon icon={faGithub} className="text-3xl md:mr-3 mr-2"></FontAwesomeIcon>
                GitHub
            </a>
        </Link>

    </div>
    </div>
    </>
        </motion.div>
    )
}

export default HomePage