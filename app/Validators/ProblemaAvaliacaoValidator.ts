import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProblemaAvaliacaoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    avaliacaoId: schema.number([
      rules.exists({ table: 'avaliacaos', column: 'id'}),
      rules.unsigned()
    ]),
    
    problemaId: schema.number([
      rules.exists({ table: 'problemas', column: 'id'}),
      rules.unsigned()
    ]),

  })


  public messages: CustomMessages = {}
}
