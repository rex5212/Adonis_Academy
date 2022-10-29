import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Avaliacao from 'App/Models/Avaliacao'

export default class extends BaseSeeder {
  public async run () {
    await Avaliacao.createMany([
      {estadoCivil: 'Casado', idCliente: 3, idAvpsicologica: 1, idAvfisica: 1},
      {estadoCivil: 'solteiro', idCliente: 1, idAvpsicologica: 1, idAvfisica: 2},
      {estadoCivil: 'solteiro', idCliente: 2, idAvpsicologica: 1, idAvfisica: 4},
      {estadoCivil: 'solteiro', idCliente: 4, idAvpsicologica: 1, idAvfisica: 3},
    ])
  }
}
