import contactData from "../data/contacts";
import "../../styles/contatos.css"
import "../../styles/media/mobile.css"
import "../../styles/media/tablet.css"

const Contacts = () => {
  return (
    <section className="contato-section">
      <h1 className="contato-titulo">Entre em contato</h1>
      <p className="contato-subtitulo">
        Estamos prontos para ouvir você. Fale conosco pelos canais abaixo.
      </p>

      <div className="contato-cards">
        {contactData.map((channel) => (
          <a 
            key={channel.id} 
            href={channel.link} 
            target="_blank" 
            rel="noreferrer"
          >
            <div className="contato-card">
              <img src={channel.icon} alt={channel.alt} />
              <h3>{channel.title}</h3>
              <p>{channel.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contacts;