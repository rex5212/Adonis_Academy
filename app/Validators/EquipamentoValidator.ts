import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EquipamentoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({

    nome: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(100)]),

    idPesos: schema.number([
      rules.exists({ table: 'equipamentos', column: 'id' }),
      rules.unique({ table: 'equipamentos', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    maxLength:'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    minLength:'o maximo de carateres do campo {{field}} e de {{options.minLegth}}',
  }
}
