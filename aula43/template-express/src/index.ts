import express, {Express, Request, Response} from "express"
import cors from "cors"
import { countries } from "./data"


const app: Express = express()

app.use(express.json())
app.use(cors())


app.get('/countries', (req, res) => {
    const result = countries.map((country => {
        return({id: country.id, name: country.name })
    }))
    res.status(200).send(result)
})

const server = app.listen(3003, () => console.log(countries))