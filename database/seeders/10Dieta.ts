import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Dieta from 'App/Models/Dieta'

export default class extends BaseSeeder {
  public async run () {
    await Dieta.createMany([
      {funcionarioId: 1, clienteId: 1, treinamentoId: 1, alimento: 'Batata-doce em pouca quantidade + feijão', quantidade: 4, complemento: 'suco de laranja'},
      {funcionarioId: 2, clienteId: 1, treinamentoId: 2, alimento: 'Alface e tomate', quantidade: 4, complemento: 'Pepino'},
      {funcionarioId: 3, clienteId: 1, treinamentoId: 3, alimento: 'Carne-de-sol', quantidade: 4, complemento: 'Farofa'},
    ])
  }
}
