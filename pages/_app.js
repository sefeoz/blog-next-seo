import '../styles/global.css'
import Header from "../components/header";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({Component, pageProps}) {
    return(
        <Auth0Provider
            domain="dev-k32gu9l5.us.auth0.com"
            clientId="iLi7kvW6PIAXSEnRkO69kn2F89zqiOYl"
            redirectUri={process.env.NEXT_PUBLIC_URL}
        >

        <div className="antialiased text-gray-900">
        <Header />
        <main className="my-6">
            <Component {... pageProps}/>
        </main>
        </div>
        </Auth0Provider>

    )
}
export default MyApp