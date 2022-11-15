import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Equipamento from 'App/Models/Equipamento'

export default class extends BaseSeeder {
  public async run () {
    await Equipamento.createMany([
      {nome: "Supino",codigo: '0516' ,pesoId: 1, academiaId: 1},
      {nome: "Esteira",codigo: '0354' ,pesoId: 1, academiaId: 1},
      {nome: "Barra",codigo: '1045' ,pesoId: 1, academiaId: 1},
    ])
  }
}
