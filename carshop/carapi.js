export function fetchCars(){
    return fetch(import.meta.env.VITE_API_URL)
    .then(response => {
        if(!response.ok) 
            throw new Error("Error in fetch: " + response.statusText)

        return response.json(); 
    })
}

export function deleteCar(url){
    return fetch(url, {method: 'DELETE'})
    .then(response =>{
        if (!response.ok)
            throw new Error("Error in delete: " + response.statusText)
    return response.json();
    } )
    
}

export function saveCar(newCar){
    return fetch(import.meta.env.VITE_API_URL, {
        method: "POST", 
        headers: { "Content-type": "application/json"}, 
        body: JSON.stringify(newCar) //turn a JavaScript object to json 
    })
    .then(response => {
        if (!response.ok)
            throw new Error("Error in saving " + response.statusText); 
        
        return response.json(); 
    })

}

export function updateCar(url, updatedCar) {
    return fetch(url, { //notice that the url here is different
        method: "PUT", 
        headers: { "Content-type": "application/json"}, 
        body: JSON.stringify(updatedCar) //turn a JavaScript object to json 
    })
    .then(response => {
        if (!response.ok)
            throw new Error("Error in update " + response.statusText); 
        
        return response.json(); 
    })
}
//we put all the fetches here
