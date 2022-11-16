// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Equipamento from "App/Models/Equipamento"
import EquipamentoValidator from "App/Validators/EquipamentoValidator"

export default class EquipamentosController {
        
    async index(){
        return await Equipamento.query()
                                .preload("pesos")
                                .preload("academia")
                                .preload("treinamentos")
    }
 
    async store({request}){
        const dados = await request.validate(EquipamentoValidator)
        return Equipamento.create(dados)
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Equipamento.findBy('id', id)
        return show
    }
 
    async update({request}){  
        const id = request.param("id")
        const dados = await request.validate(EquipamentoValidator)
        const updat = await Equipamento.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){    
        const id = request.param("id")
        const delet = await Equipamento.findOrFail(id)
        delet.delete()
        return delet
    }

}
