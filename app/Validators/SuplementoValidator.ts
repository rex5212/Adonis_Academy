import { schema, CustomMessages, rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SuplementoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    nome: schema.string([
      rules.alpha({ allow: ['space'] }), 
      rules.maxLength(45),
      rules.minLength(3)
    ]),

    marca: schema.string([
      rules.alpha({ allow: ['space', 'dash', 'underscore'] }), 
      rules.maxLength(20),
      rules.minLength(1)
    ]),
 
    quantidade: schema.number([
      rules.range(1, 10000)
    ]),

    precos: schema.number([
      rules.range(1, 9999)
    ]),

    academiaId: schema.number([
      rules.exists({table: 'academias', column: 'id'})
    ])

  })


  public messages: CustomMessages = {
    maxLength : 'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    'quantidade.minLength' : 'Não existe estoque negativo coloque uma quantidade entre {{options.quantidade.range}}',
    'preco.minLength' : 'Não existe preço negativo coloque um valor entre {{options.quantidade.range}}',
    exists : 'Essa Academia não existe no sistema',
    alphaNum : 'A Academia que quer referencia e dada em numeros Naturais'
  }
}
