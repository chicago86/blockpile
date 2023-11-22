import styles from './section-one.module.scss'
import arrow from './images/ArrowDown.png'

export const SectionOne: React.FC = () => {

    return <div className={styles.sectionOne}>
        <div className={styles.sectionBox}>
            <div className={styles.container}>
                <h3 className={styles.heading3}>Web3 Agency</h3>
                <h1 className={styles.heading1}>Building innovative experiences on the blockchain</h1>
                <div className={styles.arrow}>
                    <img src={arrow} alt="arrow"/>
                </div>
            </div>

        </div>

    </div>
}
