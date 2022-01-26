import Link from 'next/link'
import utilStyles from '/styles/utils.module.css'
import Image from 'next/image'

function ui() {
    return (
        <div className={utilStyles.screen}>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            
            <div className={utilStyles.navBar}>
                <Link href="/"><a><Image src="/navlogo.jpg" alt="CSS Logo" width = "250px" height = "75px"/></a></Link>
                <Link href="/our-members"><a>Our Members</a></Link>
                
                <div className={utilStyles.dropdown}>
                    <a className={utilStyles.dropdownBtn}>2021-2022 Activities/Courses</a>
                    <div className={utilStyles.dropdownContent}>
                    <Link href="/activities/ui-uxdesign">UI/UX Design </Link>
                <Link href="/activities/webandmobileappdevt">Web and Mobile App Development </Link>
                <Link href="/activities/backenddevt">Backend Development </Link>
                <Link href="/activities/competitiveprogramming">Competitive Programming </Link>
                <Link href="/activities/datasciandmachinelearning">Data Science and Machine Learning </Link>
                <Link href="/activities/incubatorprogramme">Incubator Programmes </Link>
                    </div>
                </div>
                <Link href="/competitions"><a>Competitions</a></Link>
            </div>

            <section>
                <h1 className={utilStyles.h1}><b>UI-UX Design</b></h1>
                <div className={utilStyles.container}>
                <p className={utilStyles.p}> 
                        Are you interested in creating a website but do not know how to make it pleasing in terms of aesthetics and user experience? Do join our UI/UX design course where you can learn more about using CSS (Cascading Style Sheets) and JavaScript effectively in order to make your website user-friendly and appealing to the eyes!
                    </p>
                    
                    <p className={utilStyles.p}>
                        Each team will submit a mockup and a brief product description.
                    </p>

                    <br></br>
                    
                    <p><b><u>Students' Works</u></b></p>
                    
                    <table className={utilStyles.table}>
                        <tr>
                            <td>
                            <Image src="/venue.png" alt="work1" width = "700px" height = "400px"/>
                            </td>
                            <td>
                            <Image src="/eat.png" alt="work2" width = "700px" height = "400px"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Figma prototype of website for booking school venues
                            <br></br>
                            By Mike and Adrienne
                            </td>
                            <td>
                            Figma prototype of website to tackle mental health
                            <br></br>
                            By Yongsheng and David
                            </td>
                        </tr>
                    </table>
                </div>

                <br></br>
            </section>

            <section className={utilStyles.footer}>
                <div className={utilStyles.footercontent}>
                    <div className={utilStyles.li}>
                        <span className="material-icons">place</span>
                        <Link href="http://www.ri.edu.sg/visit-us">
                        <a target="_blank" className={utilStyles.link}>Our Location</a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span className="material-icons">mail</span>
                        <Link href="mailto:cssrjc@gmail.com">
                        <a target="_blank" className={utilStyles.link}>cssrjc@gmail.com</a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span className="material-icons">alternate_email</span>
                        <Link href="https://www.instagram.com/rafflescss/">
                        <a target="_blank" className={utilStyles.link}>rafflescss</a>
                        </Link>
                    </div>

                    <div className={utilStyles.li}>
                        <span className="material-icons">photo_camera</span>
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

export default ui;
