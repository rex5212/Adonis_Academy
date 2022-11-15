// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ViciosAvaliacao from "App/Models/ViciosAvaliacao"

export default class EquipamentosController {
        
    async index(){
        return await ViciosAvaliacao.query().preload("avaliacao")
                                            .preload("vicio")
    }
 
    async store({request}){
        const dados = request.all()
        return ViciosAvaliacao.create(dados)
    }
 
    async show({request}){
        const id = request.param("id")
        const show = ViciosAvaliacao.findBy('id', id)
        return show
    }
 
    async update({request}){  
        const id = request.param("id")
        const dados = request.all()
        const updat = await ViciosAvaliacao.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){    
        const id = request.param("id")
        const delet = await ViciosAvaliacao.findOrFail(id)
        delet.delete()
        return delet
    }

}
