import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import AvPsicologica from 'App/Models/AvPsicologica'

export default class extends BaseSeeder {
  public async run () {
    await AvPsicologica.createMany([
      {idVicios: 1},
      {idVicios: 2},
      {idVicios: 3},
    ])
  }
}
