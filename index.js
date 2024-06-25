const express = require('express')
const app = express()

const herois = ["Homem aranha","Hulk","Ms. Marvel"]

//EndPoint listagem de todos os heróis(READ ALL ==> [GET])
app.get("/heroes", function(req, res){
    res.send(herois)
})

app.get("/heroes/:id", function(req, res){
    //acessar o parametro de rota ID
    const id = req.params.id

    //pego o item no array
    const umheroi = herois[id]

    //eu envio o item encontrado como resposta
    res.send(umheroi)
})

app.listen(3000)

// app.post()
// app.put()
// app.delete()