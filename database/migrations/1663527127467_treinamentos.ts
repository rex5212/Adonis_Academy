import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'treinamentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_academia').unsigned().references('id').inTable('academias').notNullable()
      table.integer('id_suplemento').unsigned().references('id').inTable('suplementos')
      table.integer('id_equipamento').unsigned().references('id').inTable('equipamentos')
      table.integer('id_funcionario').unsigned().references('id').inTable('funcionarios').notNullable()
      table.integer('id_avaliacao').unsigned().references('id').inTable('avaliacaos')


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
