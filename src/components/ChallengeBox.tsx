import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const hasFinishedChallenge = false;

    return (
        <div className={styles.challengeBoxContainer}>
        { hasFinishedChallenge ? (
            <div />
        ) : (
            <div className={styles.challengeBoxNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level UP"/>
                    Avance de level completando desafios.
                </p>
            </div>
            )}
        </div>
    )
}