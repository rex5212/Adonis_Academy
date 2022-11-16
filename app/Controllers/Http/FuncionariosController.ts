// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario"
import FuncionarioValidator from "App/Validators/FuncionarioValidator"

export default class FuncionariosController {
        
    async index(){
        return await Funcionario.query().preload("academia")
                                        .preload("avaliacoes", (avaliacaoQuery) => avaliacaoQuery.preload("cliente"))
                                        .preload("treinamentos", (treinamentosQuery) => treinamentosQuery.preload("avaliacao", 
                                        (treinamentosQuery) => treinamentosQuery.preload("cliente")))
                                        .preload("dietas", (dietasQuery) => dietasQuery.preload("cliente"))
    }
 
    async store({request}){
        const dados = await request.validate(FuncionarioValidator)
        return Funcionario.create(dados)  
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Funcionario.findBy('id', id)
        return show
    }
 
    async update({request}){  
        const id = request.param("id")
        const dados = await request.validate(FuncionarioValidator)
        const updat = await Funcionario.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){
        const id = request.param("id")
        const delet = await Funcionario.findOrFail(id)
        delet.delete()
        return delet
    }

}
