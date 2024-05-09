import React, { useState } from "react";
import MyButton from "../Componentes/MyButton";
export const Adivinador = () => {
  const [rango, setRango] = useState([0, 100]);
  const [mensaje, setMensaje] = useState('');

  const Adivinar = (respuesta) => {
      const [min, max] = rango;
      const numeroAdivinado = Math.floor((min + max) / 2);
      if (respuesta === "mayor") {
          setRango([numeroAdivinado + 1, max]);
      } else if (respuesta === "menor") {
          setRango([min, numeroAdivinado - 1]);
      } else if (respuesta === "correcto") {
          setMensaje('¡Correcto!');
      }
  }

  const Reiniciar = () => {
      setRango([0, 100]);
      setMensaje('');
  };

  return (
      <div id="root">
          <div className="botones">
              <h1>El número es: {Math.floor((rango[0] + rango[1]) / 2)}</h1 >
              <MyButton color="Amarillo" click={() => Adivinar("mayor")} label="Mayor" />
              <MyButton color="Rojo" click={() => Adivinar("menor")} label="Menor" />
              <MyButton color="Azul" click={Reiniciar} label="Reiniciar" />
              <MyButton color="Verde" click={() => Adivinar("correcto")} label="Correcto" />
          </div>
          <p>{mensaje}</p>
      </div>
  );
}