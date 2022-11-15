import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Avaliacao from 'App/Models/Avaliacao'

export default class extends BaseSeeder {
  public async run () {
    await Avaliacao.createMany([
      {clienteId: 3, funcionarioId: 1,altura: 1.6, peso: 80, alimentacao: 'alta',},
      {clienteId: 1, funcionarioId: 1,altura: 1.6, peso: 80, alimentacao: 'alta',},
      {clienteId: 2, funcionarioId: 1,altura: 1.6, peso: 80, alimentacao: 'alta',}, 
      {clienteId: 4, funcionarioId: 1,altura: 1.6, peso: 80, alimentacao: 'alta',},
    ])
  }
}
