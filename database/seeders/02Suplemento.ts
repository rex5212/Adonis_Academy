import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Suplemento from 'App/Models/Suplemento'

export default class extends BaseSeeder {
  public async run () {
    await Suplemento.createMany([
      {nome: 'Hercules', marca: 'Olimpo', quantidade: 50, precos: 23.99}, 
      {nome: 'Monster', marca: 'Giant', quantidade: 50, precos: 19.99}, 
    ])
  }
}
