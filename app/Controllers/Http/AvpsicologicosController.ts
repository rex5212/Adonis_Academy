// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import AvPsicologica from "App/Models/AvPsicologica"

export default class AvpsicologicosController {
        
    async index(){
        return AvPsicologica.all()
     }
 
     async store({request}){
         
         const dados = request.only(['id_vicios'])
         return AvPsicologica.create(dados)
         
     }
 
     async show({request}){
 
         const id = request.param("id")
         const showRow = AvPsicologica.findBy('id', id)
         return showRow

     }
 
    async update({request}){
        
     const id = request.param("id")
     const dados = request.only(['id_vicios'])
     const updat = await AvPsicologica.findOrFail(id)
     updat.merge(dados).save()
     return updat
 
     }
 
     async destroy({request}){
        
     const id = request.param("id")
     const delet = await AvPsicologica.findOrFail(id)
     delet.delete()
     return delet
 
     }

}
