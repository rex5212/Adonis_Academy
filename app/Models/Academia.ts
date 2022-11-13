import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Equipamento from './Equipamento'
import Suplemento from './Suplemento'
import Funcionario from './Funcionario'

export default class Academia extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public endereco: string

  @column()
  public numero: number

  @column()
  public nome: string

  @column()
  public horarioinit: string

  @column()
  public horarioend: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @hasMany(()=>Equipamento)
  public equipamento: HasMany<typeof Equipamento>
  
  @belongsTo(()=>Suplemento)
  public suplemento: BelongsTo<typeof Suplemento>

  @hasMany(()=>Funcionario)
  public funcionario: HasMany<typeof Funcionario>
}
