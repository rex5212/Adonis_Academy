import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Equipamento from 'App/Models/Equipamento'

export default class extends BaseSeeder {
  public async run () {
    await Equipamento.createMany([
      {nome: "Supino", pesosId: 1, academiasId: 1},
      {nome: "Esteira", pesosId: 1, academiasId: 1},
      {nome: "Barra", pesosId: 1, academiasId: 1},
    ])
  }
}
