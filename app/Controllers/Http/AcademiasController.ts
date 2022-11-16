// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Academia from "App/Models/Academia"
import AcademiaValidator from "App/Validators/AcademiaValidator"

export default class AcademiasController {

    async index(){
        return await Academia.query()
                             .preload("suplemento")
                             .preload("funcionarios")
                             .preload("equipamentos")
    }
 
    async store({request}){
        const dados = await request.validate(AcademiaValidator)
        return Academia.create(dados)  
    }
 
    async show({request}){
        const id = request.param("id")
        const showRow = Academia.findBy('id', id)
        return showRow
    }
 
    async update({request}){
        const id = request.param("id")
        const dados = await request.validate(AcademiaValidator)
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
