import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {cpf: "45856545451", nome: 'Renato Ostemberg', sexo: 'M', idade: 21,
       endereco: 'Qnp 09 conjunto H casa 12', numero: '61975378454', estadocivil: 'solteiro'},
      {cpf: "65467554741", nome: 'João Art', sexo: 'M', idade: 22,
       endereco: 'Qnq 02 conjunto D casa 22', numero: '61985493215', estadocivil: 'solteiro'},
      {cpf: "65468233871", nome: 'Marcos Bezerra', sexo: 'M', idade: 29,
       endereco: 'Qnq 05 conjunto H casa 12', numero: '61985445212', estadocivil: 'solteiro'},
      {cpf: "57452687456", nome: 'Walisson', sexo: 'M', idade: 22,
       endereco: 'Qnq 13 conjunto D casa 04', numero: '61955464512', estadocivil: 'solteiro'},
    ])
  }
}
