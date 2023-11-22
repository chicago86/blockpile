
import styles from './content-web3.module.scss'




export const ContentWeb3: React.FC = () => {

    return <div className={styles.ContentWeb3}>
        <div className={styles.container}>
            <div className={styles.web3Box}>
                <div className={styles.web3BoxHeading}>
                    <h2>Do you have a Web3 project in mind?
                        Let’s discuss how we can help.</h2>
                </div>
                    <div className={styles.web3BoxButton}><button>Contact</button></div>
            </div>
        </div>
    </div>
}