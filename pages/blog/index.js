import { getAllNodes } from 'next-mdx/server'
import Link from 'next/link'

function BlogPage({posts}){
    return <div className="site-container">
       <div className="space-y-4 ">

           {posts.map(post=>{
               return <article key={post.url}>
                   <div className="space-y-4 p-5 bg-gradient-to-r from-blue-200 to-pink-50 shadow-xl rounded-[24px]">
                   <h2 className="text-xl font-bold">
                       <Link href={post.url}>
                           <a href="pages/blog/index.js">{post.frontMatter.title}</a>
                       </Link>
                   </h2>
                   <p>{post.frontMatter.excerpt}</p>
                   <div className="text-gray-500">
                       <span>{post.frontMatter.date}</span>
                   </div>
               </div>
               </article>
           })}
       </div>


    </div>
}
export async function getStaticProps() {
    return {
        props: {
            posts: await getAllNodes("post"),
        },
    }
}

export default BlogPage