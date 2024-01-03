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
                <h2 className="text-white text-6xl font-thin mb-4"><span className="font-light">Sadan Efe OZ: </span>A Software Engineering Student and Swift Developer</h2>
                <p className="text-white font-bold text-2xl mb-4">Hello, welcome to my website. I created this website to showcase my skills and projects in software development. Here is some information about me.</p>
                <p className="text-white text-2xl font-bold hidden lg:block mb-1">Education</p>
                <ul className="text-white text-2xl font-light hidden lg:block mb-3 ml-12 list-disc">
                    <li className="">I am studying software engineering at <span className="font-bold">Istinye University.</span></li>
                    <li>I have a certificate in <span className="font-bold">HTML and CSS</span> languages from <span className="font-bold">Yildiz Technical University.</span></li>
                </ul>
                <p className="text-white text-2xl font-bold  lg:block hidden"> Skills</p>
                <ul className="text-white text-2xl font-light hidden lg:block mb-3 ml-12 list-disc">
                    <li>I am proficient in <span className="font-bold">Swift and SwiftUI</span> languages and I want to develop my career in Swift.
                    </li>
                    <li>I wrote this website to learn <span className="font-bold">Javascript and Next.JS .</span></li>
                    <li>I am also skilled in<span className="font-bold"> Photoshop and Premiere Pro</span> applications for design.</li>
                </ul>
                <p className="text-white text-2xl font-bold  lg:block hidden"> You can access some of the SwiftUI codes I have done from the <Link href="/projects">Projects</Link> section.</p>
            </div>
            <div className="basis-1/3  text-left">
                <img
                    className="lg:max-w-lg  rounded-3xl max-w-[20rem] mx-auto hover:saturate-100 saturate-50 transition"
                    src="./me-portrait.JPG" alt=""/>
                <p className="text-white text-2xl font-bold lg:hidden mb-1 mt-8 mx-5">Education</p>
                <ul className="text-white text-2xl font-light  lg:hidden mb-3 ml-12 list-disc">
                    <li className="">I am studying software engineering at Istinye University.</li>
                    <li>I have a certificate in HTML and CSS languages from Yildiz Technical University.</li>
                </ul>
                <p className="text-white text-2xl font-bold  lg:hidden mb-1 mt-8 mx-5"> Skills</p>
                <ul className="text-white text-2xl font-light lg:hidden mb-3 ml-12 list-disc">
                    <li>I am proficient in <span className="font-bold">Swift and SwiftUI</span> languages and I want to
                        develop my career in Swift.
                    </li>
                    <li>I wrote this website to learn <span className="font-bold">Javascript and Next.JS .</span></li>
                    <li>I am also skilled in<span className="font-bold"> Photoshop and Premiere Pro</span> applications
                        for design.
                    </li>
                </ul>
            </div>

        </div>
          <div className="text-white space-x-12 justify-center flex text-4xl my-12 lg:mt-24">
              <motion.button
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.8}}
              >
                  <Link className="flex justify-center items-center" href="https://www.instagram.com/sefeoz/">
                      <FontAwesomeIcon icon={faInstagram}/>
                  </Link>
              </motion.button>
              <motion.button
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.8}}
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