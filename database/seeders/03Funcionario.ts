import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {cpf: "13458193818", nome: 'Orion Teles',
       sexo: 'M', idade: 22, endereco: 'Qnq 02 conjunto D lote 2', salario: 7500,
        numero: '6198569856', academiaId: 1},
      {cpf: "00046554215", nome: 'Marcos Bezerra',
       sexo: 'M', idade: 22, endereco: 'Qnp 02 conjunto A Apto. 2', salario: 10500,
        numero: '6198985741', academiaId: 2},
      {cpf: "00046554215", nome: 'Renato da Silva',
       sexo: 'M', idade: 22, endereco: 'Qnm 30 conjunto O Casa 10', salario: 10500,
        numero: '6199412568', academiaId: 3},
      {cpf: "00046554215", nome: 'Guilheme Boulos',
       sexo: 'M', idade: 22, endereco: 'Sem Endereço', salario: 1299,
        numero: '61902402598', academiaId: 2},
      {cpf: "00046554215", nome: 'Luis Inacio Lula da Silva',
       sexo: 'M', idade: 22, endereco: 'Papuda', salario: 100000,
        numero: '61991778954', academiaId: 1},
    ])
  }
}
