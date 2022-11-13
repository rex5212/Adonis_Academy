import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'avaliacaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('estado_civil', 10)
      table.integer('clientes_id').unsigned().references('id').inTable('clientes').notNullable()
      table.integer('funcionarios_id').unsigned().references('id').inTable('funcionarios')
      table.integer('altura')
      table.integer('peso')
      table.integer('alimentacao')
      table.integer('manias')
      table.integer('vicios')

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
