import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Treinamento from 'App/Models/Treinamento'

export default class extends BaseSeeder {
  public async run () {
    await Treinamento.createMany([
      {equipamentoId: 1, avaliacaoId: 1, funcionarioId: 2, repeticoes: '3 repeticoes de 20 vezes cada'},
      {equipamentoId: 2, avaliacaoId: 2, funcionarioId: 1, repeticoes: '3 repeticoes de 20 vezes cada'},
      {equipamentoId: 3, avaliacaoId: 3, funcionarioId: 2, repeticoes: '3 repeticoes de 20 vezes cada'},
      {equipamentoId: 3, avaliacaoId: 4, funcionarioId: 1, repeticoes: '3 repeticoes de 20 vezes cada'},
    ])
  }
}
