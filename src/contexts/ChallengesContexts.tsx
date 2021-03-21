import { createContext, ReactNode, useState} from 'react';
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

    function levelUp() {
      setLevel(level + 1);
    }

        function startNewChallenge(){
            const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
            const challenge = challenges[randomChallengeIndex];

            setActiveChallenge(challenge)
        }

        function resetChallenge() {
            setActiveChallenge(null);
        }


    return (
        <ChallengesContext.Provider value={{level, currentExperience, challengesCompleted, levelUp, startNewChallenge, activeChallenge, resetChallenge, ExperienceToNextLevel }}>
            {children}

        </ChallengesContext.Provider>
    );
}
