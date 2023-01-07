import { useLoaderData, Form } from "react-router-dom"

const Show = (props) => {
    const cheese = useLoaderData()
    return <div>
        <h1>{cheese.name}</h1>
        <img src={cheese.image} alt={cheese.name} />
        <h3>Country of Origin: {cheese.countryOfOrigin}</h3>

        <Form action={`/update/${cheese._id}`} method="post">
            <h2>Update "{cheese.name}"</h2>
            <input type="text" name="name" placeholder={cheese.name} />
            <input type="text" name="countryOfOrigin" placeholder={cheese.countryOfOrigin} />
            <input type="text" name="image" placeholder={cheese.image} />
            <input type="submit" value={`Update ${cheese.name}`} />
        </Form>

    </div>
}

export default Show