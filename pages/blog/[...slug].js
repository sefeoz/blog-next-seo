import { getMdxNode, getMdxPaths } from "next-mdx/server"
import { useHydrate } from "next-mdx/client"
import {mdxComponents} from "../../components/mdx-components";
import { useAuth0 } from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import Form from "../../components/form";
import Comments from "../../components/comments";
import {motion} from "framer-motion";


export default function PostPage({post}){
    const { loginWithRedirect,logout,isAuthenticated,user, getAccessTokenSilently} = useAuth0();
    const [text, textSet] = useState("")
    const [url, urlSet] = useState(null)
    const [comments, commentsSet] = useState([])
    const fetchComment = async ()=>{
        const query = new URLSearchParams({url})
        const newUrl = `/api/comment?${query.toString()}`

        const response = await fetch(newUrl,{
          method: "GET"  
        })
        const data = await response.json()
        commentsSet(data)
    }
useEffect(()=>{
    if (!url) return
    fetchComment()
},[url])

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
        await fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({text, userToken, url}),
            headers:{
                "Content-Type" : "application/json"

            }
        })
        fetchComment()
        textSet("")
    }

    return <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{ duration: 0.4 }}
    >

    <div className="site-container">
        <article className="pb-20">
            <h1 className="font-bold text-4xl mb-6 text-light-blue">{post.frontMatter.title}</h1>
            <h2 className="font-semibold text-xl mb-6 text-semi-blue">{post.frontMatter.excerpt}</h2>
            <hr className="my-3 border-gray-500 "/>
            <div className="prose text-normal-blue">{content}</div>
            <p className="text-end font-thin pt-10 text-gray-500">{post.frontMatter.date}</p>
        </article>

        <Form onSubmit={onSubmit} textSet={textSet} text={text} />
        <Comments comments={comments} />





        

    </div>
    </motion.div>
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