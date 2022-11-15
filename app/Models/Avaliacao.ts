import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Treinamento from './Treinamento'
import Funcionario from './Funcionario'
import Vicio from './Vicio'
import Problema from './Problema'

export default class Avaliacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public clienteId: number
  
  @column()
  public funcionarioId: number

  @column()
  public altura: number

  @column()
  public peso: number

  @column()
  public alimentacao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>
  
  @belongsTo(() => Funcionario)
  public funcionario: BelongsTo<typeof Funcionario>

  @hasMany(() => Treinamento)
  public treinamento: HasMany<typeof Treinamento>

  @manyToMany(() => Vicio, { pivotTable: 'vicios_avaliacaos' })
  public vicios: ManyToMany <typeof Vicio>

  @manyToMany(() => Problema, { pivotTable: 'problema_avaliacaos' })
  public problemas: ManyToMany <typeof Problema>

}
