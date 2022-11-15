import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Avaliacao from 'App/Models/Avaliacao'

export default class extends BaseSeeder {
  public async run () {
    await Avaliacao.createMany([
      {clientesId: 3, funcionariosId: 1,altura: 1.6, peso: 80, alimentacao: 'alta',},
      {clientesId: 1, funcionariosId: 1,altura: 1.6, peso: 80, alimentacao: 'alta',},
      {clientesId: 2, funcionariosId: 1,altura: 1.6, peso: 80, alimentacao: 'alta',}, 
      {clientesId: 4, funcionariosId: 1,altura: 1.6, peso: 80, alimentacao: 'alta',},
    ])
  }
}
