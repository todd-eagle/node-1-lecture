const express = require('express')
//import from express

const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/andrew', (req, res) => {
    res.status(200).send('Andrew')
})

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:user_id', ctrl.getUserById)
app.post('/api/users', ctrl.createUser)
app.put('/api/users/:user_id', ctrl.editUser)
app.delete('/api/users/:user_id', ctrl.deleteUser)

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))
