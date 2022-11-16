// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Peso from "App/Models/Peso"
import PesoValidator from "App/Validators/PesoValidator"

export default class PesosController {
        
    async index(){
        return await Peso.query().preload("equipamentos")
    }
 
    async store({request}){
        const dados = await request.validate(PesoValidator)
        return Peso.create(dados)     
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Peso.findBy('id', id)
        return show
    }
 
    async update({request}){
        const id = request.param("id")
        const dados = await request.validate(PesoValidator)
        const updat = await Peso.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){
        const id = request.param("id")
        const delet = await Peso.findOrFail(id)
        delet.delete()
        return delet
    }

}
