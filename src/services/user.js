import ContenedorMongoDb from "../db/user.dao.js"
import userSchema from '../db/models/user.model.js'

const userDAO = new ContenedorMongoDb('usuarios', userSchema)
    
    const getUsersService = async () => {
        let users = await userDAO.getUsers()
        return users
    }
    const createUserService = async (user) => {
        let response = await userDAO.saveUser(user)
        return response;
    }


export {getUsersService, createUserService};