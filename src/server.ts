import express from 'express';
const server = express();

server.listen(3000, ()=>{
    console.log('Server listening on port 3000!');
})