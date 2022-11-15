import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Vicio from 'App/Models/Vicio'

export default class extends BaseSeeder {
  public async run () {
    await Vicio.createMany([
      {tipo: 'Fumante'},
      {tipo: "Aposta", duracao: '2 anos'}
    ])
  }
}
