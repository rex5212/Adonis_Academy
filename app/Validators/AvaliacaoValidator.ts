import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AvaliacaoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({

    clienteId: schema.number([
      rules.exists({ table: 'clientes', column: 'id' }),
      rules.unsigned()
    ]),

    funcionarioId: schema.number([
      rules.exists({ table: 'funcionarios', column: 'id' }),
      rules.unsigned()
    ]),

    altura: schema.number([
      rules.unsigned(),
      rules.range(1.15, 2.85)
    ]),

    peso: schema.number([
      rules.range(22.5, 150)
    ]),

    alimentacao: schema.string([
      rules.maxLength(150)
    ])

  })

  
  public messages: CustomMessages = {}
}
