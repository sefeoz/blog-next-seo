import { useAuth0} from "@auth0/auth0-react"

export default function Form({onSubmit,text,textSet}){
    const { loginWithRedirect,logout,isAuthenticated,user, getAccessTokenSilently} = useAuth0();

    return <div>
        <form onSubmit={onSubmit}>
            <textarea rows="4"
                      className="border border-dark-blue w-full bg-zinc-900 bg-opacity-60 rounded-lg text-zinc-200 text-lg"
                       onChange={(e) => textSet(e.target.value)}
                      value={text}

            />
            {isAuthenticated ? <div className="flex justify-between items-center mt-4">
                <button typeof="button" className="bg-blue-600 text-white px-5 py-2 text-lg rounded
                hover:bg-inherit hover:text-blue-600 ease-in-out duration-200">
                    Send
                </button>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <img src={user.picture} width={30} className="rounded-full"  />
                    <span className="font-semibold text-lg text-gray-200">{user.name}</span>
                    <button typeof="button"
                            className="flex rounded bg-red-500 lato px-5 py-2 font-semibold
                                hover:bg-inherit hover:text-red-500 text-lg ease-in-out duration-200"
                            onClick={() => logout({returnTo: process.env.NEXT_PUBLIC_URL + "/blog"})}>
                        Log Out
                    </button>
                </div>
            </div>:<div className="flex justify-end my-4">

                <button typeof="button"
                        className="rounded bg-green-500 px-5 lato py-2 font-semibold
                                hover:bg-inherit hover:text-green-500 text-lg ease-in-out duration-200"
                        onClick={() => loginWithRedirect()}>
                    Log In
                </button>
            </div>
            }
        </form>
    </div>




}