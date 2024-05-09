import MyButton from "./componentes MyButton";
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div id="root">
      <h1>Contador: {contador}</h1>
      <MyButton color="Verde" click={sumar} label="Sumar +1" />
      <MyButton color="Rojo" click={restar} label="Restar -1" />
      <MyButton color="Azul" click={reiniciar} label="Reiniciar" />
    </div>
  );
}
