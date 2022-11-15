import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Vicio from './Vicio'
import Avaliacao from './Avaliacao'

export default class ViciosAvaliacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public avaliacaoId: number

  @column()
  public vicioId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @belongsTo(() => Vicio)
  public vicio: BelongsTo <typeof Vicio>
  
  @belongsTo(() => Avaliacao)
  public avaliacao: BelongsTo <typeof Avaliacao>

}
