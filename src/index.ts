import readlineSync from 'readline-sync';
import { Calculadora } from './Calculadora';

const calcular = new Calculadora();

function Menu(): void {
  console.log("Calculadora");
  console.log("1 - Somar");
  console.log("2 - Subtrair");
  console.log("3 - Multiplicar");
  console.log("4 - Dividir");
  console.log("5 - Sair");
}

function getUserChoice(): number {
  return readlineSync.questionInt("Escolha uma opção: ");
}

function operacao(operation: (a: number, b: number) => number): void {
  const a = readlineSync.questionFloat("Digite o primeiro número: ");
  const b = readlineSync.questionFloat("Digite o segundo número: ");
  const result = operation(a, b);
  console.log("Resultado:", result);
}

function usarChoice(choice: number): void {
  switch (choice) {
    case 1:
      operacao(calcular.somar.bind(calcular));
      break;
    case 2:
      operacao(calcular.subtrair.bind(calcular));
      break;
    case 3:
      operacao(calcular.multiplicar.bind(calcular));
      break;
    case 4:
      operacao(calcular.dividir.bind(calcular));
      break;
    case 5:
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida. Por favor, escolha novamente.");
      break;
  }
}

let choice = 0;

while (choice !== 5) {
  Menu();
  choice = getUserChoice();
  usarChoice(choice);
}

console.log("Programa encerrado.");
