const farmModel = require('../Models/farm.model')

//create an Animal 

exports['createAnimal'] = async (req, res, next) => {
    try {
        farmM = req['body']
        let animal = await farmModel['create'](farmM)
        if (!animal) {
            return res.status(401)['json']({
                error: "Failed to add the animal"
            })
        }
        res.status(201)['json']({
            success: "animal created successfully",
            data: animal
        })

    } catch (error) {
        res.status(500)['json']({
            error: error.message
        })
    }
}
//get all animals created 
exports.fetchAnimals= async (req,res,next)=> {
    const allAnimals = await farmModel.find() .sort({'updatedAt': -1}).all((posts))
    //if no animals are found in the database it will send a message saying that there is no animals available
    if(!allAnimals){
        res.status(400).json({
            error: 'No Animals found'
        })
    }
    return res.status(200).json({
        data : allAnimals
    })
}

//get only sold Animals 
exports.soldAnimals = async (req,res,next) =>{
    const soldAnimals = await farmModel.find({isSold: true})
    if(!soldAnimals){
        return res.status(404).json({
       status:"failed",
       message:"no sold animals found"
    })
}
return res.status(200).json({
    status:'success',
    data:soldAnimals
})
}

exports.sellAnimal = async (req,res,next) =>{
    const {animalId} = req.params;
    if (!animalId){
        return res.status(400).json({
            status:'failed',
            message:'missing animal id'
        })
    }

    try {
        const soldAnimal = await farmModel.findById(animalId)
        if (soldAnimal.isMatured === true){
            const sellAnimal = await farmModel.findByIdAndUpdate(animalId, {isSold:true}, {new:true})
             res.status(200).json({
            status:'success',
            data:sellAnimal
        })
        }
        return res.status(404).json({
            status:'failed',
            message:'The Animal is not matured yet'
        })
       
    } catch (error) {
        return res.status(500).json({
            status:'failed',
            message:'internal server'
        })
    }
}


exports.notSoldAnimals = async (req,res,next) =>{
    const notSoldAnimals = await farmModel.find({isSold: false})
    if(!notSoldAnimals){
        return res.status(404).json({
       status:"failed",
       message:"no sold animals found"
    })
}
return res.status(200).json({
    status:'success',
    data:notSoldAnimals
})
}

//get all the matured breeds
exports.maturedAnimals = async (req,res,next) =>{
    const matured = await farmModel.find({isMatured: true})
    if(!matured){
        return res.status(404).json({
       status:"failed",
       message:"no sold animals found"
    })
}
return res.status(200).json({
    status:'success',
    data:matured
})
}


