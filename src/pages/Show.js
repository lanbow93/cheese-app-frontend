import { useLoaderData, Form } from "react-router-dom"

const Show = (props) => {
    const cheese = useLoaderData()
    return <div>
        <h1>{cheese.name}</h1>
        <img src={cheese.image} alt={cheese.name} />
        <h3>Country of Origin: {cheese.countryOfOrigin}</h3>

        <Form action={`/delete/${cheese._id}`} method="post">
            <input type="submit" value={`Delete ${cheese.name}`} />
        </Form>

        <Form action={`/update/${cheese._id}`} method="post">
            <h2>Update "{cheese.name}"</h2>
            <input type="text" name="name" defaultValue={cheese.name} />
            <input type="text" name="countryOfOrigin" defaultValue={cheese.countryOfOrigin} />
            <input type="text" name="image" defaultValue={cheese.image} />
            <input type="submit" value={`Update ${cheese.name}`} />
        </Form>

    </div>
}

export default Show