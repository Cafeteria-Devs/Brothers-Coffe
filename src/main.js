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
            msg.textContent = 'Preencha todos os campos';
            return;
        }

        const response = await fetch(urlAPI + cep);
        
        if(response.status >= 500 && response.status <= 599) {
            msg.style.color = 'red';
            msg.textContent = 'Serviço indisponível';
            return;
        }
        
        if(response.ok) {
            const address = await response.json();
            
            route(name, tel, address.street, houseNumber, address.neighborhood, address.city, product);

            msg.style.color = 'black';
            msg.textContent = 'Pedido feito com sucesso!';
        } else {
            msg.style.color = 'red';
            msg.textContent = 'Digite um CEP válido';
            return;
        }
    } catch(err) {
        console.log(err.message);
    }
}

const inputs = document.querySelectorAll('input');
const send = document.querySelector('#send');

inputs.forEach(e => {
    e.addEventListener('focus', () => {
        msg.style.color = 'black';
        msg.textContent = '';
    });
});

send.addEventListener('click', () => { getAddress() })