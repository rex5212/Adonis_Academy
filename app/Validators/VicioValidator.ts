import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VicioValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    tipo: schema.string([
      rules.maxLength(20)
    ]),

    duracao: schema.string.optional([
      rules.minLength(1)
    ])
    
  })


  public messages: CustomMessages = {}
}
