import Link from "next/link";
import {motion} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter,faGithub } from "@fortawesome/free-brands-svg-icons";
import {useEffect} from "react";

function HomePage() {
    useEffect(() => {
        document.title = 'About - S. EFE OZ';
    });
    return(
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
      <div className="max-w-7xl mx-auto">
        <div className="flex lg:flex-row flex-col items-center text-center lg:text-start lg:mt-10 mx-5">
            <div className="basis-2/3 lg:mb-5 mx-5">
                <h2 className="text-white text-6xl font-thin mb-4">Hello. I'm Sadan Efe.</h2>
                <p className="text-white font-bold text-2xl mb-4">I'm studying Software Engineering at Istinye University.</p>
                <p className="text-white text-2xl font-light hidden lg:block mb-3">I have HTML and CSS certificate from Yıldız Teknik University and created Websites.
                    I improved myself on Adobe products. I can design in Photoshop and edit video in Premiere Pro.</p>
                <p className="text-white text-2xl font-light hidden lg:block"> I love playing basketball, reading technology news and playing video games with friends.
                    I enjoy creating or learning new things.</p>
                <p className="text-white text-2xl font-light hidden lg:block"> I'm trying do Graffiti and Illustration for personal.

                    <br/>
                    You can check it on
                    <Link href="/art">
                        <a className="mx-2 underline hover:text-gray-700 transition ">
                            Art
                        </a>
                    </Link>
                    page.</p>
            </div>
            <div className="basis-1/3">
                <img className="lg:max-w-lg rounded-3xl rounded max-w-[20rem] mx-auto hover:saturate-100 saturate-50 transition" src="./me-portrait.JPG" alt=""/>
                <p className="text-white text-2xl font-light lg:hidden mx-5 mb-3 mt-7">I have HTML and CSS certificate from Yıldız Teknik University and created Websites.
                    I improved myself on Adobe products. I can design in Photoshop and edit video in Premiere Pro.</p>
                <p className="text-white text-2xl font-light lg:hidden mx-5"> I love playing basketball, reading technology news and playing video games with friends.
                    I enjoy creating or learning new things.</p>
            </div>

        </div>
          <div className="text-white space-x-12 justify-center flex text-4xl my-12 lg:mt-24">
              <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
              >
                  <Link className="flex justify-center items-center" href="https://www.instagram.com/sefeoz/">
                      <FontAwesomeIcon icon={faInstagram}/>
                  </Link>
              </motion.button>
              <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
              >
                  <Link href="https://github.com/kelboindaserver">
                      <FontAwesomeIcon icon={faGithub}/>

                  </Link>
              </motion.button>

              <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
              >
                  <Link href="https://twitter.com/sefeoz">
                      <FontAwesomeIcon icon={faTwitter}/>
                  </Link>
              </motion.button>


          </div>

      </div>
        </motion.div>
    )
}

export default HomePage