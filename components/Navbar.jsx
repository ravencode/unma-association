import Image from "next/image";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
        <div className={styles.logo}>
            <Image src="/img/design-2.png" alt="" title="" width="110px" height="100px" />
        </div>

        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>RESOURCES</li>
                <li className={styles.listItem}>TEAM</li>
                <li className={styles.listItem}>ONLINE TRAINING</li>
                <li className={styles.listItem}>EVENTS</li>
            </ul>
        </div>
        <div className={styles.item}>
            MEMBERSHIP            
        </div>
        </div>
    )
}
export default Navbar;