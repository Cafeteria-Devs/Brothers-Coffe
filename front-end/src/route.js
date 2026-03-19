export function route(cliente, tel, rua, numeroDaCasa, bairro, cidade, produto) {
    try {
        const address = `${rua}, ${numeroDaCasa} - ${bairro}, ${cidade}`;
        const enderecoCriptografado = encodeURIComponent(endereco);
        
        const linkGoogleMaps =
            `https://www.google.com/maps/dir/?api=1&destination=${enderecoCriptografado}&travelmode=driving`;
        
        const mensagem =
            `Entrega para: ${cliente}\n` +
            `Endereço: ${endereco}\n` +
            `Local de entrega: ${linkGoogleMaps}\n` +
            `Telefone: ${tel}\n` +
            `Pedido: ${produto}`;
        
        const mensagemCriptografada = encodeURIComponent(mensagem);
        const linkWhatsapp =
            `https://wa.me/558196227982?text=${mensagemCriptografada}`;
        
        window.open(linkWhatsapp, "_blank");
        
    } catch (err) {
        console.log(err.message);
    }
}