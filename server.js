import express from 'express'

const app = express()
const port = 5555
const path = process.cwd()
app.use(express.static(path))

app.get('/', (req, res) => {
    res.sendFile(path + '/app/views/home/index.html')
})

// nuxt OK
app.get('/nuxt', (req, res) => {
    res.sendFile(path + '/app/views/nuxt/dist/index.html')
})

// vue OK
app.get('/vue', (req, res) => {
    res.sendFile(path + '/app/views/vue/dist/index.html')
})

app.listen(port, () => {
    console.log('Acesse http://localhost:' + port)
})