// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"

export default class ClientesController {
        
    async index(){
        return  Cliente.all()
     }
 
     async store({request}){

        const dados = request.all()
        return Cliente.create(dados)
         
     }
 
     async show({request}){
 
        const id = request.param("id")
        const show = Cliente.findBy('id', id)
        return show

     }
 
    async update({request}){
        
     const id = request.param("id")
     const dados = request.all()
     const updat = await Cliente.findOrFail(id)
     updat.merge(dados).save()
     return updat
 
     }
 
     async destroy({request}){
          
     const id = request.param("id")
     const delet = await Cliente.findOrFail(id)
     delet.delete()
     return delet
 
     }

}
