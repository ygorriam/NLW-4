import styles from '../styles/components/ChallengeBox.module.css';
export function ChallengeBox(){
    const hasActiveChallenge = true;
    return (
        <div className={styles.ChallengeBoxContainer}>
            { hasActiveChallenge ? (
                <div />
                    ) : (
            
            <div className={styles.challengeNotActive}>
            <strong>
                Finalise um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de level completao desafios
                </p>
            </div>
                    )}
        </div>
    )
}