// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import PesoEquipamento from "App/Models/PesoEquipamento"
import PesoEquipamentoValidator from "App/Validators/PesoEquipamentoValidator"

export default class EquipamentosController {
        
    async index(){
        return await PesoEquipamento.query().preload('Equipamento')
                                            .preload("Peso")
    }
 
    async store({request}){       
        const dados = await request.validate(PesoEquipamentoValidator)
        return PesoEquipamento.create(dados)       
    }
 
    async show({request}){
        const id = request.param("id")
        const show = PesoEquipamento.findBy('id', id)
        return show
    }
 
    async update({request}){  
        const id = request.param("id")
        const dados = await request.validate(PesoEquipamentoValidator)
        const updat = await PesoEquipamento.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){    
        const id = request.param("id")
        const delet = await PesoEquipamento.findOrFail(id)
        delet.delete()
        return delet
    }

}
