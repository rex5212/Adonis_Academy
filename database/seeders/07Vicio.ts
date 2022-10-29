import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Vicio from 'App/Models/Vicio'

export default class extends BaseSeeder {
  public async run () {
    await Vicio.createMany([
      {tipo: '', duracao: 0},
      {tipo: 'Fumante', duracao: 1},
      {tipo: 'Alcoólico', duracao: 1},
    ])
  }
}
