import Link from "next/link";
function HomePage() {
    return(
    <>
    <div className="site-container">
        <div className="space-y-4">

        <h1 className="text-2xl font-bold">Ben Şadan Efe ÖZ. İstinye Üniversitesi'nde Yazılım Mühendisliği okuyorum. </h1>
            <p className="text-xl ">Yıldız Teknik Üniversitesi'nde HTML ve CSS kurslarına gidip sertifika aldım. Kendi çapımda Web Siteleri yaptım.</p>
            <Link classname=""  href="http://hizirvinc.com">
                <a className="text-[1.2rem] font-thin underline" >Buradan Ulaşabilirsiniz ==>  Hızır Vinç</a>
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