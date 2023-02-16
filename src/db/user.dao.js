import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://coderhouse:coder123456@codehouse.wecfmdo.mongodb.net/coderhouse?retryWrites=true&w=majority', error => {
    if(error){
        console.log('Cannot connect to db')
        process.exit()
    }
})

class ContenedorMongoDb {

    constructor(collection, schema){
        this.userCollection = mongoose.model(collection, schema)
    }

    async getUsers(){
        try {
            let users = await this.userCollection.find()
            return users;
        } catch (error) {
            console.log(error)
        }
    }

    async saveUser(user){
        try {
            let result = this.userCollection.create(user)
            return result;
        } catch (error) {
            console.log(error)
        }
    }
}

export default ContenedorMongoDb;