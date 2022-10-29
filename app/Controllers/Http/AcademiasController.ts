// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Academia from "App/Models/Academia"

export default class AcademiasController {

    async index(){
        return  Academia.all()
     }
 
     async store({request}){

         const dados = request.only(['nome', 'numero', 'endereco'])
         return Academia.create(dados)
         
     }
 
     show({request}){
 
         const id = request.param("id")
         const showRow = Academia.findBy('id', id)
         return showRow

     }
 
     async update({request}){
        
        const id = request.param("id")
        const dados = request.only(['nome', 'numero', 'endereco'])
        const updat = await Academia.findOrFail(id)
        updat.merge(dados).save()
        return updat
 
     }
 
     async destroy({request}){
         
     const id = request.param("id")
     const delet = await Academia.findOrFail(id)
     delet.delete()
     return delet

     }

}
