import { schema, CustomMessages, rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SuplementoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    nome: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(100)]),

    marca: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(100)]),
 
    quantidade: schema.number.optional([rules.range(1, 100)]),

    precos: schema.number.optional([rules.range(1, 100000)]),

  })


  public messages: CustomMessages = {
    maxLength:'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    minLength:'o maximo de carateres do campo {{field}} e de {{options.minLegth}}',
  }
}
