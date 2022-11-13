import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Equipamento from './Equipamento'

export default class Peso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public numeracao: number

  @column()
  public modelo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=>Equipamento)
  public equipamento: HasMany<typeof Equipamento>
}
