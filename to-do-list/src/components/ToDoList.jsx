import { useState, useRef } from "react";

import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-material.css"; 

function Todolist(){
    const [todo, setTodo] = useState({description:"", duedate: null,priority: ""}); //initialize todo with an empty string
    const [todos, setTodos] = useState([]); //list to store all todos
    const gridRef = useRef();   

    const [colDefs, setColDefs] = useState([
        {   field: "description", filter:true, editable: true}, 
        {   field: "priority", 
            cellStyle: params => params.value === "High" ? { color: "red" } : { color : "black"},
            filter:true, editable: true}, 
        {   field: "duedate",  filter:true, editable: true},
        /*{   headerName: "Action", 
                cellRenderer: (params) => 
            (<button onClick = {(params) => handleDelete(params.row)}>Delete</button>)}*/
    ]); 

    const handleAdd = () => {
        if (!todo.description || !todo.duedate || !todo.priority) {
            alert("Type all fields");
            //checking if the field is empty 
        } else {
            setTodos([{ 
                ...todo,
                duedate: todo.duedate.toISOString()}
                , ...todos]);//spread operation, to add new values on top of exitsing value
            setTodo({description:"", duedate:null, priority: ""})// make the field empty after the previous task was added
        } 
    }
    const handleDelete = () => {
        if ((gridRef.current.getSelectedNodes()).length > 0 ){
            //this create an array of selected nodes, however earlier we set the rowSelection to single,
            // so the only and first item in this array is the selectied one    
            setTodos(todos.filter((_,index) =>
            gridRef.current.getSelectedNodes()[0].id != index)); 
        } else {
            alert("Select a row first")
        } 
    }

    const changeDate = (date) =>{
        setTodo({...todo,duedate:date})
    }

    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack
                mt={2} 
                direction="row" 
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                
                <TextField
                    label="Description"
                    value = {todo.description}
                    onChange={ event => setTodo({...todo, description: event.target.value})}
                />
                <TextField
                    label="Priority"
                    value = {todo.priority}
                    onChange={ event => setTodo({...todo, priority: event.target.value})}
                />
                
                <DatePicker 
                    value = {todo.duedate} 
                    onChange={ (date) => changeDate(date)}
                /> 

                <Button variant="contained" onClick={handleAdd}>Add to do</Button>
                <Button variant="contained" onClick={handleDelete}>Delete</Button>
            </Stack>
    
            <div className="ag-theme-material" 
                style={{height: '400px',width: '100%', backgroundColor: "black",alignContent:'center'}}>
                <AgGridReact
                    ref = {gridRef}
                    onGridReady={params => gridRef.current = params.api }
                    rowSelection="single"
                    rowData = {todos}
                    columnDefs= {colDefs}
                />
            </div>
            </LocalizationProvider>
        </>
    )
}

export default Todolist; 
