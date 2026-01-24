import getAddress from './app' 

export async function route(nome, tel,  rua, numeroDaCasa, bairro, cidade) {
    try {
        if(rua && numeroDaCasa && bairro && cidade && tel && nome) {
            const endereco = `${rua}, ${numero da casa} - ${bairro}, ${cidade}`;
            const enderecoCriptografado = encodeURIComponent(endereco);

            const linkGoogleMaps = `https://www.google.com/maps/dir/?api=1&destination=${enderecoCriptografado}&travelmode=driving`;

            const mensagem = `
            Entrega para: ${nome}
            Endereço: ${endereco}
            Local de entrega: ${linkGoogleMaps}
            Telefone: ${tel}
            `;
            const telefoneEntregador = '558196227982'
            const mensagemCriptografada = encodeURIComponent(mensagem);
             
        };
        
        else {
            return 'preencha as informações'
        };
    };

    catch(error) {
        console.log(error)
    };

};