import { route } from "./route.js";

const msg = document.getElementById("msg");
const urlAPI = 'https://brasilapi.com.br/api/cep/v2/'


// Busca pelo endereço do cliente
async function getAddress() {

    try{
        const name = document.getElementById("userName").value.trim();
        const houseNumber = document.getElementById("houseNumber").value.trim();
        const tel = document.getElementById("tel").value.trim();
        const cep = document.getElementById("cep").value.trim();

        // Se os campos estiverem vazios retornam erro
        if(!name || !houseNumber || !tel || !cep) {
            msg.style.color = 'red';
            msg.textContent = 'preencha todos os campos';
            return;
        }

        // Se a requisição der certo chama a função route para enviar os dados para o entregador
        const response = await fetch(urlAPI + cep);
        const status = response.status;

        if(status === 200) {
            const address = await response.json();
            route(name, tel, address.street, houseNumber, address.neighborhood, address.city);

            msg.style.color = '#080300'
            msg.textContent = 'pedido feito com sucesso!'
        }

        else {
            msg.style.color = 'red';
            msg.textContent = 'erro desconhecido';
            return;
        }
    }


    catch(error) {
        console.log(error.message);
    }
};


const request = document.getElementById("send");
const input = document.querySelectorAll('input');

request.addEventListener('click', () => {
        getAddress();
    }
);

input.addEventListener('click', () => {
    msg.textContent = '';
})

