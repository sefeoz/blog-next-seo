import Link from "next/link";
 export default function Header() {

    return <header className="site-container pb-10 pt-14 lg:pt-10">

        <nav className="">
            <div className="space-x-4 flex flex-row justify-between items-center">
                <Link href="/">
                    <a className="uppercase font-bold text-xl hover:text-neutral-600 ">Sadan Efe's Blog</a>
                </Link>
                <div className="space-x-5">
            <Link href="/">
                <a className="hover:text-gray-500">Hakkımda</a>
            </Link>
            <Link href="/blog">
                <a className="hover:text-gray-500">Blog</a>
            </Link>
                </div>
            </div>
        </nav>

    </header>
}
