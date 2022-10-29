import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Treinamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public idAcademia: number

  @column()
  public idSuplemento: number

  @column()
  public idEquipamento: number

  @column()
  public idFuncionario: number

  @column()
  public idAvaliacao: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
