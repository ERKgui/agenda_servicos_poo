const servicos = [];

export function cadastrar(servico) {
  servicos.push(servico);
}

export function listarTodos() {
  return servicos;
}

export function buscarPorIndice(indice) {
  return servicos[indice];
}

export function atualizarPorIndice(indice, novoServico) {
  servicos[indice] = novoServico;
}

export function excluirPorIndice(indice) {
  servicos.splice(indice, 1);
}
