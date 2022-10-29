// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Equipamento from "App/Models/Equipamento"

export default class EquipamentosController {
        
    async index(){
        return  Equipamento.all()
     }
 
     async store({request}){
         
         const dados = request.only(['id_pesos'])
         return Equipamento.create(dados)
         
     }
 
     async show({request}){
 
         const id = request.param("id")
         const show = Equipamento.findBy('id', id)
         return show
     }
 
     async update({request}){
        
     const id = request.param("id")
     const dados = request.only(['id_pesos'])
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
