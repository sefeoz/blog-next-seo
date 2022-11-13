import {motion} from "framer-motion";
import {useEffect} from "react";

function PhotosPage({ photos, stats }) {
    useEffect(() => {
        document.title = 'Çizimler - Ş. EFE ÖZ';
    });
    return <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{ duration: 0.4 }}
    >



    <div className="mx-5 lg:mx-auto lg:px-32">
        <div className="columns-xs gap-6 space-y-6">
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/space-kel.png" alt=""/></div>
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/teal-kel.png" alt=""/></div>
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/purple-kel.png" alt=""/></div>
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/designed-kel.png" alt=""/></div>
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/kelscratch.PNG" alt=""/></div>
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/kelmoon.PNG" alt=""/></div>
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/spide.PNG" alt=""/></div>
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/kelblue.PNG" alt=""/></div>
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/think.PNG" alt=""/></div>
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/medusa.PNG" alt=""/></div>
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/kelboi4art.jpg" alt=""/></div>
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/drip.jpg" alt=""/></div>
            <div><img className="rounded-2xl border-2 brightness-75 transition hover:brightness-100 p-1" src="/bloom.PNG" alt=""/></div>
        </div>
    </div>
            </motion.div>
}




export default PhotosPage;