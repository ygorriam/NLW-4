import { createContext, ReactNode, useEffect, useState} from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextsData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    ExperienceToNextLevel: number;
    activeChallenge: Challenge; 
    startNewChallenge: () => void;
    resetChallenge: () => void;
    levelUp: () => void;
    completeChanllenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextsData);

export function ChallengesProvider({children}: ChallengesProviderProps){

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);
    const ExperienceToNextLevel = Math.pow((level + 1)* 4, 2)

    useEffect(()=>{
        Notification.requestPermission();
    },[])

    function levelUp() {
      setLevel(level + 1);
    }

        function startNewChallenge(){
            const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
            const challenge = challenges[randomChallengeIndex];

            setActiveChallenge(challenge)

            new Audio('/notification.mp3').play();

            if(Notification.permission === 'granted'){
               new Notification('Novo Desafio', {
                   body: `Valendo ${challenge.amount}xp!`
               }) 
            }
        }

        function resetChallenge() {
            setActiveChallenge(null);
        }

        function completeChanllenge(){
                if(!activeChallenge){
                    return;
                }
                const { amount } = activeChallenge;

                let finalExperience = currentExperience + amount;

                if (finalExperience >= ExperienceToNextLevel) {
                    finalExperience = finalExperience - ExperienceToNextLevel;
                    levelUp();
                }

                setCurrentExperience(finalExperience);
                setActiveChallenge(null);
                setChallengesCompleted(challengesCompleted + 1);
        }

    return (
        <ChallengesContext.Provider value={{level, currentExperience, challengesCompleted, levelUp, startNewChallenge, activeChallenge, resetChallenge, ExperienceToNextLevel, completeChanllenge }}>
            {children}

        </ChallengesContext.Provider>
    );
}
