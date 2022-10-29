import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import AvFisica from 'App/Models/AvFisica'

export default class extends BaseSeeder {
  public async run () {
    await AvFisica.createMany([
      {fumante: false, altura: 1.8, peso: 78.4, pratica: true, idTratamento: 1},
      {fumante: false, altura: 1.6, peso: 78.4, pratica: true, idTratamento: 1},
      {fumante: false, altura: 1.76, peso: 78.4, pratica: true, idTratamento: 1},
      {fumante: false, altura: 1.73, peso: 78.4, pratica: true, idTratamento: 1},
    ])
  }
}
