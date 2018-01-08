const http = require('http')

const server = require('./server')
const PORT = process.env.PORT || 3000

http.createServer(server).listen(PORT, (err) => {
  if (err) {
    throw err
  }

  console.log(`server is listening on ${PORT}`)
})
