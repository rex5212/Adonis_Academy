import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Academia extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public endereco: string

  @column()
  public numero: number

  @column()
  public nome: string

  @column()
  public horarioinit: string

  @column()
  public horarioend: string
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
