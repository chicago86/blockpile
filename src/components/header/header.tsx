import styles from './header.module.scss'
import logo1 from './images/Logo.png'
import logo2 from './images/block.png'




export const Header: React.FC = () => {

    return <div className={styles.sectionHeader}>
        <div className={styles.container}>
            <div className={styles.boxHeader}>
                <div className={styles.logo}>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                </div>
                <div className={styles.headerSearch}>
                    <ul><li>About</li>
                        <li>Case Studies</li>
                        <li>Clients</li>
                        <li>Contact</li>
                    </ul>
                    <div className={styles.headerButton}><button>Start Project</button></div>
                </div>
            </div>
        </div>
    </div>
}