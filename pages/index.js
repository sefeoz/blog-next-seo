import Link from "next/link";
function HomePage() {
    return(
    <>
    <div className="site-container">
        <div className="space-y-4 ">

        <h1 className="text-3xl font-bold">Ben Şadan Efe ÖZ. İstinye Üniversitesi'nde Yazılım Mühendisliği okuyorum. </h1>
            <h2 className="text-xl ">Yıldız Teknik Üniversitesi'nde HTML ve CSS kurslarına gidip sertifika aldım. Kendi çapımda Web Siteleri yaptım.</h2>
            <Link  href="http://hizirvinc.com">
                <a className="text-xl" >Buradan Ulaşabilirsiniz/Hızır Vinç</a>
            </Link>
            <p className="text-xl ">Aynı zamanda kendimi Adobe uygulamalarında geliştirdim.Photoshop'da dizayn ve Premiere Pro'da Video Editi yapabiliyorum. </p>
        </div>
    </div>
        <div className="site-4xl-container mt-10">
            <img className="py-10" src="/me.JPG" alt=""/>
        </div>

    </>
    )
}

export default HomePage