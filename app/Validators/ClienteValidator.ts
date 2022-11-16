import { schema, CustomMessages,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({

  nome: schema.string([
    rules.alpha({ allow: ['space'] }), 
    rules.maxLength(100),
    rules.minLength(3)
  ]),

  cpf: schema.string([
    rules.unique({ table: 'clientes', column: 'cpf' }),
    rules.regex(/^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/),
  ]),

  sexo: schema.string.optional([
    rules.alpha(), 
    rules.maxLength(10),
    rules.minLength(1)
  ]),

  idade: schema.number([
    rules.range(6, 120),
    rules.unsigned()
  ]),

  endereco: schema.string.optional([
    rules.maxLength(120),
    rules.minLength(15)  
  ]),

  numero: schema.string([ 
    rules.regex(/^\(?[1-9]{2}\)? ?|[0-9]{5}\-?[0-9]{4}$/),
    rules.unique({table:'clientes', column:'numero'}),
  ]),

  estadocivil: schema.string([
    rules.alpha(),
    rules.maxLength(12),
    rules.minLength(5)
  ])


  })

  public messages: CustomMessages = {
    required : 'Os campos são obrigatorios para a criação do cliente', 
    minLength:'o maximo de carateres do campo {{field}} e de {{options.minLegth}}',
    'cpf.regex' : 'O cpf so aceita numeros, podendo se no formato 000.000.000-00 ou 00000000000',
    'numero.regex' : 'O numero so aceita numero e alguns caracteres especial, sendo o formato, (00) 00000-0000 ou 00000-0000'
  }
}
