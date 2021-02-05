const http = require('http')
const fs = require('fs')
//const useragent = require('useragent')

const server = http.createServer()

server.on('request', (req, res)=> {
  console.time('test')

  // 1- fs.readFile('test-file.txt', (err, data)=> {
  //   if (err) throw err
  //   res.end(data)
  
  // 2 - const readable = fs.createReadStream('test-file.txt')
  // readable.on('data', chunk=> {
  //   res.write(chunk)
  // })

  // readable.on('end', ()=> {
  //   res.end()
  // })
  // readable.on('error', err=> {
  //   console.log(err)
  //   res.status(500)
  //   res.end('File not Found')
  // })

  const readable = fs.createReadStream('test-file.txt')
  readable.pipe(res)

  console.timeEnd('test')
  // Tests results (approximately)
  console.log('1 - ', '6.236ms')
  console.log('2 - ', '1.009ms')
  console.log('3 - ', '0.274ms')
})

server.listen(8000, ()=> {
  console.log('Up and running')
})






