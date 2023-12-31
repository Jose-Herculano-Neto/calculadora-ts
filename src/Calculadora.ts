export class Calculadora {
    public somar(num1: number, num2: number): number {
      return num1 + num2;
    }
    public subtrair(num1: number, num2: number): number {
      return num1 - num2;
    }
    public multiplicar(num1: number, num2: number): number {
      return num1 * num2;
    }
    public dividir(num1: number, num2: number): number {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error("Não é divisivel por zero.");
      }
    }
  }
  