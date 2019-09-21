var config = require('config.json');
var express = require('express');
var router = express.Router();
var QuestionService = require('services/consulta.service');
registerQuestion
// routes
router.post('/', registerQuestion);
router.get ('/listar', getAllQuestion);
router.delete('/:_id', deleteQuestion);
router.get('/qtd', Quantidade);
module.exports = router;

function registerQuestion(req, res) {
    QuestionService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function Quantidade(req, res) {
  
    
   
    QuestionService.getAll()
    .then(function (questions) {
        if (questions) {
            res.send(questions);
        } else {
            res.sendStatus(404);
        }
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}

function deleteQuestion(req, res) {
  
    var a =  req.params._id;
    console.log("Vou tirar - " + a);
    QuestionService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAllQuestion(req, res) {
    QuestionService.getAll()
        .then(function (questions) {
            if (questions) {
                res.send(questions);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
