import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProblemaAvaliacao from 'App/Models/ProblemaAvaliacao'

export default class extends BaseSeeder {
  public async run () {
    await ProblemaAvaliacao.createMany([
      {avaliacaosId: 3, problemasId: 1},
      {avaliacaosId: 4, problemasId: 2}
    ])
  }
}
