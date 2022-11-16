// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Treinamento from "App/Models/Treinamento"
import TreinamentoValidator from "App/Validators/TreinamentoValidator"

export default class TreinamentosController {
        
    async index(){
        return await Treinamento.query().preload("equipamento", (equipamentoQuery) => equipamentoQuery.preload("pesos"))
                                        .preload("funcionario")
                                        .preload("avaliacao", (avaliacaoQuery) =>
                                         avaliacaoQuery.preload("problemas").preload("vicios").preload("cliente").preload("funcionario"))
                                        .preload("dietas", (dietaQuery) => dietaQuery.preload("funcionario"))
    }
 
    async store({request}){
        const dados = await request.validate(TreinamentoValidator)
        return Treinamento.create(dados)   
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Treinamento.findBy('id', id)
        return show
    }
 
    async update({request}){
        const id = request.param("id")
        const dados = await request.validate(TreinamentoValidator)
        const updat = await Treinamento.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){   
        const id = request.param("id")
        const delet = await Treinamento.findOrFail(id)
        delet.delete()
        return delet
    }

}
