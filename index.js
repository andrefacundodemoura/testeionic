const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const cats = [
    {
        "id_gato":0,
        "nome":"Aline Saraiva",
        "sobrenome":"Saraiva",
        "telefone":"(13)123456789",
        "seguidores":156,
        "projetos":42,
        "seguidos":456,
        "img":"assets/img/gato1.jpg"
    },
    {
        "id_gato":1,
        "nome":"Deneval",
        "sobrenome":"Albuquerque",
        "telefone":"(13)123456789",
        "seguidores":8976,
        "projetos":75,
        "seguidos":7637,
        "img":"assets/img/gato2.jpg"
    },
    {
        "id_gato":2,
        "nome":"Eduardo",
        "sobrenome":"Nogueira",
        "telefone":"(13)123456789",
        "seguidores":768,
        "projetos":786,
        "seguidos":786,
        "img":"assets/img/gato3.jpg"
    },
    {
        "id_gato":3,
        "nome":"Fabrícia",
        "sobrenome":"Braga",
        "telefone":"(13)123456789",
        "seguidores":6,
        "projetos":456,
        "seguidos":2,
        "img":"assets/img/gato4.jpg"
    },
    {
        "id_gato":4,
        "nome":"Gustavo",
        "sobrenome":" Oliveira Filho",
        "telefone":"(13)123456789",
        "seguidores":763,
        "projetos":798,
        "seguidos":423,
        "img":"assets/img/gato5.jpg"
    },
    {
        "id_gato":5,
        "nome":"Marcelo",
        "sobrenome":" Nogueira",
        "telefone":"(13)123456789",
        "seguidores":12786,
        "projetos":663,
        "seguidos":4563,
        "img":"assets/img/gato6.jpg"
    },
    {
        "id_gato":6,
        "nome":"Margarida",
        "sobrenome":"Xavier",
        "telefone":"(13)123456789",
        "seguidores":7896,
        "projetos":4530,
        "seguidos":678,
        "img":"assets/img/gato7.jpg"
    },
    {
        "id_gato":7,
        "nome":"Paula",
        "sobrenome":"Macedo",
        "telefone":"(13)123456789",
        "seguidores":10,
        "projetos":10,
        "seguidos":10,
        "img":"assets/img/gato8.jpg"
    },
    {
        "id_gato":8,
        "nome":"Silas",
        "sobrenome":"Saraiva",
        "telefone":"(13)123456789",
        "seguidores":43,
        "projetos":2467,
        "seguidos":2356,
        "img":"assets/img/gato9.jpg"
    },
    {
        "id_gato":9,
        "nome":"Suélen",
        "sobrenome":"Batista Jr.",
        "telefone":"(13)123456789",
        "seguidores":5,
        "projetos":554,
        "seguidos":2354,
        "img":"assets/img/gato10.jpg"
    }
]

const dogs = [
    {
        "id_dog":0,
        "nome":"Aline Saraiva",
        "sobrenome":"Saraiva",
        "telefone":"(13)123456789",
        "seguidores":156,
        "projetos":42,
        "seguidos":456,
        "img":"assets/img/dog1.jpg"
    },
    {
        "id_dog":1,
        "nome":"Deneval",
        "sobrenome":"Albuquerque",
        "telefone":"(13)123456789",
        "seguidores":8976,
        "projetos":75,
        "seguidos":7637,
        "img":"assets/img/dog2.jpg"
    },
    {
        "id_dog":2,
        "nome":"Eduardo",
        "sobrenome":"Nogueira",
        "telefone":"(13)123456789",
        "seguidores":768,
        "projetos":786,
        "seguidos":786,
        "img":"assets/img/dog3.jpg"
    },
    {
        "id_dog":3,
        "nome":"Fabrícia",
        "sobrenome":"Braga",
        "telefone":"(13)123456789",
        "seguidores":6,
        "projetos":456,
        "seguidos":2,
        "img":"assets/img/dog4.jpg"
    },
    {
        "id_dog":4,
        "nome":"Gustavo",
        "sobrenome":" Oliveira Filho",
        "telefone":"(13)123456789",
        "seguidores":763,
        "projetos":798,
        "seguidos":423,
        "img":"assets/img/dog5.jpg"
    },
    {
        "id_dog":5,
        "nome":"Marcelo",
        "sobrenome":" Nogueira",
        "telefone":"(13)123456789",
        "seguidores":12786,
        "projetos":663,
        "seguidos":4563,
        "img":"assets/img/dog6.jpg"
    },
    {
        "id_dog":6,
        "nome":"Margarida",
        "sobrenome":"Xavier",
        "telefone":"(13)123456789",
        "seguidores":7896,
        "projetos":4530,
        "seguidos":678,
        "img":"assets/img/dog7.jpg"
    },
    {
        "id_dog":7,
        "nome":"Paula",
        "sobrenome":"Macedo",
        "telefone":"(13)123456789",
        "seguidores":10,
        "projetos":10,
        "seguidos":10,
        "img":"assets/img/dog8.jpg"
    },
    {
        "id_dog":8,
        "nome":"Silas",
        "sobrenome":"Saraiva",
        "telefone":"(13)123456789",
        "seguidores":43,
        "projetos":2467,
        "seguidos":2356,
        "img":"assets/img/dog9.jpg"
    },
    {
        "id_dog":9,
        "nome":"Suélen",
        "sobrenome":"Batista Jr.",
        "telefone":"(13)123456789",
        "seguidores":5,
        "projetos":554,
        "seguidos":2354,
        "img":"assets/img/dog10.jpg"
    }
]
const users = [
    {
        "id_usuario":0,
        "email":"bruno@email.com",
        "nome":"Bruno",
        "password":"12345678",
        "sobrenome":"Souza",
        "cidade":"Santos",
        "estado":"SP"
    },
    {
        "id_usuario":1,
        "email":"andre@email.com",
        "nome":"Andre",
        "password":"12345678",
        "sobrenome":"Facundo",
        "cidade":"San Francisco",
        "estado":"CA"
    },
    {
        "id_usuario":2,
        "email":"daniel@email.com",
        "nome":"Daniel",
        "password":"12345678",
        "sobrenome":"Costa",
        "cidade":"Cuiabá",
        "estado":"MT"
    }
]

app.get('/cats',function (req, res){
    res.send(cats)

})
app.get('/dogs',function (req, res){
    res.send(dogs)

})

var test = function(req,res) {
    for(let user of users){
        if (user.email == req.params.email){
            res.send(user);
        }
            
    }
    
  }
  app.get(`/users/:email`,test)

  var testcats = function(req,res) {
    for(let cat of cats){
        if (cat.nome == req.params.nome){
            res.send(cat);
        }
            
    }
    
  }
  app.get(`/cats/:nome`,testcats)
  

  var testdogs = function(req,res) {
    for(let dog of dogs){
        if (dog.nome == req.params.nome){
            res.send(cat);
        }
            
    }
    
  }
  app.get(`/dogs/:nome`,testdogs)

app.listen(8000)