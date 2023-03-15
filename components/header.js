import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {useAuth0} from "@auth0/auth0-react";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { loginWithRedirect,logout,isAuthenticated,user} = useAuth0();
  const router = useRouter();

  return (
      <header className=" rounded-b-xl max-w-6xl mx-auto">
        <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
              <Link href={"/"}>
                <h3 className="text-white kanit-bold text-[2rem] hover:text-opacity-70 hover:bg-zinc-800 hover:bg-opacity-50 transition px-4 py-2 rounded-md">
                  S.EFE OZ
                </h3>
              </Link>
            </motion.button>
          </div>
          <div className="flex lg:hidden">
            <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex sand lg:gap-x-12 items-center">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
            >
              <Link href={"/"}>
                <p
                    className={`text-md font-bold text-white hover:bg-gray-600 rounded-md transition px-4 py-2 outline outline-2 outline-gray-600 ${
                        router.pathname === "/"
                            ? "bg-zinc-600 bg-opacity-50 text-white"
                            : ""
                    } `}
                >
                  About
                </p>
              </Link>
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
            >
              <Link href={"/art"}>
                <p
                    className={`text-md font-bold text-white hover:bg-gray-600 rounded-md transition px-6 py-2 outline outline-2 outline-gray-600 ${
                        router.pathname === "/art"
                            ? "bg-zinc-600 bg-opacity-50 text-white"
                            : ""
                    } `}
                >
                  Art
                </p>
              </Link>
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
            >
              <Link href={"/blog"}>
                <p
                    className={`text-md font-bold text-white hover:bg-gray-600 rounded-md transition px-5 py-2 outline outline-2 outline-gray-600 ${
                        router.pathname === "/blog"
                            ? "bg-zinc-600 bg-opacity-50 text-white"
                            : ""
                    } `}
                >
                  Blog
                </p>
              </Link>
            </motion.button>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
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
        </nav>
        <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href={"/"}>
                <h3 onClick={() => setMobileMenuOpen(false)} className="text-white kanit-bold text-[2rem] hover:text-opacity-70 hover:bg-zinc-800 hover:bg-opacity-50 transition px-4 py-2 rounded-md">
                  S.EFE OZ
                </h3>
              </Link>

              <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-8 h-8 text-white " aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link href={"/"}  >
                    <p onClick={() => setMobileMenuOpen(false)}
                        className={`mb-4 text-center text-md font-bold text-white hover:bg-gray-600 rounded-md transition px-4 py-2 outline outline-2 outline-gray-600 ${
                            router.pathname === "/"
                                ? "bg-zinc-600 bg-opacity-50 text-white"
                                : ""
                        } `}
                    >
                      About
                    </p>
                  </Link>
                  <Link href={"/art"}  >
                    <p onClick={() => setMobileMenuOpen(false)}
                        className={`mb-4 text-center text-md font-bold text-white hover:bg-gray-600 rounded-md transition px-4 py-2 outline outline-2 outline-gray-600 ${
                            router.pathname === "/art"
                                ? "bg-zinc-600 bg-opacity-50 text-white"
                                : ""
                        } `}
                    >
                      Art
                    </p>
                  </Link>
                  <Link href={"/blog"}  onClick={() => setMobileMenuOpen(false)}>
                    <p onClick={() => setMobileMenuOpen(false)}
                        className={`my-4 text-center text-md font-bold text-white hover:bg-gray-600 rounded-md transition px-4 py-2 outline outline-2 outline-gray-600 ${
                            router.pathname === "/blog"
                                ? "bg-zinc-600 bg-opacity-50 text-white"
                                : ""
                        } `}
                    >
                      Blog
                    </p>
                  </Link>
                </div>
                <div className="py-6">
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
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  );
}
