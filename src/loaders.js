const URL = process.env.REACT_APP_URL;

export const cheeseLoader = async() => {
    const response = await fetch(URL + "/cheeses")
    const cheeses = await response.json()
    return cheeses
}