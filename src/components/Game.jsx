import { Header } from './header/Header';
import { CardGrid } from './grid/CardGrid';
import { useEffect, useState } from 'react';
import styles from './game.module.css';
import { Win } from './Win';

export const Game = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(score + 1);
  const [clicked, setClicked] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch on mount
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  const handleCardClick = (id) => {
    if (clicked.includes(id)) {
      setScore(0);
      setClicked([]);
    } else {
      setScore(score + 1);
      setClicked([...clicked, id]);
    }
  };

  if (score > bestScore) {
    setBestScore(score);
  }

  const handleRestart = () => {
    setScore(0);
    setBestScore(0);
    setClicked([]);
  };

  return (
    <>
      <div className={styles.content}>
        <Header score={score} bestScore={bestScore} />
        <CardGrid data={data} onCardClick={handleCardClick} />
        {score === 20 && (
          <div className={styles.win}>
            <Win handleRestart={handleRestart} />
          </div>
        )}
      </div>
    </>
  );
};
