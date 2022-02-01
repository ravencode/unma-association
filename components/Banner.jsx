import styles from "../styles/Banner.module.css"
import Image from 'next/image';

const Banner = () => {
    return (
        <div className={styles.container}>
                <div className={styles.outer}>
                <div className={styles.img}>
                    <Image src="/img/pexels-michael-swigunski-7079774.jpg" alt="" title="" layout='fill'
    ></Image>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.h2}>JOIN  THE </h2>
                    <h2 className={styles.h2}>GLOBAL  INDUSTRY </h2>
                    <h2 className={styles.h2}>ASSOCIATION  FOR </h2>
                    <h2 className={styles.h2m}>METAVERSE</h2>
                    <button className={styles.button}>JOIN NOW</button>
                </div>
            </div>  
            <div className={styles.outer2}>   
                <div className={styles.content}>
                    <h2 className={styles.h22}>MISSION</h2>
                    <p className={styles.p}>THE UNIVERSAL METAVERSE ASSOCIATION(UNMA) </p>
                    <p className={styles.p}>IS AN INTERNATIONAL ORGANIZATION SET UP TO CULTIVATE COLLABORATION BETWEEN SOLUTION </p>
                    <p className={styles.p}>PROVIDERS AND END-USERS THAT ACCELERATES GROWTH, FOSTERS RESEARCH AND </p>
                    <p className={styles.p}>EDUCATION, HELPS DEVELOP INDUSTRY BEST PRACTICES, CONNECTS MEMBER </p>
                    <p className={styles.p}>CORPORATIONS, AND PROMOTES THE SERVICES OF MEMBER COMPANIES.</p>
                </div>
                
            </div>
        </div>
    )
 }
export default Banner;