import React, {useState} from 'react'; 
import { Typography } from "@mui/material";
import Box from '@mui/material/Box'; 
import Tabs from '@mui/material/Tabs'; 
import Tab from '@mui/material/Tab'; 
import Todolist from './ToDoList';

function Home(){
    return(
        <Typography variant="h6">Welcome to Todo List App!</Typography>
    ); 
}

export default function TabNavMUI(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue); 
    }; 

    return (
        <Box sx={{ width: '100%'}}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Home" />
                <Tab label="ToDo List" />
            </Tabs>

            <Box sx={{ mt: 2 }}>
        {value === 0 && <Home />}
        {value === 1 && <Todolist />}
      </Box>
        </Box>
    )

}; 