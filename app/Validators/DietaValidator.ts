import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class DietaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    funcionarioId: schema.number([
      rules.exists({ table: "funcionarios", column: "id" }),
    ]),

    clienteId: schema.number([
      rules.exists({ table: "clientes", column: "id" }),
    ]),

    treinamentoId: schema.number([
      rules.exists({ table: "treinamentos", column: "id" }),
    ]),

    alimento: schema.string([rules.maxLength(10000)]),

    quantidade: schema.number([rules.unsigned()]),

    complemento: schema.string([rules.maxLength(1000)]),
  });

  public messages: CustomMessages = {};
}
