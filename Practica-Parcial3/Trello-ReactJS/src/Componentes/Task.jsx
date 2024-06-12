import React from "react";


export function TodoList({ tituloTarea }) {
    const [tareas, setTareas] = useState([]);
    const [nombreTarea, setNombreTarea] = useState('');
    const [responsabilidadTarea, setResponsabilidadTarea] = useState();

    const addToDo = () => {
        {
        setTask([...tasks, { text: tareas, description: 'Agregar descripción...', comments: [] }]);
        setName('');
        }
    };
    
    const deleteCard = (index) => {
        const newCardTask = [...cardTask];
        
      };
}6