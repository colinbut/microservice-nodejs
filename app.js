const express = require('express')
const app = express()

let port = 3000

app.get('/', (req, res) => res.send("Hello World!"))
app.get('/demo', (req, res) => {
    res.send("Demo")
})
app.get('/test', (req, res) => {
    
    let person = {
        "name": "Colin But",
        "age": 31,
        "single": false,
        "address": {
            "first_line": "1 Rocky Road",
            "second_line": "Flat 23 Colin House",
            "city": "Los Angelos",
            "postcode": "CG3 78F",
        },
        "previous_addresses": [
            {
                "first_line": "145 Brownlie street",
                "second_line": "Flat 167 Mansion House",
                "city": "Las Vegas",
                "postcode": "CG3 78F",
            },
            {
                "first_line": "90 Cookie Avenue",
                "second_line": "Flat 20 Covent Gardens",
                "city": "New York",
                "postcode": "CG3 78F",
            }
        ]
    }

    console.log('Person: ' + person.name)

    res.send(person)
})

app.listen(port, () => console.log(`App listening on port ${port}`))
