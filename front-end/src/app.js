// imports
import { route } from "./route";
import { cafeterias } from "./cep.json"

function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // raio da Terra em KM
    
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    return R * c; // distância em KM
}
const msg = document.getElementById("mensagem")


// api requires
const urlAPI = 'https://brasilapi.com.br/api/cep/v2/'


// user informartions
let name = 'Rosa'
let houseNumber = '291'
let tel = '(81) 9 8967-2044'


// Endereço do cliente 
async function getAddress() {
    try{
        let cep = document.getElementById("icep").value;

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
        return msg.textContent = error;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        getAddress();
    });
});