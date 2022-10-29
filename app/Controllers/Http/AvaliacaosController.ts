// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Avaliacao from "App/Models/Avaliacao"

export default class AvaliacaosController {
    
    async index(){
        return  Avaliacao.all()
     }
 
     async store({request}){
         
         const dados = request.only(['estado_civil', 'id_cliente', 'id_avpsicologica', 'id_avfisica'])
         return Avaliacao.create(dados)
         
     }
 
     async show({request}){
 
         const id = request.param("id")
         const show = Avaliacao.findBy('id', id)
         return show

     }
 
    async update({request}){
    
     const id = request.param("id")
     const dados = request.only(['estado_civil', 'id_cliente', 'id_avpsicologica', 'id_avfisica'])
     const updat = await Avaliacao.findOrFail(id)
     updat.merge(dados).save()
     return updat
 
     }
 
     async destroy({request}){
        
     const id = request.param("id")
     const delet = await Avaliacao.findOrFail(id)
     delet.delete()
     return delet
 
     }

}
