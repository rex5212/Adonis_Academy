import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('cpf', 14).notNullable()
      table.string('nome', 60).notNullable()
      table.string('sexo', 10).notNullable()
      table.integer('idade').notNullable()
      table.string('endereco', 50)
      table.integer('salario').notNullable()
      table.string('numero', 15).notNullable()
      table.integer('academia_id').unsigned().references('id').inTable('academias').notNullable().onDelete('CASCADE')

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
