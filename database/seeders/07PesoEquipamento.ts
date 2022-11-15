import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PesoEquipamento from 'App/Models/PesoEquipamento'

export default class extends BaseSeeder {
  public async run () {
    await PesoEquipamento.createMany([
      {pesosId: 1, equipamentosId:2},
      {pesosId: 2, equipamentosId:2},
      {pesosId: 3, equipamentosId:1},
    ])
  }
}
