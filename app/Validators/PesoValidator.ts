import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PesoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    codigo: schema.string.optional([
      rules.alphaNum()
    ]),
    
    modelo: schema.string([
      rules.alpha({ allow: [ 'space', 'dash' ] }), 
      rules.maxLength(25)
    ]),

    peso: schema.number([
      rules.unsigned()
    ])

  })

  
  public messages: CustomMessages = {}
}
