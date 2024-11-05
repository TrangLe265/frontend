import React from "react";
import { Button, DialogActions, DialogContent, DialogTitle, TextField, Dialog } from "@mui/material";
import { useState } from "react";
import { updateCar } from "./carapi";


export default function EditCar(props) {
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
        console.log(props.data) //because the prop name is data
        setCar({
            brand: props.data.brand,
            model: props.data.model,
            color: props.data.color,
            fuel: props.data.fuel, 
            modelYear:props.data.modelYear,
            price:props.data.price,

        })
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
        updateCar(props.data._links.car.href, car)
        .then(() => {
            props.handleFetch(); 
            handleClose(); 
        })
        .catch(err => console.error(err))
    }


    return (
        <>
            <Button  onClick={handleClickOpen}>Edit</Button>
        
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Car</DialogTitle>  
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
                    <Button onClick = {handleClose}>Close</Button>
                    <Button onClick= {handleSave}>Save</Button>
                </DialogActions>
            </Dialog>

        </>
    ); 
}
