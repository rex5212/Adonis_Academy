// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Dieta from "App/Models/Dieta"
import DietaValidator from "App/Validators/DietaValidator"

export default class DietasController {
        
    async index(){
        return await Dieta.query().preload("cliente", (clienteQuery) => clienteQuery.preload("avaliacoes", 
                                  (avaliacaoQuery) => avaliacaoQuery.preload('problemas').preload("vicios")))
                                  .preload("treinamento", (treinamentoQuery) => treinamentoQuery.preload("equipamento"))
                                  .preload("funcionario")
    }
 
    async store({request}){
        const dados = await request.validate(DietaValidator)
        return Dieta.create(dados)   
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Dieta.findBy('id', id)
        return show
    }
 
    async update({request}){       
        const id = request.param("id")
        const dados = await request.validate(DietaValidator)
        const updat = await Dieta.findOrFail(id)
        updat.merge(dados).save()
        return updat 
    }
 
    async destroy({request}){
        const id = request.param("id")
        const delet = await Dieta.findOrFail(id)
        delet.delete()
        return delet
    }

}
