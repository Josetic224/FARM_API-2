const express = require('express')
const Router = express.Router()
const {createAnimal, fetchAnimals, soldAnimals, notSoldAnimals, maturedAnimals, sellAnimal} = require('../Controllers/farm.controllers')
const requestInfo = require('../Middlewares/farm.auth')

Router.post('/addAnimals',  requestInfo, createAnimal )

//get all animals in the farm
Router.get('/fetchAnimals', requestInfo, fetchAnimals )

Router.get('/soldAnimals', requestInfo, soldAnimals )

Router.get('/notSoldAnimals', requestInfo, notSoldAnimals)

Router.put('/sellAnimal/:animalId', requestInfo, sellAnimal)

Router.get('/maturedAnimals', requestInfo, maturedAnimals)

module.exports = Router