import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Equipamento from 'App/Models/Equipamento'

export default class extends BaseSeeder {
  public async run () {
    await Equipamento.createMany([
      {nome: "Levantamento de peso", idPesos: 1},
      {nome: "esteira", idPesos: 1},
      {nome: "Barra", idPesos: 1},
    ])
  }
}
