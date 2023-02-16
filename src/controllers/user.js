import {
    getUsersService,
    createUserService
} from "../services/user.js";

    const getUsers =  async (req, res) => {
        let users = await getUsersService()
        res.render('user', { users })
    }
    const createUser = (req, res) => {
        let response = createUserService(req.body)
        res.send(response)
    }

export { getUsers, createUser}