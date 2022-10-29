// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Vicio from "App/Models/Vicio"

export default class ViciosController {
        
    async index(){
        return  Vicio.all()
     }
 
     async store({request}){

         const dados = request.only(['tipo', 'duracao'])
         return Vicio.create(dados)
         
     }
 
     async show({request}){
 
         const id = request.param("id")
         const show = Vicio.findBy('id', id)
         return show

     }
 
     async update ({request}){
        
     const id = request.param("id")
     const dados = request.only(['tipo', 'duracao'])
     const updat = await Vicio.findOrFail(id)
     updat.merge(dados).save()
     return updat

     }
 
     async destroy({request}){
          
     const id = request.param("id")
     const delet = await Vicio.findOrFail(id)
     delet.delete()
     return delet

     }

}
