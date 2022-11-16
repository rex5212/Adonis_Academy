import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Academia from './Academia'
import Dieta from './Dieta'
import Treinamento from './Treinamento'
import Avaliacao from './Avaliacao'

export default class Funcionario extends BaseModel {
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
  public salario: number

  @column()
  public numero: string

  @column()
  public academiaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @belongsTo(() => Academia)
  public academia: BelongsTo <typeof Academia>
  
  @hasMany(() => Dieta)
  public dietas: HasMany <typeof Dieta>
  
  @hasMany(() => Treinamento)
  public treinamentos: HasMany <typeof Treinamento>
  
  @hasMany(() => Avaliacao)
  public avaliacoes: HasMany <typeof Avaliacao>
  
}
