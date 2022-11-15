import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Equipamento from './Equipamento'
import Suplemento from './Suplemento'
import Funcionario from './Funcionario'

export default class Academia extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public endereco: string

  @column()
  public numero: string

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
  
  @hasMany(() => Suplemento)
  public suplemento: HasMany <typeof Suplemento>
  
  @hasMany(() => Equipamento)
  public equipamentos: HasMany <typeof Equipamento>

  @hasMany(() => Funcionario)
  public funcionarios: HasMany <typeof Funcionario>
  
}
