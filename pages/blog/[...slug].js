import { getMdxNode, getMdxPaths } from "next-mdx/server"
import { useHydrate } from "next-mdx/client"
import {mdxComponents} from "../../components/mdx-components";
import { useAuth0 } from "@auth0/auth0-react";
import {useEffect, useState} from "react";

export default function PostPage({post}){
    const { loginWithRedirect,logout,isAuthenticated,user, getAccessTokenSilently} = useAuth0();
    const [text, textSet] = useState("")
    const [url, urlSet] = useState(null)

    useEffect(()=>{
        const url = window.location.origin + window.location.pathname
        urlSet(url)


    }, [])

    const content = useHydrate(post, {
        components: mdxComponents,
    })
    const onSubmit = async (e) => {
        e.preventDefault()
        const userToken = await getAccessTokenSilently()
        const response = await fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({text, userToken, url}),
            headers:{
                "Content-Type" : "application/json"

            }
        })
        const data = await  response.json()
        console.log(data)
    }

    return <div className="site-container">
        <article className="pb-20">
            <h1 className="font-bold text-4xl mb-6">{post.frontMatter.title}</h1>
            <h2 className="font-semibold text-xl mb-6">{post.frontMatter.excerpt}</h2>
            <hr className="my-3 border-gray-700"/>
            <div className="prose">{content}</div>
            <p className="text-end font-thin pt-10">{post.frontMatter.date}</p>
        </article>





        <form onSubmit={onSubmit}>
            <textarea rows="4"
                      onChange={(e)=>textSet(e.target.value)}
                      className="border border-gray-900 w-full rounded" />
            {isAuthenticated ? <div className="flex justify-between items-center mt-4">
                <button className="bg-blue-600 text-white px-5 py-2 text-lg rounded
                hover:bg-black hover:text-blue-600 ease-in-out duration-200">Send</button>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <img src={user.picture} width={30} className="rounded-full"  />
                <span className="font-semibold text-lg">{user.name}</span>
                <button typeof="button"
                        className="flex rounded bg-red-500 px-5 py-2 font-semibold
                                hover:bg-black hover:text-red-500 text-lg ease-in-out duration-200"
                        onClick={() => logout({returnTo: process.env.NEXT_PUBLIC_URL + "/blog"})}>
                    Log Out
                </button>
            </div>
            </div>:<div className="flex justify-end my-4">

                <button typeof="button"
                        className="rounded bg-green-500 px-5 py-2 font-semibold
                                hover:bg-black hover:text-green-500 text-lg ease-in-out duration-200"
                        onClick={() => loginWithRedirect()}>
                    Log In
                </button>
            </div>}


        </form>


    </div>
}
export async function getStaticPaths() {
    return {
        paths: await getMdxPaths("post"),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const post = await getMdxNode("post", context)

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post,
        },
    }
}