import { Link, useLoaderData, Form } from "react-router-dom"
const Index = (props) => {
    const cheeses = useLoaderData();
    console.log(cheeses)
    return <div>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="Cheese Name" />
            <input type="text" name="countryOfOrigin" placeholder="Country Of Origin" />
            <input type="text" name="image" placeholder="Image URL" />
            <input type="submit" value="Make New Cheese" />
        </Form>

        {cheeses.map((cheese)=> {
            console.log(cheese)
            return <div key={cheese._id}>
                <Link to={`/${cheese._id}`} ><h1>{cheese.name}</h1></Link>
                <img src={cheese.image} alt={cheese.name} />
                <h3>Country of Origin: {cheese.countryOfOrigin}</h3>
            </div>
        })}
    </div>
}

export default Index