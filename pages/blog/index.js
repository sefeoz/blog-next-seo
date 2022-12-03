import { getAllNodes } from 'next-mdx/server'
import Link from 'next/link';
import {motion} from "framer-motion";
import {useEffect} from "react";

function BlogPage({posts}){
    useEffect(() => {
        document.title = 'Blog - S. EFE OZ';
    });
    return  <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{ duration: 0.4 }}
    >
    <div className="site-container pb-16">
        <div className="space-y-4">

            {posts.map(post=>{
                return <article key={post.url}>
                    <div className={"max-w-xl mx-auto"}>
                    <div className=" border-4 border-opacity-80  border-gray-300
                    space-y-8 p-5 rounded-[24px] text-center bg-gray-400 bg-opacity-20">
                        <div className="flex flex-col  items-center justify-center">
                            <Link href={post.url}>
                                <a><img src={post.frontMatter.image} width={300} className="rounded-xl max-h-[10rem] hover:shadow-lg hover:shadow-zinc-300 ease-in-out duration-150 mb-5" alt=""/></a>
                            </Link>
                            <h2 className="text-xl lato text-white hover:text-gray-400
                         ease-in-out duration-150 mt-4">
                                <Link href={post.url}>
                                    <a>{post.frontMatter.title}</a>
                                </Link>
                            </h2>

                        </div>
                        <p className="text-gray-300 raleway-semibold">{post.frontMatter.excerpt}</p>
                        <div className="text-slate-200" >
                            <span>{post.frontMatter.date}</span>
                        </div>
                    </div>
                    </div>
                </article>
            })}
        </div>


    </div>
    </motion.div>
}
export async function getStaticProps() {
    return {
        props: {
            posts: await getAllNodes("post"),
        },
    }
}

export default BlogPage