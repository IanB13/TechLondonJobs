const app = require('./app') // the actual Express app
const http = require('http')
const server = http.createServer(app)

// for front-end and back end capabilites
const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
