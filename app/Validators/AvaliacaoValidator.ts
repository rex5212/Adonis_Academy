import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AvaliacaoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    
    estadoCivil: schema.string([rules.alpha({allow: ['space']}), rules.maxLength(100)]),

    idCliente: schema.number([
      rules.exists({ table: 'avaliacaos', column: 'id' }),
      rules.unique({ table: 'avaliacaos', column: 'id' }),
    ]),

    idAvpsicologica: schema.number([
      rules.exists({ table: 'avaliacaos', column: 'id' }),
      rules.unique({ table: 'avaliacaos', column: 'id' }),
    ]),

    idAvfisica: schema.number([
      rules.exists({ table: 'avaliacaos', column: 'id' }),
      rules.unique({ table: 'avaliacaos', column: 'id' }),
    ]),
  })

  
  public messages: CustomMessages = {
    maxLength:'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    minLength:'o maximo de carateres do campo {{field}} e de {{options.minLegth}}',
  }
}
