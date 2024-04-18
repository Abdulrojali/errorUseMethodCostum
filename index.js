const mongoose =require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/methodeLatihan')

const newSchema=new Schema({
    nama:{
        type:String,
        required:true,
        max:6
    },
    address:{
        type:String,
        required:true,
        max:80
    }
})

newSchema.methods.gettings=function(){
    console.log(`nama :${nama}, address :${addres}`)
}

const modelAccount=mongoose.model('account',newSchema)

modelAccount.insertMany([
    {
        nama:'budi',
        address:'bandung'
    },
    {
        name:'ahmad',
        address:'surabaya'
    },
    {
        name:'ridho',
        address:'yogjakarta'
    }
])
console.log(modelAccount.gettings())
modelAccount.gettings()