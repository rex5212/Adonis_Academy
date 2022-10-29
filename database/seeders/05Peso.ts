import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Peso from 'App/Models/Peso'

export default class extends BaseSeeder {
  public async run () {
    await Peso.createMany([
      {numeracao: 20, modelo: 'ferro'},
      {numeracao: 15, modelo: 'aço'}, 
      {numeracao: 5, modelo: 'borracha'},  
    ])
  }
}
