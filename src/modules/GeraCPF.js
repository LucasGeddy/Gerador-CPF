import ValidaCPF from './ValidaCPF';

export default class GeraCPF {    
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geraCPF() {
        const cpfSemDigito = Array.from(this.rand());
        const cpfComDigito1 = ValidaCPF.calculaPrimeiroDigito(cpfSemDigito);
        const cpfComDigito2 = ValidaCPF.calculaSegundoDigito(cpfComDigito1);

        return ValidaCPF.formataArrayToString(cpfComDigito2);
    }
}