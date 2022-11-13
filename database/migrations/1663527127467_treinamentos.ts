import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'treinamentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('equipamentos_id').unsigned().references('id').inTable('equipamentos')
      table.integer('funcionarios_id').unsigned().references('id').inTable('funcionarios').notNullable()
      table.integer('avaliacaos_id').unsigned().references('id').inTable('avaliacaos').notNullable()
      table.string('repeticoes', 40).notNullable()


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
