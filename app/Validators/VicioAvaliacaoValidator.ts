import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VicioAvaliacaoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    avaliacaoId: schema.number([
      rules.exists({ table: 'avaliacaos', column: 'id'}),
      rules.unsigned()
    ]),
    
    vicioId: schema.number([
      rules.exists({ table: 'vicios', column: 'id'}),
      rules.unsigned()
    ]),

  })


  public messages: CustomMessages = {}
}
