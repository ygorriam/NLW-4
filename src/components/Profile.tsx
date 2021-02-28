import styles from '../styles/components/Profile.module.css'
export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ygorriam.png" alt="Ygor Riam"/>
            <div>
                <strong>
                    Ygor Riam
                </strong>
                <p>
                   <img src="icons/level.svg" alt="Level" /> 
                    Level 1 </p>
            </div>
        </div>
    )
}