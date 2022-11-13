import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Peso from './Peso'
import Academia from './Academia'
import Treinamento from './Treinamento'

export default class Equipamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public pesosId: number

  @column()
  public academiasId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>Peso)
  public peso: BelongsTo<typeof Peso>

  @belongsTo(()=>Academia)
  public academia: BelongsTo<typeof Academia>
  
  @hasMany(()=>Treinamento)
  public treinamento: HasMany<typeof Treinamento>
}
