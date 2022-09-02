import Link from "next/link";
import {motion} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter,faGithub } from "@fortawesome/free-brands-svg-icons";

function HomePage() {
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

            <h1 className="text-3xl font-bold text-gray-100">
                Merhabalar. Ben Şadan Efe ÖZ.
            </h1>
            <h2 className="text-2xl font-semibold text-gray-200">
                İstinye Üniversitesi'nde Yazılım Mühendisliği okuyorum.
            </h2>
            <p className="text-xl text-gray-300">
                Yıldız Teknik Üniversitesi'nde HTML ve CSS kurslarına gidip
                sertifika aldım. Kendi çapımda Web Siteleri yaptım. 
                Adobe uygulamalarında kendimi geliştirdim.
                Photoshop'da dizayn ve Premiere Pro'da Video Editi yapabiliyorum.
            </p>
            <p className="text-xl text-gray-300">
                Basketbol oynamayı,
                teknoloji haberleri okumayı ve video oyunları oynamayı seviyorum.
            Yeni bir şeyler üretmekten veya öğrenmekten keyif alıyorum.
            </p>
            <p className="text-xl text-gray-300">
                Kendi çapımda ufak tefek Graffiti çalışmaları
                ve illüstirasyonlar yapmaya çalışıyorum.
                <br/>
                <Link href="/photos">
                <a className="underline mr-1 underline-offset-2 hover:text-purple-600
                 ease-in-out duration-100">
                    Fotoğraflar
                </a>
            </Link>
                kısmına tıklayarak ulaşabilirsiniz.
            </p>
            </div>
        </div>
    <div className=" site-container flex items-center justify-around mt-10">
        <Link href="https://www.instagram.com/sefeoz/">
            <a target="_blank" className="flex items-center text-gray-300 hover:text-purple-600 ease-in-out duration-200">
                <FontAwesomeIcon icon={faInstagram} className="text-3xl md:mr-3 mr-2"></FontAwesomeIcon>
                Instagram
            </a>
        </Link>
        <Link href="https://twitter.com/sefeoz">
            <a target="_blank" className="flex items-center text-gray-300 hover:text-purple-600 ease-in-out duration-200">
                <FontAwesomeIcon icon={faTwitter} className="text-3xl md:mr-3 mr-2"></FontAwesomeIcon>
                Twitter
            </a>
        </Link>
        <Link href="https://github.com/kelboindaserver">
            <a target="_blank" className="flex items-center text-gray-300 hover:text-purple-600 ease-in-out duration-200">
                <FontAwesomeIcon icon={faGithub} className="text-3xl md:mr-3 mr-2"></FontAwesomeIcon>
                GitHub
            </a>
        </Link>

    </div>
            <div className="site-4xl-container mt-10 mx-4  md:mx-auto">
                <img className="py-10 saturate-50" src="/me.JPG" alt=""/>
            </div>
    </div>
    </>
        </motion.div>
    )
}

export default HomePage