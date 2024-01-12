const mongoose = require('mongoose')
animalSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide a name for the category']
    },
    breed:{
        type:String,
        required:[true, 'you have not entered a breed for this Animal']

    },
    ageInMonths:{
        type:Number,
        required:[true, 'please enter the age for this Animal']
    },

    isMatured:{
       type:Boolean,
       default:false  //if it's false that means it's still in embryo stage
    },

    isSold:{
        type:Boolean,
        default:false // this means that the particular animal has not been sold
    }
})


animalSchema.pre('save', function(next){
    if(this.ageInMonths >= 5){
      this.isMatured = true;  
    }
    next()
    

})
module.exports= mongoose.model("Animal",animalSchema)