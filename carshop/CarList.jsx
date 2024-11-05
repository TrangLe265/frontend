import React from 'react';
import { useState, useEffect} from 'react'; 
import Button from '@mui/material/Button'; 
import Snackbar from '@mui/material/Snackbar';
import {fetchCars} from '/carapi'; 
import { deleteCar } from './carapi';
import AddCar from './AddCar';
import EditCar from './EditCar';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the Data Grid

function CarList(){
    const [cars, setCars] = useState([]); 

    const [open, setOpen] = React.useState(false);

    const [colDefs, setColDefs] = useState([
        {field: "brand", filter: true},
        {field: "model", filter: true},
        {field: "color", filter: true, width:150},
        {field: "fuel", filter: true, width: 150},
        {headerName:'Year',field: "modelYear", filter: true, width: 120},
        {field: "price", filter: true, width: 120},
        {
            cellRenderer: params => <EditCar handleFetch={handleFetch} data={params.data} />, width: 120 //prop name is data
        },
        {
            cellRenderer: params => <Button onClick= {() => handleDelete(params.data._links.self.href)} >Delete</Button>, width: 120
        }

    ]); 
    
    useEffect(() => {
        handleFetch(); 
    }, []) ; //code is executed every time the handleFetch is ran

    const handleFetch = () => {
        fetchCars()
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err))
    }

    const handleDelete = (url) => {
        if (window.confirm("Are you sure?")) {
            deleteCar(url)
            .then(()=> {
                handleFetch(); 
                setOpen(true); 
            })
            .catch(err => console.error(err))
        }
        
    }

   
    return(
        <>
            <AddCar handleFetch={handleFetch} />
            <div className='ag-theme-material'
                style ={{height:500, width: '100%'}}
            >
                
                <AgGridReact 
                    rowData={cars}
                    columnDefs={colDefs}
                    paginationAutoPageSize = {true}
                />
            </div>
            
            <Snackbar 
                open = {open}
                autoHideDuration={3000}
                onClose={()=> setOpen(false)}
                message = "Car deleted"
            />
        </>
    )
}

export default CarList