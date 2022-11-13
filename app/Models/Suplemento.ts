import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Academia from './Academia'
import Funcionario from './Funcionario'

export default class Suplemento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public marca: string

  @column()
  public quantidade: number

  @column()
  public precos: number

  @column()
  public academiaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>Academia)
  public academia: BelongsTo<typeof Academia>

  @hasMany(()=>Funcionario)
  public funcionario: HasMany<typeof Funcionario>
}
