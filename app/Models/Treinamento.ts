import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Treinamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public equipamentosId: number

  @column()
  public funcionariosId: number

  @column()
  public avaliacaosId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
