// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Avaliacao from "App/Models/Avaliacao"
import AvaliacaoValidator from "App/Validators/AvaliacaoValidator"

export default class AvaliacaosController {
    
    async index(){
        return await Avaliacao.query().preload("cliente")
                                      .preload("problemas")
                                      .preload("vicios")
                                      .preload("treinamento", (treinamentoQuery) => treinamentoQuery.preload("dietas"))
                                      .preload("funcionario")
    }
 
    async store({request}){ 
        const dados = await request.validate(AvaliacaoValidator)
        return Avaliacao.create(dados)
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Avaliacao.findBy('id', id)
        return show
    }
 
    async update({request}){
        const id = request.param("id")
        const dados = await request.validate(AvaliacaoValidator)
        const updat = await Avaliacao.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){
        const id = request.param("id")
        const delet = await Avaliacao.findOrFail(id)
        delet.delete()
        return delet
    }

}
