import React from "react";

export function AltaJugadores({ playerName, playerPosition, playerProfile }) {
    const perfilImgUrl = playerProfile;
    return (
        <article className="player-card">
            <header>
                <img
                    className="player-perfil"
                    alt={`Perfil de ${playerName}`}
                    src={perfilImgUrl}
                />
                <div className="player-info">
                    <strong>{playerName}</strong>
                    <span className="player-infoPlayerPosition">{playerPosition}</span>
                </div>
            </header>
        </article>
    );
}
