import { getMdxNode, getMdxPaths } from "next-mdx/server"
import { useHydrate } from "next-mdx/client"
import {mdxComponents} from "../../components/mdx-components";
import { useAuth0 } from "@auth0/auth0-react";

export default function PostPage({post}){
    const { loginWithRedirect,logout,isAuthenticated,user} = useAuth0();
    const content = useHydrate(post, {
        components: mdxComponents,
    })

    return <div className="site-container">
        <article className="pb-20">
            <h1 className="font-bold text-4xl mb-6">{post.frontMatter.title}</h1>
            <h2 className="font-semibold text-xl mb-6">{post.frontMatter.excerpt}</h2>
            <hr className="my-3"/>
            <div className="prose">{content}</div>
            <p className="text-end font-thin pt-10">{post.frontMatter.date}</p>
        </article>





        <form>
            <textarea rows="3" className="border border-blue-900 w-full rounded" />
            {isAuthenticated ? <div className="space-x-4 flex items-center mt-4">
                <button className="bg-blue-600 text-white px-2 py-1 rounded">Send</button>
                <img src={user.picture} width={30} className="rounded-full"  />
                <span>{user.name}</span>
                <button typeof="button"
                        className="rounded border-4 border-red-500 bg-red-500 px-2 py-1"
                        onClick={() => logout({returnTo: process.env.NEXT_PUBLIC_URL + "/blog"})}>
                    Log Out
                </button>

            </div>:<div>
                <button typeof="button"
                        className="rounded border-4 border-green-500 bg-green-500 p-3"
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