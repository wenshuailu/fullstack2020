const { request, response } = require('express')
const express = require('express')
const morgan = require('morgan')
// const http = require('http')
const app = express()

const requestLogger = (request, response, next) => {
    console.log('Method', request.method)
    console.log('Path', request.path)
    console.log('Body', request.body)
    console.log('---')
    next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(express.json())
// app.use(requestLogger)

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :result'))

morgan.token('result', (req, res) => JSON.stringify({
    name: req.body.name,
    number: req.body.number
})) 


let persons = [  
    {    
        id: 1,    
        name: "Arto Hellas",    
        number: "040-123456"
    }, 
    {    
        id: 2,    
        name: "Ada Lovelace",    
        number: "39-44-563232"
    },  
    {    
        id: 3,    
        name: "Dan Abramov",    
        number: "12-43-234358"
    },  
    {    
        id: 4,    
        name: "Mary Poppendick",    
        number: "39-23-6423122"
    },  
]

// const app = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     res.end(JSON.stringify(notes))
// })
app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

const generateInfo = () => {
    let result;

    result = `<p>Phonebook has info for ${persons.length} people</p>`
    
    const date = new Date();

    const dateStr = date.toString();

    return result + dateStr;
}

app.get('/info', (req, res) => {
    res.send(generateInfo());
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    
    const p = persons.find(person => person.id === id)

    if (p) {
        response.json(p);
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)

    response.status(204).end()
})

const generateId = () => {
    return Math.floor(Math.random() * 100 + 1)
}

app.post('/api/persons', (request, response) => {

    const body = request.body

    if (body.name && body.number && persons.findIndex(p => p.name === body.name) === -1 ) {
        const p = {
            id: generateId(),
            name: body.name,
            number: body.number
        }

        persons = persons.concat(p)

        return response.json(p)
    }

    if (!body.name || persons.findIndex(p => p.name === body.name) !== -1) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    
    response.status(400).json({
        error: 'number is missing'
    })

})

app.use(unknownEndpoint)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

