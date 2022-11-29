import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useEffect} from "react";
import {motion} from "framer-motion";
export default function Header() {
    const { loginWithRedirect,logout,isAuthenticated,user} = useAuth0();
    const router = useRouter();
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    useEffect(()=> {
            const toggle = document.getElementById("toggle");
            const x = document.getElementById("x");
            toggle.addEventListener("click",()=>{
                toggle.classList.add("hidden");
                x.classList.remove("hidden");
            });
            x.addEventListener("click",()=>{
                toggle.classList.remove("hidden");
                x.classList.add("hidden")
            })
        }
    )
    return <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{ duration: 0.4 }}
    >
    <header className="site-4xl-container py-7 lg:pt-5">

        <nav className="relative flex flex-wrap site-container items-center justify-center py-2 lg:py-0 px-2 mt-6 mb-3">
            <div className="container  mx-auto flex flex-wrap items-center justify-center">
                <div className="w-full relative flex justify-center  lg:w-auto lg:static lg:block lg:justify-center">
                    <Link href={"/"}>
                        <a className="kanit text-3xl text-gray-200 hover:text-gray-700 transition font-extrabold leading-relaxed inline-block py-2 px-4 mx-5 lg:mx-0 rounded-lg whitespace-nowrap uppercase hover:bg-gray-200 hover:shadow-xl">
                            S. EFE OZ
                        </a>
                    </Link>
                    <button className="cursor-pointer text-2xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none p-0 m-0" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                        <div id="toggle">
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8 text-gray-300">
                                <path x-show="!open" fill-rule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div id="x" className="hidden">
                            <FontAwesomeIcon className="ml-3.5 text-gray-400"  icon={faX} />
                        </div>

                    </button>
                </div>
                <div className={"lato lg:flex flex-grow justify-center items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
                    <ul className="font-bold flex text-md flex-col items-center my-3 lg:flex-row list-none lg:ml-auto lg:space-y-0 lg:space-x-2 space-y-3">
                        <li className={`${router.pathname === "/" ? "bg-gray-300 text-gray-700 shadow-xl" : "bg-transparent"}  hover:shadow-xl rounded-lg hover:text-gray-700 hover:bg-gray-300 nav-item text-gray-300 py-2 px-5 transition`}>
                            <Link href={"/"}>
                                <a >About</a>
                            </Link>
                        </li>
                        <li className={`${router.pathname === "/blog" ? "bg-gray-300 text-gray-700 shadow-xl" : "bg-transparent"}  hover:shadow-xl rounded-lg hover:text-gray-700 hover:bg-gray-300 nav-item text-gray-300 py-2 px-5 transition`}>
                            <Link href={"/blog"}>
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li className={`${router.pathname === "/art" ? "bg-gray-300 text-gray-700 shadow-xl" : "bg-transparent"}  hover:shadow-xl rounded-lg hover:text-gray-700 hover:bg-gray-300 nav-item text-gray-300 py-2 px-5 transition`}>
                            <Link href={"/art"}>
                                <a>Art</a>
                            </Link>
                        </li>
                        <div>
                            {isAuthenticated ? <div className="flex flex-col lg:flex-row  items-center space-x-3 space-y-3 lg:space-y-0">
                                <img src={user.picture} className="rounded-full" width="40" />
                                <span className="font-bold kanto text-[0.95rem] text-gray-100">{user.name}</span>
                                <button typeof="button"
                                        className="flex rounded lato bg-red-500 px-5 py-2 font-semibold text-inherit
                                hover:bg-inherit hover:text-red-500 text-[1rem] ease-in-out duration-200"
                                        onClick={() => logout({returnTo: process.env.NEXT_PUBLIC_URL})}>
                                    Log Out
                                </button>
                            </div>:<div className="">
                                <button typeof="button"
                                        className="flex rounded bg-green-500 px-5 py-2 font-semibold lato
                                hover:bg-inherit hover:text-green-500 text-lg md:text-[1rem] ease-in-out duration-200"
                                        onClick={() => loginWithRedirect()}>
                                    Log In
                                </button>


                            </div>}
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </motion.div>

}
