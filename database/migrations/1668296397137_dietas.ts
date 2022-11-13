import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'dietas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("funcionarios_id").references("id").inTable("funcionarios")
      table.integer("clientes_id").references("id").inTable("clientes")
      table.integer("treinamentos_id").references("id").inTable("treinamentos")
      table.string("alimento")
      table.integer("complemento")

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
