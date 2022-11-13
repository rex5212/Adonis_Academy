import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Avaliacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public clientesId: number
  
  @column()
  public funcionariosId: number
  
  @column()
  public estadoCivil: string

  @column()
  public altura: number

  @column()
  public peso: number

  @column()
  public alimentacao: string

  @column()
  public manias: string

  @column()
  public vicios: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
