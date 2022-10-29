// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario"

export default class FuncionariosController {
        
    async index(){
        return  Funcionario.all()
     }
 
     async store({request}){
         
         const dados = request.only(['cpf', 'nome', 'sexo', 'endereco', 'salario', 'numero', 'id_academia'])
         return Funcionario.create(dados)
         
     }
 
     async show({request}){
 
         const id = request.param("id")
         const show = Funcionario.findBy('id', id)
         return show

     }
 
     async update({request}){
        
     const id = request.param("id")
     const dados = request.only(['cpf', 'nome', 'sexo', 'endereco', 'salario', 'numero', 'id_academia'])
     const updat = await Funcionario.findOrFail(id)
     updat.merge(dados).save()
     return updat
 
     }
 
     async destroy({request}){
           
     const id = request.param("id")
     const delet = await Funcionario.findOrFail(id)
     delet.delete()
     return delet
 
     }

}
