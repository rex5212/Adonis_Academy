import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cpf: schema.string([
      rules.unique({ table: "funcionarios", column: "cpf" }),
      rules.regex(/^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/),
    ]),

    nome: schema.string([
      rules.alpha({ allow: ["space"] }),
      rules.maxLength(100),
      rules.minLength(3),
    ]),

    sexo: schema.string([
      rules.alpha(),
      rules.maxLength(9),
      rules.minLength(1),
    ]),

    idade: schema.number([rules.range(6, 120), rules.unsigned()]),

    endereco: schema.string.optional([
      rules.maxLength(120),
      rules.minLength(15),
    ]),

    numero: schema.string.optional([
      rules.regex(/^\(?[1-9]{2}\)? ?(9)[0-9]{4}\-?[0-9]{4}$/),
      rules.unique({ table: "funcionarios", column: "numero" }),
    ]),

    salario: schema.number.optional([
      rules.range(1200, 13999),
      rules.unsigned(),
    ]),

    academiaId: schema.number([
      rules.exists({ table: "funcionarios", column: "id" }),
      rules.unsigned(),
    ]),
  });

  public messages: CustomMessages = {
    required: "Os campos são obrigatorios para a criação de funcionario",
    "cpf.unique": "So e possivel ter um cpf vinculado por conta",
    "nome.alpha": "So pode coloca letras no campo nome",
    "numero.unique": "não e possivel cadastra dois numeros iguais nesse banco",
    "sexo.alpha":
      "So pode coloca letras no campo sexo, sendo, Masculino/M ou Feminino/F",
    "idAcademia.exists":
      "A Academia que esta tentando referencia não existe não existe",
  };
}
