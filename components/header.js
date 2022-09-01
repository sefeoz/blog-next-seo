import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
 export default function Header() {
     const { loginWithRedirect,logout,isAuthenticated,user} = useAuth0();

    return <header className="site-container pb-10 pt-10 lg:pt-5">

        <nav>
            <div className="space-y-6  md:space-y-0 flex flex-col md:flex-row justify-center md:space-x-6 items-center px-3">

                <div className="space-x-8 flex items-center text-lg md:text-[1rem] ease-in-out duration-200 text-gray-100 ">
            <Link href="/">
                <a className="hover:text-purple-600 ease-in-out duration-200 ">Hakkımda</a>
            </Link>
            <Link href="/blog">
                <a className="hover:text-purple-600 ease-in-out duration-200">Yazılar</a>
            </Link>
                    <Link href="/photos">
                        <a className="hover:text-purple-600 ease-in-out duration-200">Fotoğraflar</a>
                    </Link>


                </div>

                    <div>
                    {isAuthenticated ? <div className="flex items-center space-x-3">
                        <img src={user.picture} className="rounded-full" width="40" />
                        <span className="font-semibold text-[0.95rem] text-gray-100">{user.name}</span>
                        <button typeof="button"
                                className="flex rounded bg-red-500 px-5 py-2 font-semibold text-inherit
                                hover:bg-inherit hover:text-red-500 text-[1rem] ease-in-out duration-200"
                                onClick={() => logout({returnTo: process.env.NEXT_PUBLIC_URL})}>
                            Log Out
                        </button>
                    </div>:<div className="">
                        <button typeof="button"
                                className="flex rounded bg-green-500 px-5 py-2 font-semibold
                                hover:bg-inherit hover:text-green-500 text-lg md:text-[1rem] ease-in-out duration-200"
                                onClick={() => loginWithRedirect()}>
                            Log In
                        </button>


                    </div>}
                </div>
            </div>
        </nav>
<hr className="mt-4 border-gray-400 hidden md:block "/>
    </header>
}
