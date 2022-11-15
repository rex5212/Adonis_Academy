import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Peso from './Peso'
import Academia from './Academia'
import Treinamento from './Treinamento'

export default class Equipamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public codigo: string

  @column()
  public pesoId: number

  @column()
  public academiaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Peso, { pivotTable: 'peso_equipamentos' })
  public pesos: ManyToMany <typeof Peso>

  @belongsTo(() => Academia)
  public academia: BelongsTo <typeof Academia>
  
  @hasMany(() => Treinamento)
  public treinamentos: HasMany <typeof Treinamento>

}
