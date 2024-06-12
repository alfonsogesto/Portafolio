import React, { useState } from "react";
import { AltaJugadores } from "../AltaJugadores/AltaJugadores";


export function ListarJugadores(){
    const [jugadores, setJugadores] = useState([]);
    const [nombre, setNombre] = useState('');
    const [posicion, setPosicion] = useState('');
    const [perfil, setPerfil] = useState('');

    const agregarJugador = () => {
       
        if (jugadores.length <= 23) {
            if (nombre && posicion && perfil) {
                setJugadores(nuevosJugadores => [
                    ...nuevosJugadores,
                    {
                        playerName: nombre,
                        playerPosition: posicion,
                        playerProfile: perfil
                    }
                ]);
                setNombre('');
                setPosicion('');
                setPerfil('');
            } else {
                alert('Tienes que completar toda la informacion del jugador');
            }
        } else {
            alert('Ahora mismo se ha alcanzado el limite de 23 jugadores');
        }
    };
    const eliminarJugador = (index) => {
        const nuevosJugadores = [...jugadores];
        nuevosJugadores.splice(index, 1); 
        setJugadores(nuevosJugadores);
    };
    

    return (
        <section className='ListarJugadores'>
            <div>
                <label htmlFor='nombre'>Nombre:</label>
                <input
                    type='text'
                    id='nombre'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='posicion'>Posición:</label>
                <input
                    type='text'
                    id='posicion'
                    value={posicion}
                    onChange={e => setPosicion(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='perfil'>URL del perfil:</label>
                <input
                    type='text'
                    id='perfil'
                    value={perfil}
                    onChange={e => setPerfil(e.target.value)}
                />
            </div>
            <button onClick={agregarJugador}>Agregar jugador</button>
            <ul>
                {jugadores.map((jugador, index) => (
                    <li key={index}>
                        <AltaJugadores
                            playerName={jugador.playerName}
                            playerPosition={jugador.playerPosition}
                            playerProfile={jugador.playerProfile}
                        />
                         <button onClick={() => eliminarJugador(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}