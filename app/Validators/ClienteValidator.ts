import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({

  nome: schema.string([
    rules.alpha({ allow: ['space'] }), 
    rules.maxLength(100),
    rules.minLength(3)
  ]),

  cpf: schema.string([
    rules.unique({ table: 'clientes', column: 'cpf' }),
    rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
  ]),

  sexo: schema.string.optional([
    rules.alpha(), 
    rules.maxLength(10),
    rules.minLength(1)
  ]),

  idade: schema.number([
    rules.range(6, 120),
    rules.unsigned()
  ]),

  endereco: schema.string.optional([
    rules.maxLength(120),
    rules.minLength(15)  
  ]),

  numero: schema.string.optional([ //
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9]){3}\-?[0-9]{4}$/),
      rules.unique({table:'clientes', column:'numero'}),
  ]),

  estadocivil: schema.string([
    rules.alpha(),
    rules.maxLength(12),
    rules.minLength(5)
  ])


  })

  public messages: CustomMessages = {
    maxLength:'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    minLength:'o maximo de carateres do campo {{field}} e de {{options.minLegth}}',
  }
}
