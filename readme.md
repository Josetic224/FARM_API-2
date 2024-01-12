 This is an API that  keeps record of  various Livestock and their breeds...  This API  checks for the maturity of the livestock and this determines if the Livestock is old enough to be sold

This API has 6 endpoints 
1 '/addAnimals' this endpoint is tpo enter the details of an animal
2 '/fetchAnimals' to get all animals in the database
3 '/notSoldAnimals/:id'   
4 '/soldAnimals/:id'
5 '//sellAnimal/:animalId:name'
6 '/maturedAnimals'
The 'farm.model.js' file contains an array of objects representing different animals with properties such as name, breed and age.