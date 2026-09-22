import { Instalacao } from "../model/Instalacao.js";
import { Manutencao } from "../model/Manutencao.js";
import { Vistoria } from "../model/Vistoria.js";
import { cadastrar, listarTodos, buscarPorIndice, atualizarPorIndice, excluirPorIndice } from "../repository/servicoRepository.js";

export function cadastrarInstalacao(codigo, cliente, descricao, equipamento) {
  cadastrar(new Instalacao(codigo, cliente, descricao, equipamento));
}

export function cadastrarManutencao(codigo, cliente, descricao, defeito) {
  cadastrar(new Manutencao(codigo, cliente, descricao, defeito));
}

export function cadastrarVistoria(codigo, cliente, descricao, local) {
  cadastrar(new Vistoria(codigo, cliente, descricao, local));
}

export function associarTecnico(indice, tecnico) {
  buscarPorIndice(indice).definirTecnico(tecnico);
}

export function iniciarServico(indice) {
  buscarPorIndice(indice).iniciar();
}

export function concluirServico(indice) {
  buscarPorIndice(indice).concluir();
}

export function atualizarInstalacao(indice, codigo, cliente, descricao, equipamento) {
  const antigo = buscarPorIndice(indice);
  const novo = new Instalacao(codigo, cliente, descricao, equipamento);
  if (antigo.tecnico) novo.definirTecnico(antigo.tecnico);
  atualizarPorIndice(indice, novo);
}

export function excluirServico(indice) {
  excluirPorIndice(indice);
}

export function listarServicos() {
  const lista = listarTodos();
  for (let i = 0; i < lista.length; i++) {
    const s = lista[i];
    const nomeTecnico = s.tecnico ? s.tecnico.nome : "nao definido";
    console.log(`${i} - ${s.codigo} - ${s.cliente} - ${s.descricao} - ${s.status} - ${nomeTecnico} - ${s.executar()}`);
  }
}
