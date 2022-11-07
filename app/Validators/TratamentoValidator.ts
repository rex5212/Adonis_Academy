import { schema, CustomMessages , rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TratamentoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    tipo: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(100)]),

    duracao: schema.number.optional([rules.range(1, 100000)]),

  })

 
  public messages: CustomMessages = {
    maxLength:'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    minLength:'o maximo de carateres do campo {{field}} e de {{options.minLegth}}',
  }
}
