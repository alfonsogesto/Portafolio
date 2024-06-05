import React, { useState, useEffect } from "react";
import { SportsInfo } from "./SportInfo";
import MyButton from "./Buttons";

export function Sports() {
    const [sports, setSports] = useState([]);
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [participants, setParticipants] = useState([]);
    const [categories, setCategories] = useState('');

    const addSport = () => {
        if (name && details && participants.length && categories) {
            fetch("http://localhost:3000/api/games", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    details: details,
                    participants: participants,
                    categories: categories
                })
            })
            .then(response => response.json())
            .then(data => {
                setSports([...sports, data]);
            })
            .catch(error => console.error('Error adding sport:', error));
            
            setName('');
            setDetails('');
            setParticipants([]);
            setCategories('');
        } else {
            alert('Falta información o la misma no está disponible ahora.');
        }
    };

    const deleteSport = (index) => {
        const newSports = [...sports];
        newSports.splice(index, 1); 
        setSports(newSports);
    };
    
    useEffect(() => {
        fetch("http://localhost:3000/api/games") 
          .then(response => response.json())
          .then(data => setSports(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    return (
        <section className='SportList'>
            <div>
                <label htmlFor='title'>Sport Name:</label>
                <input
                    type='text'
                    id='title'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='details'>Sport details:</label>
                <input
                    type='text'
                    id='details'
                    value={details}
                    onChange={e => setDetails(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='participants'>Participants:</label>
                <input
                    type='text'
                    id='participants'
                    value={participants}
                    onChange={e => setParticipants(e.target.value.split(','))}
                />
            </div>
            <div>
                <label htmlFor='cateogries'>Categories:</label>
                <input
                    type='text'
                    id='categories'
                    value={categories}
                    onChange={e => setCategories(e.target.value.split(','))}
                />
            </div>
            <button onClick={addSport}>Add Sport</button>
            <ul>
                {sports.map((sport, index) => (
                    <li key={index}>
                        <SportsInfo
                            sportName={sport.name}
                            sportDetails={sport.details}
                            sportParticipants={sport.participants}
                            sportCategories={sport.categories}
                        />
                        <button onClick={() => deleteSport(index)}>Delete Sport</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
