// imports
import { route } from "./route";

const msg = document.getElementById("mensagem");


// api requires
const urlAPI = 'https://brasilapi.com.br/api/cep/v2/'


// user informartions
let name = document.getElementById("userName"). value;
let houseNumber = document.getElementById("houseNumber").value;
let tel = document.getElementById("tel").value;


// Endereço do cliente 
async function getAddress() {
    try{
        let cep = document.getElementById("cep").value;

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
                    longitude: address.location.coordinates.longitude,
                    latitude: address.location.coordinates.latitude
                }
                
                let distanciaMenor = Infinity;
                let cafeteriaProxima = null;
                cafeterias.forEach((cafeteria) => {
                    const distancia = calcularDistancia(
                        nota.latitude,
                        nota.longitude,
                        cafeteria.latitude,
                        cafeteria.longitude
                    );
                    
                    if(distancia < distanciaMenor) {
                        distanciaMenor = distancia;
                        cafeteriaProxima = cafeteria.nome;
                    };
                });
                
                msg.textContent = `cafeteria mais próxima: ${cafeteriaProxima} a ${distanciaMenor}km`
                
                route(name, tel, nota.rua, houseNumber, nota.bairro, nota.cidade)
                return nota;
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