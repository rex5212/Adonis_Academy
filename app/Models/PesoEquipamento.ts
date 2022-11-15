import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Peso from './Peso'
import Equipamento from './Equipamento'

export default class PesoEquipamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public pesoId: number

  @column()
  public equipamentoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @belongsTo(() => Peso)
  public Peso: BelongsTo <typeof Peso>
  
  @belongsTo(() => Equipamento)
  public Equipamento: BelongsTo <typeof Equipamento>

}
