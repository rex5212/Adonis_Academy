import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Peso from 'App/Models/Peso'

export default class extends BaseSeeder {
  public async run () {
    await Peso.createMany([
      {codigo: '0452', modelo: 'ferro', peso: 20},
      {codigo: '0684', modelo: 'aço', peso: 10}, 
      {codigo: '1024', modelo: 'borracha', peso: 2.5},  
    ])
  }
}
