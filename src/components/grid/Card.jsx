import styles from './style/card.module.css';
export const Card = ({ id, symbol, name, onCardClick }) => {
  return (
    <button className={styles.button} onClick={() => onCardClick(id)}>
      <img className={styles.img} src={symbol}></img>
      <p>{name}</p>
    </button>
  );
};
