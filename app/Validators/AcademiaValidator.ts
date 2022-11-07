import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AcademiaValidator {
  constructor(protected ctx: HttpContextContract) {}
  

  public schema = schema.create({
    nome: schema.string([rules.alpha({allow: ['space']}), rules.maxLength(100)]),

    endereco: schema.string([rules.alpha({allow:['space']}),rules.maxLength(120)]),

    numero: schema.string.optional([
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9]){3}\-?[0-9]{4}$/),
      rules.mobile({locale:['pt-BR']}),
      rules.unique({table:'academias', column:'numero'}),
    ])
  })

  public messages: CustomMessages = {
    maxLength:'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    minLength:'o maximo de carateres do campo {{field}} e de {{options.minLegth}}',
  }
}
