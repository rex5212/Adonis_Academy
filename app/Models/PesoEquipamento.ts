import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PesoEquipamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public pesosId: number

  @column()
  public equipamentosId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
