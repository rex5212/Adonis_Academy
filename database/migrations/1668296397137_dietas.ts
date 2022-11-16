import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'dietas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("funcionario_id").references("id").inTable("funcionarios").notNullable().onDelete('CASCADE')
      table.integer("cliente_id").references("id").inTable("clientes").notNullable().onDelete('CASCADE')
      table.integer("treinamento_id").references("id").inTable("treinamentos").notNullable().onDelete('CASCADE')
      table.string("alimento", 75).notNullable()
      table.integer('quantidade').notNullable()
      table.string("complemento", 55)

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
