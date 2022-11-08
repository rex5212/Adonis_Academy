import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('cpf').notNullable().unsigned()
      table.string('nome', 60).notNullable()
      table.string('sexo', 1)
      table.string('endereco', 50)
      table.integer('salario').notNullable()
      table.string('numero')
      table.integer('id_academia').unsigned().references('id').inTable('academias').notNullable()

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
