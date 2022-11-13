// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Treinamento from "App/Models/Treinamento"

export default class TreinamentosController {
        
    async index(){
        return  Treinamento.all()
     }
 
     async store({request}){

         const dados = request.all()
         return Treinamento.create(dados)
         
     }
 
     async show({request}){
 
         const id = request.param("id")
         const show = Treinamento.findBy('id', id)
         return show

     }
 
     async update({request}){
        
     const id = request.param("id")
     const dados = request.all()
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
