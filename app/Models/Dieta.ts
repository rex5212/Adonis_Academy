import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Dieta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public funcionariosId: number

  @column()
  public clientesId: number

  @column()
  public treinamentosId: number

  @column()
  public alimento: string

  @column()
  public quantidade: number

  @column()
  public complemento: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
