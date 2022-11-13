import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Treinamento from 'App/Models/Treinamento'

export default class extends BaseSeeder {
  public async run () {
    await Treinamento.createMany([
      {equipamentosId: 1, avaliacaosId: 1, funcionariosId: 2},
      {equipamentosId: 2, avaliacaosId: 2, funcionariosId: 1},
      {equipamentosId: 3, avaliacaosId: 3, funcionariosId: 2},
      {equipamentosId: 3, avaliacaosId: 4, funcionariosId: 1},
    ])
  }
}
