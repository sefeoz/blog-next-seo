import '../styles/global.css'
import Header from "../components/header";

function MyApp({Component, pageProps}) {
    return(
    <>
        <div className="antialiased text-gray-900"></div>
        <Header></Header>
    <main className="my-6">
        <Component {... pageProps}/>
    </main>



    </>
    )


}
export default MyApp