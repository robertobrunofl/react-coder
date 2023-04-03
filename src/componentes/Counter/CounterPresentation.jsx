import styles from "./Counter.css"
const CounterPresentation = ({
    counter,
    sumar,
    restar,
    login,
    user,
 }) => {
  return (
  <div className={styles.conteinerCounter}>
    <h1>Estamos en fases de test!</h1>
    
    <h3>{counter}</h3>
    <button onClick={sumar}>Sumar</button>
    <button onClick={restar}>Restar</button>
    <button onClick={login}>Login</button>

    <h2>{user}</h2>
  </div>
  );
};

export default CounterPresentation
