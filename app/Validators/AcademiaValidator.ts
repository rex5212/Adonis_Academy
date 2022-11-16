import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AcademiaValidator {
  constructor(protected ctx: HttpContextContract) {}
  

  public schema = schema.create({
    nome: schema.string([
      rules.alpha({allow: ['space', 'dash', 'underscore']}),
      rules.maxLength(60),
      rules.unique({ table: 'academias', column: 'nome'})
    ]),

    endereco: schema.string([rules.maxLength(80)]),

    numero: schema.string.optional([
      rules.regex(/^\(?[1-9]{2}\)? ?(9)[0-9]{4}\-?[0-9]{4}$/),
      rules.minLength(9),
      rules.maxLength(15),
      rules.unique({table:'academias', column:'numero'}),
    ]),

    horarioinit: schema.string([
      rules.maxLength(19),
      rules.minLength(1)
    ]),

    horarioend: schema.string([
      rules.maxLength(19),
      rules.minLength(1)
    ])

  })

  public messages: CustomMessages = {
    maxLength : 'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    mixLength : 'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    'numero.minLength' : 'o minimo de carateres de {{field}} e de {{options.minLegth}}',
    'numero.maxLength' : 'Voce colocou mais {{field}} que o permitido {{options.maxLegth}}',
    required : 'Os campos são obrigatorios para a criação da Academia' 
  }
}
