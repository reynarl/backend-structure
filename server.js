import http from 'http'
import api from './api/api'

const server = http.createServer()

//server.on('', ()=>{}) para ver los eventos del servidor

server.on('error', () => {
  console.error('error al inciar servidor')
})

server.on('listening', () => {
  console.log('Servidor escuchando ')
})

server.listen(3000)