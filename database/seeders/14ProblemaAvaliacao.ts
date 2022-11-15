import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProblemaAvaliacao from 'App/Models/ProblemaAvaliacao'

export default class extends BaseSeeder {
  public async run () {
    await ProblemaAvaliacao.createMany([
      {avaliacaoId: 3, problemaId: 1},
      {avaliacaoId: 4, problemaId: 2}
    ])
  }
}
