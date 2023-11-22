import styles from './section-two.module.scss'
import massage1 from './images/photo1.jpg'
import massage2 from './images/photo2.jpg'
import massage3 from './images/photo3.jpg'

export const SectionTwo: React.FC = () => {

    return <div className={styles.sectionTwo}>
        <div className={styles.sectionBoxTwo}>
            <div className={styles.container}>
            <h3 className={styles.heading3}>Our services</h3>
            <div className={styles.rowTwo}>
                <div className={styles.coll3}>
                    <div className={styles.titleImg}>
                        <img src={massage1} alt="massage" />
                    </div>
                    <h4 className={styles.heading4}>Advisory</h4>
                    <p className={styles.title}>We provide strategy from a birdseye perspective to account for high-level insight and follow through with attention to detail for consistency. Guiding you through the process at every step of the way.</p>
                </div>

                <div className={styles.coll3}>
                    <div className={styles.titleImg}>
                        <img src={massage2} alt="massage" />
                    </div>
                    <h4 className={styles.heading4}>Development</h4>
                    <p className={styles.title}>Our developers follow best practice and are leading smart contract creators in the space. Having both the technical ability and an innovative approach with functionality and security top of mind.</p>
                </div>

                <div className={styles.coll3}>
                    <div className={styles.titleImg}>
                        <img src={massage3} alt="massage" />
                    </div>
                    <h4 className={styles.heading4}>Implementation</h4>
                    <p className={styles.title}>Creating an experience doesn’t stop at an idea or a smart contract. You need a website or application that will integrate seamlessly with Web3 technology and provide a front-end to interact with.</p>
                </div>


               
            </div>
            </div>
        </div>

    </div>

    
}
