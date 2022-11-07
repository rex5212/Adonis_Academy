import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    nome: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(100)]),

    cpf: schema.string.optional([
      rules.unique({ table: 'funcionarios', column: 'id' }),
      rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
    ]),

    sexo: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(1)]),

    idade: schema.number.optional([rules.range(1, 100)]),

    endereco: schema.string([rules.alpha({allow:['space']}),rules.maxLength(120)]),

    numero: schema.string.optional([
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9]){3}\-?[0-9]{4}$/),
      rules.mobile({locale:['pt-BR']}),
      rules.unique({table:'funcionarios', column:'numero'}),
      ]),

      idAcademia: schema.number([
        rules.exists({ table: 'funcionarios', column: 'id' }),
        rules.unique({ table: 'funcionarios', column: 'id' }),
    ]),

    Salario: schema.number.optional([rules.range(1, 100000)]),

  })


  public messages: CustomMessages = {
    maxLength:'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    minLength:'o maximo de carateres do campo {{field}} e de {{options.minLegth}}',
  }
}
