import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Problema from 'App/Models/Problema'

export default class extends BaseSeeder {
  public async run () {
    await Problema.createMany([
      {tipo: "Cardio Respiratorio"},
      {tipo: "Trumor na parte do equilibio", duracao: "12 anos"}
    ])
  }
}
