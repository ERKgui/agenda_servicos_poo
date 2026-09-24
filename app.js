import { Tecnico } from "./model/Tecnico.js";
import { 
  cadastrarInstalacao, 
  cadastrarManutencao, 
  cadastrarVistoria, 
  associarTecnico, 
  iniciarServico, 
  concluirServico, 
  atualizarInstalacao, 
  excluirServico, 
  listarServicos 
} from "./controller/servicoController.js";

const t1 = new Tecnico("Carlos", "Eletrica");
const t2 = new Tecnico("Ana", "Mecanica");

cadastrarInstalacao("INS01", "ACME", "Instalar Ar", "Chiller");
cadastrarManutencao("MAN02", "Express", "Esteira parou", "Motor");
cadastrarVistoria("VIS03", "Sol", "Vistoria elevador", "Bloco A");

associarTecnico(0, t1);
associarTecnico(2, t1);
associarTecnico(1, t2);

listarServicos();

console.log("--> Iniciando o servico 0 <--")
iniciarServico(0);
listarServicos();

console.log("--> Concluindo o servico 1 <--")
concluirServico(1);
listarServicos();

console.log("--> Atualizando a instalacao 0 <--")
atualizarInstalacao(0, "INS01-REV", "ACME Nova", "Instalar Novo Ar", "Chiller X2");
listarServicos();

console.log("--> Excluindo o servico 2 <--")
excluirServico(2);
listarServicos();

console.log("--> Cadastrando Vistoria <--")
cadastrarVistoria("VIS04", "Shopping", "Incendio", "Praca");
associarTecnico(2, t1);

console.log("------------------------------------------------------------------------------------------------------------------------------");
console.log("------------------------------------------------------------------------------------------------------------------------------");
listarServicos();
