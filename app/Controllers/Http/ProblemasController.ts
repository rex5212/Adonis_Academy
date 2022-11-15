// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Problema from "App/Models/Problema"

export default class EquipamentosController {
        
    async index(){
        return await Problema.query().preload("avaliacoes", (avaliacaoQuery) => avaliacaoQuery.preload("vicios").preload("cliente"))
    }
 
    async store({request}){         
        const dados = request.all()
        return Problema.create(dados)        
    }
 
    async show({request}){
        const id = request.param("id")
        const show = Problema.findBy('id', id)
        return show
    }
 
    async update({request}){  
        const id = request.param("id")
        const dados = request.all()
        const updat = await Problema.findOrFail(id)
        updat.merge(dados).save()
        return updat
    }
 
    async destroy({request}){    
        const id = request.param("id")
        const delet = await Problema.findOrFail(id)
        delet.delete()
        return delet
    }

}
