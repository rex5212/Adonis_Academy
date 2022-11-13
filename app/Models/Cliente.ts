import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Avaliacao from './Avaliacao'
import Dieta from './Dieta'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cpf: string

  @column()
  public nome: string

  @column()
  public sexo: string

  @column()
  public idade: number

  @column()
  public endereco: string

  @column()
  public numero: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=>Dieta)
  public dieta: HasMany<typeof Dieta>

  @hasMany(()=>Avaliacao)
  public avaliacao: HasMany<typeof Avaliacao>

}
