import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ViciosAvaliacao from 'App/Models/ViciosAvaliacao'

export default class extends BaseSeeder {
  public async run () {
    await ViciosAvaliacao.createMany([
      {avaliacaoId: 1, vicioId: 2},
      {avaliacaoId: 2, vicioId: 1}
    ])
  }
}
