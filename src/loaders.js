const URL = process.env.REACT_APP_URL;

export const cheesesLoader = async() => {
    const response = await fetch(URL + "/cheeses")
    const cheeses = await response.json()
    return cheeses
}

export const cheeseLoader = async ({params}) => {
    const response = await fetch(URL + `/cheeses/${params.id}`)
    const cheese = await response.json()
    return cheese
}