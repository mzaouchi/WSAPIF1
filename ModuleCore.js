const fs = require('fs')
const http = require('http')

// console.log('Start')

// fs.readFile('./Text.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//         // console.log(data.toString())
//     }
// })

// console.log(fs.readFileSync('./Text.txt','utf8'))

// console.log('Finish')


http.createServer((req,res)=>{
    res.write('<h1>Ines</h1>')
    res.end()
}).listen(5000)