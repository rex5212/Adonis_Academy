import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Funcionario from './Funcionario'
import Treinamento from './Treinamento'
import Cliente from './Cliente'

export default class Dieta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public funcionariosId: number

  @column()
  public clientesId: number

  @column()
  public treinamentosId: number

  @column()
  public alimento: string

  @column()
  public quantidade: number

  @column()
  public complemento: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Funcionario)
  public funcionario: BelongsTo <typeof Funcionario>
  
  @belongsTo(() => Treinamento)
  public treinamento: BelongsTo <typeof Treinamento>
  
  @belongsTo(() => Cliente)
  public cliente: BelongsTo <typeof Cliente>

}
