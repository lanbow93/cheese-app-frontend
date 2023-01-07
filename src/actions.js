import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;

export const createAction = async ({request}) => {
    const formData = await request.formData()

    const newCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image")
    }

    await fetch(URL + "/cheeses", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCheese)
    } )

    return redirect("/")
}

export const updateAction = async ({request, params}) => {
    const formData = await request.formData();

    const newCheese = {
        name: formData.get("name"),
        countryOfOrigin: formData.get("countryOfOrigin"),
        image: formData.get("image")
    }

    await fetch(URL + `/cheeses/${params.id}`,{
        method: "put",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCheese)
    })

    return redirect("/")

}

export const deleteAction = async ({request, params}) => {
    await fetch(URL + `/cheeses/${params.id}`, {
        method: "delete",
        headers: {
            "Content-Type": "application/json"
        }
    })

    return redirect("/")
}