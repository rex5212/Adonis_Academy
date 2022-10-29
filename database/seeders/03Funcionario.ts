import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {cpf: 0o046554215, nome: 'Orion Teles',
       sexo: 'M', endereco: 'Qnq 02 conjunto D lote 2', salario: 7500,
        numero: 61987596435, idAcademia: 3},
      {cpf: 0o046554215, nome: 'Guilheme Carvalho',
       sexo: 'M', endereco: 'Qnp 02 conjunto A Apto. 2', salario: 7500,
        numero: 61987596435, idAcademia: 3},
    ])
  }
}
