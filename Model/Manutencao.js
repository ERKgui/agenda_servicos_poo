import { Servico } from "./Model";

export class Manutencao extends Servico {
  constructor(codigo, cliente, descricao, defeito) {
    super(codigo, cliente, descricao);
    this.defeito = defeito;
  }

  executar() {
    return `Analisando e reparando o defeito relatado: ${this.defeito}.`;
  }
}
