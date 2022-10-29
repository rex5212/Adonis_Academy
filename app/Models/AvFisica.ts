import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AvFisica extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fumante: boolean

  @column()
  public altura: number

  @column()
  public peso: number

  @column()
  public pratica: boolean

  @column()
  public idTratamento: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
