import { schema, CustomMessages ,rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TreinamentoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    equipamentoId: schema.number.optional([
      rules.exists({ table: 'equipamentos', column: 'id' }),
    ]),

    funcionarioId: schema.number([
      rules.exists({ table: 'funcionarios', column: 'id' }),
    ]),

    avaliacaoId: schema.number([
      rules.exists({ table: 'avaliacaos', column: 'id' }),
    ]),

    repeticoes: schema.string([
      rules.maxLength(120)
    ])
  })

  public messages: CustomMessages = {}
}
