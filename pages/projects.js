import {motion} from "framer-motion";
import {useEffect} from "react";
import Link from "next/link";
const posts = [
    {
        id: 1,
        title: 'SyllabusUI-SwiftData',
        href: 'https://github.com/kelboindaserver/SyllabusUI-SwiftData',
        description:
            'SylabbusUI: Your Ultimate Study Tracker App with SwiftUI',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        img : "ExamAdd.png",
        author: {
            name: 'Sadan Efe OZ',
            href: '#',
            imageUrl:
                'https://github.com/kelboindaserver/SyllabusUI-SwiftData/blob/main/SyllabusUI/Assets.xcassets/sylabbusMain.png',
        },
    }
]

function Projects() {
    useEffect(() => {
        document.title = 'Projects - S. EFE OZ';
    });
    return <motion.div
        initial={{y: 5, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: -5, opacity: 0}}
        transition={{duration: 0.4}}
    >
        <h1 className="text-white text-center text-5xl kanit">PROJECTS</h1>
        <div className="site-4xl-container">
        <div className="mt-10 mx-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between border-2 border-amber-50 px-6 py-16 rounded-3xl bg-opacity-25 bg-gray-500">
                    <div className="group relative">
                        <img src={post.img} alt=""/>
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
                            <a href={post.href} target="_blank">
                                <span className="absolute inset-0"/>
                                {post.title}
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{post.description}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                        <div className="text-sm leading-6">
                            <p className="font-semibold text-white">
                                    <span className="absolute inset-0"/>
                                    {post.author.name}

                            </p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
        </div>
    </motion.div>
}


export default Projects;