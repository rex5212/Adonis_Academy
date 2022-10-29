import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Treinamento from 'App/Models/Treinamento'

export default class extends BaseSeeder {
  public async run () {
    await Treinamento.createMany([
      {idAcademia: 3, idSuplemento: 1, idEquipamento: 1, idAvaliacao: 1, idFuncionario: 2},
      {idAcademia: 3, idSuplemento: 1, idEquipamento: 2, idAvaliacao: 2, idFuncionario: 1},
      {idAcademia: 3, idSuplemento: 1, idEquipamento: 3, idAvaliacao: 3, idFuncionario: 2},
      {idAcademia: 3, idSuplemento: 1, idEquipamento: 3, idAvaliacao: 4, idFuncionario: 1},
    ])
  }
}
