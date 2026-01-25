export function route(cliente, tel, rua, numeroDaCasa, bairro, cidade) {
    try {
        const msg = document.getElementById("mensagem");
        
        if (!rua || !numeroDaCasa || !bairro || !cidade || !tel || !cliente) {
            msg.textContent = "preencha as informações";
            return;
        }
        
        const endereco = `${rua}, ${numeroDaCasa} - ${bairro}, ${cidade}`;
        const enderecoCriptografado = encodeURIComponent(endereco);
        
        const linkGoogleMaps =
            `https://www.google.com/maps/dir/?api=1&destination=${enderecoCriptografado}&travelmode=driving`;
        
        const mensagem =
            `Entrega para: ${cliente}\n` +
            `Endereço: ${endereco}\n` +
            `Local de entrega: ${linkGoogleMaps}\n` +
            `Telefone: ${tel}`;
        
        const mensagemCriptografada = encodeURIComponent(mensagem);
        const linkWhatsapp =
            `https://wa.me/558196227982?text=${mensagemCriptografada}`;
        
        window.open(linkWhatsapp, "_blank");
        
    } catch (error) {
        console.log(error);
    }
}