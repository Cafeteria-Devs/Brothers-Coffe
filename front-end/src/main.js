import { route } from "./route.js";

const msg = document.getElementById("msg");
const urlAPI = 'https://brasilapi.com.br/api/cep/v2/';

async function getAddress() {
    try {
        const name = document.getElementById("userName").value.trim();
        const houseNumber = document.getElementById("houseNumber").value.trim();
        const tel = document.getElementById("tel").value.trim();
        const cep = document.getElementById("cep").value.trim();
        // CAPTURA O PRODUTO SELECIONADO
        const product = document.getElementById("product").value;

        if(!name || !houseNumber || !tel || !cep || !product) {
            msg.style.color = 'red';
            msg.textContent = 'Preencha todos os campos e escolha seu café';
            return;
        }

        const response = await fetch(urlAPI + cep);
        const status = response.status;

        if(status === 200) {
            const address = await response.json();
            

            route(name, tel, address.street, houseNumber, address.neighborhood, address.city, product);

            msg.style.color = 'black';
            msg.textContent = 'Pedido feito com sucesso!';
        } else {
            msg.style.color = 'red';
            msg.textContent = 'CEP não encontrado ou erro na API';
            return;
        }
    } catch(error) {
        console.log(error.message);
    }
}

const inputs = document.querySelectorAll('input');
const send = document.querySelector('#send');

inputs.forEach(element => {
    element.addEventListener('click', () => {
        msg.style.color = 'black';
        msg.textContent = '';
    });
});

send.addEventListener('click', () => { getAddress() })