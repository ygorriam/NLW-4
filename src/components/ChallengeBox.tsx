import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';


export function ChallengeBox(){
    
    const {activeChallenge, resetChallenge, completeChanllenge } = useContext(ChallengesContext);
    const contextData = useContext(ChallengesContext);
    const { resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChanllenge();
        resetCountdown();
    }
    
    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }
    
    return (
        <div className={styles.ChallengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceeded}
                        >
                            Completei
                            </button>
                    </footer>
                </div>
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