import Link from 'next/link'
import utilStyles from '/styles/utils.module.css'
import Image from 'next/image'

export default function incubator() {
    return (
        <div className={utilStyles.screen}>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            
            <div className={utilStyles.navBar}>
            
            <Link href="/"><a><Image src="/navlogo.jpg" alt="CSS Logo" width = "250px" height = "75px"/></a></Link>
            <Link href="/aboutus"><a>About Us</a></Link>
            
            
            <div className={utilStyles.dropdown}>
                <a className={utilStyles.dropdownBtn}>2021-2022 Activities/Courses</a>
                <div className={utilStyles.dropdownContent}>
                <Link href="/activities/backenddevt">Backend Development </Link>
                <Link href="/activities/competitiveprogramming">Competitive Programming </Link>
                <Link href="/activities/datasciandmachinelearning">Data Science and Machine Learning </Link>
                <Link href="/activities/incubatorprogramme">Incubator Programmes </Link>
                <Link href="/activities/ui-uxdesign">UI/UX Design </Link>
                <Link href="/activities/webandmobileappdevt">Web and Mobile App Development </Link>
                </div>
            </div>
            <Link href="/competitions"><a>Competitions</a></Link>
        </div>

            <section className={utilStyles.headingMd}>
                <h1><b>Incubator programmes</b></h1>
                <div className={utilStyles.container}>
                <img src="https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg" className={utilStyles.center}></img>
                </div>
                <div className={utilStyles.container}>
                    <p>
                        
                </p>
                </div>

                <br></br>
            </section>

            <section className={utilStyles.footer}>
                <div className={utilStyles.footercontent}>
                    <div className={utilStyles.li}>
                        <span class="material-icons">place</span>
                        <Link href="http://www.ri.edu.sg/visit-us">
                        <a target="_blank" className={utilStyles.link}>Our Location</a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span class="material-icons">mail</span>
                        <Link href="mailto:cssrjc@gmail.com">
                        <a target="_blank" className={utilStyles.link}>cssrjc@gmail.com</a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span class="material-icons">alternate_email</span>
                        <Link href="https://www.instagram.com/rafflescss/">
                        <a target="_blank" className={utilStyles.link}>rafflescss</a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span class="material-icons">photo_camera</span>
                        <Link href="https://www.instagram.com/rafflescss/">
                        <a className={utilStyles.link}>Photos</a>
                        </Link>
                    </div>
                </div>

                <hr></hr>

                <p>&#169; 2021 Raffles Institution Computer Science Society</p>
            </section>
        </div>
    )
}