import React, { useState } from "react";
import { Sports } from "./Sports";

export function SportsInfo ({sportName, sportDetails, sportParticipants}){

    const sportId = sportName;
    return(
        <article className="sport-card">
            <header>
                <card
                className="sport-details"
                 alt={`${sportDetails} Details `}
                 src={sportId}>
                </card>
                <div className="participants-info">
                    <strong>{sportParticipants}</strong>
                </div>
            </header>
        </article>
    )

}
