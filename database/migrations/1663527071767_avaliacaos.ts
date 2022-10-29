import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'avaliacaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('estado_civil', 10)
      table.integer('id_cliente').unsigned().references('id').inTable('clientes').notNullable()
      table.integer('id_avpsicologica').unsigned().references('id').inTable('av_psicologicas')
      table.integer('id_avfisica').unsigned().references('id').inTable('av_fisicas')

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
