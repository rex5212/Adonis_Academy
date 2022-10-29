import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tratamento from 'App/Models/Tratamento'

export default class extends BaseSeeder {
  public async run () {
    await Tratamento.createMany([
      {tipo: '', duracao: 0},
      {tipo: 'Osseo', duracao: 1},
    ])
  }
}
