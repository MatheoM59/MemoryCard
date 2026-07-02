import { Score } from './Score';
import { Title } from './Title';
import styles from './style/header.module.css';
export const Header = ({ score, bestScore }) => {
  return (
    <>
      <div className={styles.content}>
        <Title />
        <Score score={score} bestScore={bestScore} />
      </div>
    </>
  );
};
