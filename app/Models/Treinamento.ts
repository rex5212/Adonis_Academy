import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Equipamento from './Equipamento'
import Funcionario from './Funcionario'
import Avaliacao from './Avaliacao'
import Dieta from './Dieta'

export default class Treinamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public equipamentoId: number

  @column()
  public funcionarioId: number

  @column()
  public avaliacaoId: number

  @column()
  public repeticoes: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Equipamento)
  public equipamento: BelongsTo <typeof Equipamento>
  
  @belongsTo(() => Funcionario)
  public funcionario: BelongsTo <typeof Funcionario>

  @belongsTo(() => Avaliacao)
  public avaliacao: BelongsTo <typeof Avaliacao>

  @hasMany(() => Dieta)
  public dietas: HasMany <typeof Dieta>

}




