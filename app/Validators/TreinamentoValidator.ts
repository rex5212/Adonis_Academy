import { schema, CustomMessages ,rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TreinamentoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({

    idAcademia: schema.number([
      rules.exists({ table: 'treinamentos', column: 'id' }),
      rules.unique({ table: 'treinamentos', column: 'id' }),
  ]),

  idSuplemento: schema.number([
    rules.exists({ table: 'treinamentos', column: 'id' }),
    rules.unique({ table: 'treinamentos', column: 'id' }),
]),

idEquipamento: schema.number([
  rules.exists({ table: 'treinamentos', column: 'id' }),
  rules.unique({ table: 'treinamentos', column: 'id' }),
]),

idFuncionario: schema.number([
  rules.exists({ table: 'treinamentos', column: 'id' }),
  rules.unique({ table: 'treinamentos', column: 'id' }),
]),

idAvaliacao: schema.number([
  rules.exists({ table: 'treinamentos', column: 'id' }),
  rules.unique({ table: 'treinamentos', column: 'id' }),
]),
  })

  public messages: CustomMessages = {
    maxLength:'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    minLength:'o maximo de carateres do campo {{field}} e de {{options.minLegth}}',
  }
}
