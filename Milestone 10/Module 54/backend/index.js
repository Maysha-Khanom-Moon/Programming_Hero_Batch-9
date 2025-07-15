const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@bd.com' },
    { id: 2, name: 'Sadia', email: 'sadia@bd.com' },
    { id: 3, name: 'Sakina', email: 'sakina@bd.com' }
]

app.get('/', (req, res) => {
  res.send('User Management Server is running')
})

app.get('/users', (req, res) => {
  res.send(users)
})

app.post('/users', (req, res) => {
  console.log('post api hitting');
  console.log((req.body));
  
})

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`)
})
