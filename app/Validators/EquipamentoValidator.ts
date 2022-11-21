import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class EquipamentoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.alpha({ allow: ["space"] }),
      rules.maxLength(150),
      rules.minLength(5),
    ]),

    codigo: schema.string([rules.alphaNum()]),

    pesoId: schema.number([rules.exists({ table: "pesos", column: "id" })]),

    academiaId: schema.number([
      rules.exists({ table: "academias", column: "id" }),
    ]),
  });

  public messages: CustomMessages = {};
}
