import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
 export default function Header() {
     const { loginWithRedirect,logout,isAuthenticated,user} = useAuth0();

    return <header className="site-container pb-10 pt-16 lg:pt-10">

        <nav>
            <div className="space-y-6  md:space-y-0 flex flex-col md:flex-row justify-around items-center">
                <Link href="/">
                    <a className="uppercase text-[1.7rem] md:hidden font-bold text-xl hover:text-neutral-600 ">Sadan Efe's Blog</a>
                </Link>
                <div className="space-x-8 flex items-center text-xl md:text-[1.1rem] ease-in-out duration-200 ">
            <Link href="/">
                <a className="hover:text-gray-500">Hakkımda</a>
            </Link>
            <Link href="/blog">
                <a className="hover:text-gray-500">Blog</a>
            </Link>
                </div>
                <Link href="/">
                <a className="ease-in-out duration-200 uppercase hidden md:flex font-bold text-[1.6rem] hover:text-neutral-600 ">Sadan Efe's Blog</a>
            </Link>
                    <div>
                    {isAuthenticated ? <div className="flex items-center space-x-3">
                        <img src={user.picture} className="rounded-full" width="40" />
                        <span className="font-semibold text-[1.1rem]">{user.name}</span>
                        <button typeof="button"
                                className="flex rounded bg-red-500 px-5 py-2 font-semibold
                                hover:bg-black hover:text-red-500 text-[1.1rem] ease-in-out duration-200"
                                onClick={() => logout({returnTo: process.env.NEXT_PUBLIC_URL})}>
                            Log Out
                        </button>
                    </div>:<div className="">
                        <button typeof="button"
                                className="flex rounded bg-green-500 px-5 py-2 font-semibold
                                hover:bg-black hover:text-green-500 text-lg ease-in-out duration-200"
                                onClick={() => loginWithRedirect()}>
                            Log In
                        </button>


                    </div>}
                </div>
            </div>
        </nav>
<hr className="mt-6 border-gray-700"/>
    </header>
}
