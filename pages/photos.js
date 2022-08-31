import {motion} from "framer-motion";

function PhotosPage({ photos, stats }) {
    return <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{ duration: 0.4 }}
    >



    <div className="site-4xl-container mx-5 lg:mx-auto">
        <div className="columns-xs gap-6 space-y-6 ">
            <div><img src="/kelscratch.PNG" alt=""/></div>
            <div><img src="/kelmoon.PNG" alt=""/></div>
            <div><img src="/spide.PNG" alt=""/></div>
            <div><img src="/kelblue.PNG" alt=""/></div>
            <div><img src="/think.PNG" alt=""/></div>
            <div><img src="/medusa.PNG" alt=""/></div>
            <div><img src="/kelboi4art.jpg" alt=""/></div>
            <div><img src="/drip.jpg" alt=""/></div>
            <div><img src="/bloom.PNG" alt=""/></div>
        </div>
    </div>
            </motion.div>
}




export default PhotosPage;