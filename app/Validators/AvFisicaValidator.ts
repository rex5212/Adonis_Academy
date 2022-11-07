import { schema, CustomMessages ,rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AvFisicaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    altura: schema.number.optional([rules.range(1, 100)]),

    peso: schema.number.optional([rules.range(1, 100)]),

    idTratamento: schema.number([
      rules.exists({ table: 'av_fisicas', column: 'id' }),
      rules.unique({ table: 'av_fisicas', column: 'id' }),
    ]),

    fumante:schema.boolean(),

    pratica:schema.boolean(),

  })

  
  public messages: CustomMessages = {
    maxLength:'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    minLength:'o maximo de carateres do campo {{field}} e de {{options.minLegth}}',
  }
}
