import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Avaliacao from 'App/Models/Avaliacao'

export default class extends BaseSeeder {
  public async run () {
    await Avaliacao.createMany([
      {estadoCivil: 'Casado', clientesId: 3, altura: 1.6, peso: 80, alimentacao: 'alta', manias: 'tic nervoso', vicios: 'beber'},
      {estadoCivil: 'solteiro', clientesId: 1, altura: 1.6, peso: 80, alimentacao: 'alta', manias: 'tic nervoso', vicios: 'beber'},
      {estadoCivil: 'solteiro', clientesId: 2, altura: 1.6, peso: 80, alimentacao: 'alta', manias: 'tic nervoso', vicios: 'beber'}, 
      {estadoCivil: 'solteiro', clientesId: 4, altura: 1.6, peso: 80, alimentacao: 'alta', manias: 'tic nervoso', vicios: 'beber'},
    ])
  }
}
