// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User"

export default class UsersController {

    index(){
        return User.query().paginate(1)
    }

    async store ( {request} ){
        
        const dados = request.only(['email', 'password'])
        return await User.create(dados)

    }

    async login ( {request, auth} ){
        
        const {email, password} = request.body()
        const token = await auth.use('api').attempt(email, password)
        return token

    }
    show( {request} ) {
        const id = request.param('id')
        return User.findOrFail(id)
    }

    async destroy( {request} ) {
        const id = request.param('id')
        const users = await User.findOrFail(id)
        return users.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const users = await User.findOrFail(id)
        const dados = request.only(["email", "password"])
        users.merge(dados)
        return users.save()

    }
}
