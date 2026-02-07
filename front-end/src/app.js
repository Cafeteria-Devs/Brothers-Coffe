import { route } from "./route.js";

const msg = document.getElementById("mensagem");

// api requires
const urlAPI = 'https://brasilapi.com.br/api/cep/v2/'


// Endereço do cliente 
async function getAddress() {
    try{

        let name = document.getElementById("userName").value.trim();
        let houseNumber = document.getElementById("houseNumber").value.trim();
        let tel = document.getElementById("tel").value.trim();
        let cep = document.getElementById("cep").value.trim();

        const response = await fetch(urlAPI + cep);

        if (!response.ok) throw new Error("Erro na requisição");

        const status = response.status;

        switch (status) {
            case 200:
                const address = await response.json();

                const nota = {
                    rua: address.street,
                    cidade: address.city,
                    casa: houseNumber,
                    telefone: tel,
                    bairro: address.neighborhood,
                }
                

                route(name, tel, nota.rua, houseNumber, nota.bairro, nota.cidade)
                break;
            case 400: 
                throw new Error('Todos os campos devem estar completos');
                break;
            case 500:
                throw new Error('Erro no servidor');
                break;
            case 503:
                throw new Error('Serviço fora do ar');
                break;
            default:
                throw new Error('Erro desconhecido');
                break;
        }
    }

    catch(error) {
        console.log(error.message);
    }
}

const request = document.getElementById("send");

request.addEventListener('click', () => {
        getAddress();
    }
)