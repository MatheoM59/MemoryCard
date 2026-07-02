import { Card } from './Card';
import styles from './style/cardGris.module.css';

export const CardGrid = ({ data, onCardClick }) => {
  console.log(data);

  const shuffleArray = (data) => {
    return [...data].sort(() => Math.random() - 0.5);
  };
  const shuffledCards = shuffleArray(data);
  return (
    <>
      <div className={styles.content}>
        {shuffledCards.map((card) => (
          <div key={card.id} className={styles.card}>
            <Card
              id={card.id}
              symbol={card.image}
              name={card.name}
              onCardClick={onCardClick}
            />
          </div>
        ))}
      </div>
    </>
  );
};
