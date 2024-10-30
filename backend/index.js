
//MIDDLEWARES
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

//database
let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": "1"
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": "2"
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": "3"
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": "4"
  },
  {
    "id": "5",
    "name": "Tommy Hill",
    "number": "34099040934"
  }
]

//get main page
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

//get all api data
app.get('/api/persons', (request, response) => {
  response.json(persons)
})

//get a single record based on id
app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const note = persons.find(person => person.id === id)
  response.json(note)
})

//delete a record
app.delete('/api/notes/:id', (request, response) => {
  const id = request.params.id
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

//receive data and create person
app.post('/api/persons', (request, response) => {
  const person = request.body
  console.log(person)
  response.json(person)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`You can reach the server at http://localhost:${PORT}`)
})
