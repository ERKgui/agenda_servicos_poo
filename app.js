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

iniciarServico(0);
concluirServico(1);

atualizarInstalacao(0, "INS01-REV", "ACME Nova", "Instalar Novo Ar", "Chiller X2");

excluirServico(2);

cadastrarVistoria("VIS04", "Shopping", "Incendio", "Praca");
associarTecnico(2, t1);

console.log("---------------------");
listarServicos();
