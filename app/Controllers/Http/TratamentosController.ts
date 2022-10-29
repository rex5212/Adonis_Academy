// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Tratamento from "App/Models/Tratamento"

export default class TratamentosController {
        
    async index(){
        return  Tratamento.all()
     }
 
     async store({request}){
         
         const dados = request.only(['tipo', 'duracao'])
         return Tratamento.create(dados)
         
     }
 
     async show({request}){
 
         const id = request.param("id")
         const show = Tratamento.findBy('id', id)
         return show

     }
 
     async update({request}){
        
     const id = request.param("id")
     const dados = request.only(['tipo', 'duracao'])
     const updat = await Tratamento.findOrFail(id)
     updat.merge(dados).save()
     return updat
 
     }
 
     async destroy({request}){
           
     const id = request.param("id")
     const delet = await Tratamento.findOrFail(id)
     delet.delete()
     return delet
 
     }

}
