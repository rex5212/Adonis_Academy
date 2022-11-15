import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Dieta from 'App/Models/Dieta'

export default class extends BaseSeeder {
  public async run () {
    await Dieta.createMany([
      {funcionariosId: 1, clientesId: 1, treinamentosId: 1, alimento: 'Batata-doce em pouca quantidade + feijão', quantidade: 4, complemento: 'suco de laranja'},
      {funcionariosId: 2, clientesId: 1, treinamentosId: 2, alimento: 'Alface e tomate', quantidade: 4, complemento: 'Pepino'},
      {funcionariosId: 3, clientesId: 1, treinamentosId: 3, alimento: 'Carne-de-sol', quantidade: 4, complemento: 'Farofa'},
    ])
  }
}
