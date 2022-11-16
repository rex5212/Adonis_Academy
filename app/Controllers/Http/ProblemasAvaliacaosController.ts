// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ProblemaAvaliacao from "App/Models/ProblemaAvaliacao"
import ProblemaAvaliacaoValidator from "App/Validators/ProblemaAvaliacaoValidator"

export default class EquipamentosController {
        
    async index(){
        return await ProblemaAvaliacao.query().preload("avaliacao")
                                              .preload("problemas")
    }
 
    async store({request}){       
        const dados = await request.validate(ProblemaAvaliacaoValidator)
        return ProblemaAvaliacao.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = ProblemaAvaliacao.findBy('id', id)
        return show
    }
 
    async update({request}){  
        const id = request.param("id")
        const dados = await request.validate(ProblemaAvaliacaoValidator)
        const updat = await ProblemaAvaliacao.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){    
        const id = request.param("id")
        const delet = await ProblemaAvaliacao.findOrFail(id)
        delet.delete()
        return delet
    }

}
