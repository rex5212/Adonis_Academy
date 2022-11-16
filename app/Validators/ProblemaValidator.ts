import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProblemaValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    tipo: schema.string([
      rules.maxLength(80)
    ]),

    duracao: schema.string.optional([
      rules.minLength(1)
    ])
        
  })


  public messages: CustomMessages = {}
}
