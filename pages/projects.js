import {motion} from "framer-motion";
import {useEffect} from "react";

function Projects() {
    useEffect(() => {
        document.title = 'Projects - S. EFE OZ';
    });
    return <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{ duration: 0.4 }}
    >
        <div className="mx-5 lg:mx-auto lg:px-32">
            <h1 className="text-white text-center text-3xl">PROJECTS</h1>
        </div>
    </motion.div>
}




export default Projects;