// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Vicio from "App/Models/Vicio"
import VicioValidator from "App/Validators/VicioValidator"

export default class EquipamentosController {
        
    async index(){
        return await Vicio.query().preload("avaliacoes", (avaliacaoQuery) => avaliacaoQuery.preload("problemas").preload("cliente"))
    }
 
    async store({request}){
        const dados = await request.validate(VicioValidator)
        return Vicio.create(dados) 
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Vicio.findBy('id', id)
        return show
    }
 
    async update({request}){  
        const id = request.param("id")
        const dados = await request.validate(VicioValidator)
        const updat = await Vicio.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){    
        const id = request.param("id")
        const delet = await Vicio.findOrFail(id)
        delet.delete()
        return delet
    }

}
