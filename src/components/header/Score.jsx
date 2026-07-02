import styles from './style/score.module.css';
export const Score = ({ score, bestScore }) => {
  return (
    <>
      <div className={styles.content}>
        <p>Score : {score}</p>
        <p>Best Score : {bestScore}</p>
      </div>
    </>
  );
};
