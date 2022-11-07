import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AvPsicologicaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    
    idVicios: schema.number([
      rules.exists({ table: 'av_psicologicas', column: 'id' }),
      rules.unique({ table: 'av_psicologicas', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    maxLength:'o maximo de carateres do campo {{field}} e de {{options.maxLegth}}',
    minLength:'o maximo de carateres do campo {{field}} e de {{options.minLegth}}',
  }
}
