module.exports = class ValidadorCPF {
    constructor(cpf) {
        this.cpfOriginal = cpf;
    }

    validar() {
        this.cpfCalculado = Array.from(this.cpfOriginal.replace(/\D+/g, ''));
        this.cpfCalculado.splice(9, 2);
        this.cpfCalculado = this.calculaPrimeiroDigito(this.cpfCalculado);
        this.cpfCalculado = this.calculaSegundoDigito(this.cpfCalculado);
        this.cpfCalculado = this.formataArrayToString(this.cpfCalculado);
    }

    get cpfValido() {
        if (this.cpfCalculado === undefined) {
            this.validar();
        }
        return this.cpfCalculado === this.cpfOriginal ? 'válido' : 'inválido';
    }

    report() {
        if (this.cpfCalculado === undefined) {
            this.validar();
        }
        console.log(`Seu cpf ${this.cpfOriginal} é ${this.cpfValido}`);
    }

    static calculaPrimeiroDigito(cpf) {
        let primeiroDigito = 11 - (cpf.reduce((ac, val, index) => ac + (Number(val) * Math.abs(index - 10)), 0) % 11);

        cpf.splice(9, 0,
            primeiroDigito >= 10 ? '0' : primeiroDigito.toString()
        );

        return cpf;
    }

    static calculaSegundoDigito(cpf) {
        let segundoDigito = 11 - (cpf.reduce((ac, val, index) => ac + (Number(val) * Math.abs(index - 11)), 0) % 11);

        cpf.splice(10, 0,
            segundoDigito >= 10 ? '0' : segundoDigito.toString()
        );

        return cpf;
    }

    static formataArrayToString(cpf) {

        cpf.splice(3, 0, '.');
        cpf.splice(7, 0, '.');
        cpf.splice(11, 0, '/');

        return cpf.toString().replaceAll(',', '');
    };
};