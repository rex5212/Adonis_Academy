import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PesoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    
    modelo: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(100)]),


    numeracao: schema.number.optional([rules.range(1, 300)]),

  })

  
  public messages: CustomMessages = {
    maxLength:'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    minLength:'o maximo de carateres do campo {{field}} e de {{options.minLegth}}',
  }
}
