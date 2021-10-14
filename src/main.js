import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function () {
    const gera = new GeraCPF();
    const divCpfGerado = document.querySelector('.cpf-gerado');
    const numCpfGerado = gera.geraCPF();
    divCpfGerado.innerHTML = numCpfGerado;
})()