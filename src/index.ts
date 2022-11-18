import express from "express"

const server = express()

server.get("/", (request, response) => {
    return response.json({message:"O Antonio esta cansado"})
})

server.listen(5000, () => {
     console.log("servidor on na porta 5000 http://localhost:5000")
})