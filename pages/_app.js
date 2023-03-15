import '../styles/global.css'
import { Auth0Provider } from "@auth0/auth0-react";
import {motion} from "framer-motion";
import Header from "../components/header";
import Bg from "../components/bg";

function MyApp({Component, pageProps}) {
    return(
        <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{ duration: 0.4 }}
    >


        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
            redirectUri={process.env.NEXT_PUBLIC_URL}
        >

        <div className="antialiased text-gray-900">
            <Header/>
        <main className="my-6">
            <Component {... pageProps}/>
            <Bg/>
        </main>
        </div>
        </Auth0Provider>
        </motion.div>

    )
}

export default MyApp