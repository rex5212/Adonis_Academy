import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cpf: string

  @column()
  public nome: string

  @column()
  public sexo: string

  @column()
  public endereco: string

  @column()
  public salario: number

  @column()
  public numero: number

  @column()
  public academiaId: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
