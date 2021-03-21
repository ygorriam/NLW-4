import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import styles from '../styles/components/ExperienceBar.module.css'
export function ExperienceBar(){
    const {currentExperience, ExperienceToNextLevel} =useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience * 100)) / ExperienceToNextLevel;

    return(
        <header className={styles.experienceBar}>
            <span> 0xp</span>
            <div>
            <div style={{width: `${percentToNextLevel}%`}} />
            <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
                {currentExperience}
                </span>
                
            </div>
            <span> {ExperienceToNextLevel}</span>
        </header>
    )
}