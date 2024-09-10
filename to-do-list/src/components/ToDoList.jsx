import { useState } from "react";

function Todolist(){
    const [todo, setTodo] = useState({description:"", duedate: ""}); //initialize todo with an empty string
    const [todos, setTodos] = useState([]); //list to store all todos

    const handleAdd = () => {
        if (!todo.description || !todo.duedate) {
            alert("Type both fields");
            //checking if the field is empty 
        } else {
            setTodos([todo,...todos])//spread operation, to add new values on top of exitsing value
            setTodo({description:"", duedate: ""})// make the field empty after the previous task was added
        }
        
    }

    return (
        <> 
            <h3>My Todos</h3>
            <input 
                type="text" 
                placeholder="description..."
                value = {todo.description}
                onChange={ event => setTodo({...todo, description: event.target.value})}
            />
            
            <input 
                type="text" 
                placeholder="due date..."
                value = {todo.duedate}
                onChange={ event => setTodo({...todo, duedate: event.target.value})}
            />

            <button onClick={handleAdd}>Add to do</button>

            <table>
                <tbody>
                    {// writing JavaS here so we need a { }
                    todos.map((todo,index) => //here you can name whatever
                        <tr key={index}>
                            <td>{ todo.description }</td>
                            <td> { todo.duedate } </td>
                        </tr> 
                    )

                    }

                </tbody>
            </table>
        </>
    )
}

export default Todolist; 
