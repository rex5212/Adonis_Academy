import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PesoEquipamentoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    pesoId: schema.number([
      rules.exists({ table: 'pesos', column: 'id'}),
      rules.unsigned()
    ]),
    
    equipamentoId: schema.number([
      rules.exists({ table: 'equipamentos', column: 'id'}),
      rules.unsigned()
    ])

  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
