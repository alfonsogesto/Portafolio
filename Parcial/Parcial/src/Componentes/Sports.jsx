import React, { useState } from "react";
import { SportsInfo } from "./SportInfo";
import MyButton from "./Buttons";

export function Sports() {
    const [sports, setSports] = useState([]);
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [participants, setParticipants] = useState([]);
    const [categories, setCategories] = useState()

    const addSport = () => {
        if (name && details && participants.length && categories > 0) {
            setSports([...sports, {

                sportName: name,
                sportDetails: details,
                sportParticipants: participants,
                sportCategories: categories

            }]);

            setName('');
            setDetails('');
            setParticipants([]);
            setCategories('');

        } else {
            alert('Falta información o la misma no esta disponible ahora.');
        }
    };

    const deleteSport = (index) => {
        const newSports = [...sports];
        newSports.splice(index, 1); 
        setSports(newSports);
    };
    
    return (
        <section className='SportList'>
            <div>
                <label htmlFor='title'>Sport Name:</label>
                <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={e => setSport(e.target.value)}
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
                    <Sports
                        sportName={sport.sportName}
                        sportDetails={sport.sportDetails}
                        sportParticipants={sport.sportParticipants}
                        sportCategories={sport.sportCategories}
                    />
                     <button onClick={() => deleteSport(index)}>Delete Sport</button>
                </li>
                ))}
            </ul>
        </section>
    );

    useEffect(() => {
        fetch("") 
          .then(response => response.json())
          .then(data => setSports(data))
          .catch(error => console.error('Error fetching data:', error));
      });

}
