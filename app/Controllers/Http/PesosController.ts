// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Peso from "App/Models/Peso"

export default class PesosController {
        
    async index(){
        return  Peso.all()
     }
 
     async store({request}){

        const dados = request.only(['numeracao', 'modelo'])
         return Peso.create(dados)
         
     }
 
     async show({request}){
 
         const id = request.param("id")
         const show = Peso.findBy('id', id)
         return show
     }
 
     async update({request}){
        
     const id = request.param("id")
     const dados = request.only(['numeracao', 'modelo'])
     const updat = await Peso.findOrFail(id)
     updat.merge(dados).save()
     return updat
 
     }
 
     async destroy({request}){
    
     const id = request.param("id")
     const delet = await Peso.findOrFail(id)
     delet.delete()
     return delet
 
     }

}
