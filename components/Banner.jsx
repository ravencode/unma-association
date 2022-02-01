import styles from "../styles/Banner.module.css"
import Image from 'next/image';
import { useState, useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(() => {
        AOS.init({});
    }, []);

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
            <div className={styles.outer2} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">   
                <div className={styles.content}>
                    <h2 className={styles.h22}>MISSION</h2>
                        <p className={styles.p}>The universal metaverse association (UNMA) 
                        Is an international organization set up to cultivate collaboration between solution 
                        Providers and end-users that accelerates growth, fosters research and 
                        Education, helps develop industry best practices, connects member 
                        Corporations, and promotes the services of member companies.</p>
                </div>
                
            </div>
        </div>
    )
 }
export default Banner;