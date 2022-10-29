// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Suplemento from "App/Models/Suplemento"

export default class SuplementosController {
        
    async index(){
        return  Suplemento.all()
     }
 
     async store({request}){
         
         const dados = request.only(['nome', 'marca', 'quantidade', 'precos'])
         return Suplemento.create(dados)
         
     }
 
     async show({request}){
 
         const id = request.param("id")
         const show = Suplemento.findBy('id', id)
         return show
     }
 
     async update({request}){
        
     const id = request.param("id")
     const dados = request.only(['nome', 'marca', 'quantidade', 'precos'])
     const updat = await Suplemento.findOrFail(id)
     updat.merge(dados).save()
     return updat
 
     }
 
     async destroy({request}){

     const id = request.param("id")
     const delet = await Suplemento.findOrFail(id)
     delet.delete()
     return delet
 
     }

}
