import { route } from "./route";

const urlAPI = 'https://brasilapi.com.br/api/cep/v2/'
let cep = '01001000'

// user informartions
let name;
let houseNumber;
let tel;

async function getAddress() {
    try{
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

                return nota;
                break;
            case 400: 
                 'Todos os campos devem estar completos';
                break;
            case 500:
                return 'Erro no servidor'
                break;
            case 503:
                return 'Serviço fora do ar';
                break;
            default:
                return 'Erro desconhecido';
                break;
        }
    }

    catch(error) {
        console.log(console.log(error))
    }
}

export const nota = await getAddress();