// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Suplemento from "App/Models/Suplemento"
import SuplementoValidator from "App/Validators/SuplementoValidator"

export default class SuplementosController {
        
    async index(){
        return await Suplemento.query().preload("academia")
    }
 
    async store({request}){    
        const dados = await request.validate(SuplementoValidator)
        return Suplemento.create(dados)      
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Suplemento.findBy('id', id)
        return show
    }
 
    async update({request}){
        const id = request.param("id")
        const dados = await request.validate(SuplementoValidator)
        const updat = await Suplemento.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){
        const id = request.param("id")
        const delet = await Suplemento.findOrFail(id)
        delet.delete()
        return delet
    }

}
