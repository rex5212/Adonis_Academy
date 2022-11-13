import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Treinamento from './Treinamento'
import Funcionario from './Funcionario'

export default class Avaliacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public estadoCivil: string

  @column()
  public idCliente: number

  @column()
  public idAvpsicologica: number

  @column()
  public idAvfisica: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @hasMany(()=>Treinamento)
  public treinamento: HasMany<typeof Treinamento>

  @belongsTo(()=>Funcionario)
  public funcionario: BelongsTo<typeof Funcionario>
}
