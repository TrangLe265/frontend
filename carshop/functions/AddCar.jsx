import React from "react";
import { Button, DialogActions, DialogContent, DialogTitle, TextField, Dialog } from "@mui/material";
import { useState } from "react";
import { saveCar } from "./carapi";

export default function AddCar(props) {
    const [open, setOpen] = useState(false); 
    const [car, setCar] = useState({
        brand: "",
        model: "",
        color: "",
        fuel: "", 
        modelYear:"",
        price:"",
    }); 

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false); 
    }

    const handleChange = (event) => {
        setCar({...car, [event.target.name] : event.target.value}); 
    }

    const addCar = (car) => {
        props.saveCar(car); 
        handleClose();
    }

    const handleSave = () => {
        saveCar(car)
        .then(() => {
            props.handleFetch()
            handleClose(); 
        })
        .catch(err => console.error(err))
    }


    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>Add Car</Button>
        
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>  
                <DialogContent>
                    <TextField  
                        margin = "dense"
                        name="brand"
                        label="Brand"
                        value={car.brand}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                        />
                        <TextField  
                        margin = "dense"
                        name="model"
                        label="Model"
                        value={car.model}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                        />
                        <TextField  
                        margin = "dense"
                        name="color"
                        label="Color"
                        value={car.color}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                        />
                        <TextField  
                        margin = "dense"
                        name="fuel"
                        label="Fuel"
                        value={car.fuel}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                        />
                        <TextField  
                        margin = "dense"
                        name="modelYear"
                        label="Model Year"
                        value={car.modelYear}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                        />
                        <TextField  
                        margin = "dense"
                        name="price"
                        label="Price"
                        value={car.price}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                        />
                </DialogContent>
                <DialogActions> 
                    <Button onClick = {handleClose}>Cancel</Button>
                    <Button onClick= {handleSave}>Save</Button>
                </DialogActions>
            </Dialog>

        </>
    ); 
}
