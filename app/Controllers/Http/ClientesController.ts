// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"
import ClienteValidator from "App/Validators/ClienteValidator"

export default class ClientesController {
        
   async index(){
      return await Cliente.query().preload("avaliacoes", (avaliacaoQuery) => avaliacaoQuery.preload("problemas").preload("vicios"))
                                  .preload("dietas", (dietasQuery) => dietasQuery.preload("treinamento"))
   }
 
   async store({request}){
      const dados = await request.validate(ClienteValidator)
      return Cliente.create(dados)        
   }
 
   async show({request}){
      const id = request.param("id")
      const show = Cliente.findBy('id', id)
      return show
   }
 
   async update({request}){        
      const id = request.param("id")
      const dados = await request.validate(ClienteValidator)
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
