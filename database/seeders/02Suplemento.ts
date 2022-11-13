import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Suplemento from 'App/Models/Suplemento'

export default class extends BaseSeeder {
  public async run () {
    await Suplemento.createMany([
      {nome: 'Hercules', marca: 'Olimpo', quantidade: 50, precos: 23.99, academiaId: 1}, 
      {nome: 'Monster', marca: 'Giant', quantidade: 50, precos: 19.99, academiaId: 1}, 
      {nome: 'Universal', marca: 'Universal', quantidade: 100, precos: 189.90, academiaId: 1}, 
      {nome: 'Unimedical', marca: 'IntegralMedica', quantidade: 15, precos: 120, academiaId: 1}, 
      {nome: 'ETguro', marca: 'Toguro', quantidade: 10, precos: 89.90, academiaId: 1}, 
    ])
  }
}
