// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import AvFisica from "App/Models/AvFisica"

export default class AvfisicasController {
        
    async index(){
        return  AvFisica.all()
     }
 
     async store({request}){
        
         const dados = request.only(['fumante', 'altura', 'peso', 'pratica', 'id_tratamento'])
         return AvFisica.create(dados)
         
     }
 
     async show({request}){
 
         const id = request.param("id")
         const showRow = AvFisica.findBy('id', id)
         return showRow

     }
 
     async update({request}){
        
     const id = request.param("id")
     const dados = request.only(['fumante', 'altura', 'peso', 'pratica', 'id_tratamento'])
     const updat = await AvFisica.findOrFail(id)
     updat.merge(dados).save()
     return updat
 
     }
 
     async destroy({request}){
          
     const id = request.param("id")
     const delet = await AvFisica.findOrFail(id)
     delet.delete()
     return delet
 
     }

}
