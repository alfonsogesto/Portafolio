import React, { useState } from "react";
import { Sports } from "./Sports";

export function SportsInfo ({sportName, sportDetails, sportParticipants, sportCategories}){

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
                <div className="categories-info">
                    <h1>{sportCategories}</h1>
                </div>
            </header>
        </article>
    )

}
