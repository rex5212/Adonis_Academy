import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PesoEquipamento from 'App/Models/PesoEquipamento'

export default class extends BaseSeeder {
  public async run () {
    await PesoEquipamento.createMany([
      {pesoId: 1, equipamentoId:2},
      {pesoId: 2, equipamentoId:2},
      {pesoId: 3, equipamentoId:1},
    ])
  }
}
