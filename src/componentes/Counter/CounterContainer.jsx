import { useState } from "react";
import CounterPresentation from "./CounterPresentation"

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);
  const [user, Setuser] = useState("");

  const sumar = () => {
    setCounter(counter + 1);
  };

  let persona = {
    nombre: "juan",
    edad: 22,
  };

  const restar = () => {
    setCounter(counter - 1);
  };
  const login = () => {
    Setuser("Hola Cliente!");
  };

  return (
    <div>
      <CounterPresentation
        counter={counter}
        sumar={sumar}
        restar={restar}
        login={login}
        user = {user}
      />
    </div>
  );
};

export default CounterContainer;
