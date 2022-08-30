import { getAllNodes } from 'next-mdx/server'
import Link from 'next/link';
import {motion} from "framer-motion";

function BlogPage({posts}){
    return  <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{ duration: 0.4 }}
    >
    <div className="site-container">
        <div className="space-y-4 ">

            {posts.map(post=>{
                return <article key={post.url}>
                    <div className="space-y-8 p-5 shadow-sm shadow-purple-800 backdrop-saturate-50 rounded-[24px]">
                        <h2 className="text-xl font-bold text-gray-100 hover:text-purple-800 ease-in-out duration-150">
                            <Link href={post.url}>
                                <a href="pages/blog/index.js">{post.frontMatter.title}</a>
                            </Link>
                        </h2>
                        <p className="text-gray-200">{post.frontMatter.excerpt}</p>
                        <div className="text-gray-500">
                            <span>{post.frontMatter.date}</span>
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