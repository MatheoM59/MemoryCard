import './../assets/img/morty.png';
export const Win = ({ handleRestart }) => {
  return (
    <div>
      <h1>You Win ! </h1>
      <button onClick={handleRestart}>Relancer une partie</button>
    </div>
  );
};
