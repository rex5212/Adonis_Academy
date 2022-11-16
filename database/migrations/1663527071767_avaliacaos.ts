import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'avaliacaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable().onDelete('CASCADE')
      table.integer('funcionario_id').unsigned().references('id').inTable('funcionarios').notNullable().onDelete('CASCADE')
      table.integer('altura').notNullable()
      table.integer('peso').notNullable()
      table.string('alimentacao', 150).notNullable()

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
