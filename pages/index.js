import Link from "next/link";
import {motion} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter,faGithub } from "@fortawesome/free-brands-svg-icons";
import {useEffect} from "react";

function HomePage() {
    useEffect(() => {
        document.title = 'Blog - Ş. EFE ÖZ';
    });
    return(
        <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
    <>
        <div className="bg">
        <div className="site-container">
            <div className="space-y-4 mx-5 md:mx-0">

            <h1 className="raleway-light text-3xl  text-light-blue">
                Merhabalar. Ben Şadan Efe ÖZ.
            </h1>
            <h2 className="text-2xl raleway-md text-semi-blue">
                İstinye Üniversitesi'nde Yazılım Mühendisliği okuyorum.
            </h2>
            <p className="text-lg text-normal-blue raleway-semibold">
                Yıldız Teknik Üniversitesi'nde HTML ve CSS kurslarına gidip
                sertifika aldım. Kendi çapımda Web Siteleri yaptım. 
                Adobe uygulamalarında kendimi geliştirdim.
                Photoshop'da dizayn ve Premiere Pro'da Video Editi yapabiliyorum.
            </p>
            <p className="text-lg text-normal-blue raleway-semibold">
                Basketbol oynamayı,
                teknoloji haberleri okumayı ve video oyunları oynamayı seviyorum.
            Yeni bir şeyler üretmekten veya öğrenmekten keyif alıyorum.
            </p>
            <p className="text-lg text-normal-blue raleway-semibold">
                Kendi çapımda ufak tefek Graffiti çalışmaları
                ve illüstrasyonlar yapmaya çalışıyorum.
                <br/>
                <Link href="/photos">
                <a className="underline mr-1 underline-offset-2 hover:text-dark-blue
                 ease-in-out duration-100">
                    Çizimler
                </a>
            </Link>
                kısmından ulaşabilirsiniz.
            </p>
            </div>
        </div>
    <div className=" site-container flex items-center justify-around mt-10 raleway-semibold">
        <Link href="https://www.instagram.com/sefeoz/">
            <a target="_blank" className="flex items-center text-light-blue hover:text-dark-blue ease-in-out duration-200">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl md:mr-3 mr-2"></FontAwesomeIcon>
                Instagram
            </a>
        </Link>
        <Link href="https://twitter.com/sefeoz">
            <a target="_blank" className="flex items-center text-light-blue hover:text-dark-blue ease-in-out duration-200">
                <FontAwesomeIcon icon={faTwitter} className="text-3xl md:mr-3 mr-2"></FontAwesomeIcon>
                Twitter
            </a>
        </Link>
        <Link href="https://github.com/kelboindaserver">
            <a target="_blank" className="flex items-center text-light-blue hover:text-dark-blue ease-in-out duration-200">
                <FontAwesomeIcon icon={faGithub} className="text-3xl md:mr-3 mr-2"></FontAwesomeIcon>
                GitHub
            </a>
        </Link>

    </div>
            <div className="site-4xl-container mt-10 mx-4 md:mx-auto">
                <img className="py-10 saturate-50 max-w-4xl" src="/me.JPG" alt=""/>
            </div>
    </div>
    </>
        </motion.div>
    )
}

export default HomePage