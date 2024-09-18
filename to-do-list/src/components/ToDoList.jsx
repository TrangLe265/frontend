import { useState } from "react";
import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-material.css"; 


function Todolist(){
    const [todo, setTodo] = useState({description:"", duedate: "",priority: ""}); //initialize todo with an empty string
    const [todos, setTodos] = useState([]); //list to store all todos

    const [colDefs, setColDefs] = useState([
        {field: "description", filter:true, editable: true}, 
        {field: "priority", filter:true, editable: true}, 
        {field: "duedate",  filter:true, editable: true},
        {headerName: "Action", 
            cellRenderer: (params) => 
            (<button onClick = {(params) => handleDelete(params.row)}>Delete</button>)}
    ]); 

    const handleAdd = () => {
        if (!todo.description || !todo.duedate || !todo.priority) {
            alert("Type all fields");
            //checking if the field is empty 
        } else {
            setTodos([todo,...todos])//spread operation, to add new values on top of exitsing value
            setTodo({description:"", duedate: "", priority: ""})// make the field empty after the previous task was added
        } 
    }
    const handleDelete = (row) => {
        
        setTodos(todos.filter((_,index) => row !== index )) //Filter is a JVS function that returns the elements of an array that meet the condition specified in a callback function.
        //create a new array, set that array as the new Todos array 
    }

    return (
        <> 
            <h3>My Todos</h3>
            <input
                style = {{height:30,width:200, margin: 10}} 
                type="text" 
                placeholder="Description..."
                value = {todo.description}
                onChange={ event => setTodo({...todo, description: event.target.value})}
            />
             <input
                style = {{height:30,width:100, margin: 10}} 
                type="text" 
                placeholder="Priority..."
                value = {todo.priority}
                onChange={ event => setTodo({...todo, priority: event.target.value})}
            />
            <input
                style = {{height:30,width:120, margin: 10}}
                type="date" 
                placeholder="Due date..."
                value = {todo.duedate}
                onChange={ event => setTodo({...todo, duedate: event.target.value})}
            />

            <button onClick={handleAdd}>Add to do</button>
        

            <div className="ag-theme-material" 
                style={{height: '100%',width: '100%', backgroundColor: "black",}}>
                <AgGridReact
                    rowData = {todos}
                    columnDefs= {colDefs}
                />
            </div>
            
           
        </>
    )
}

export default Todolist; 
