import Developer from "../types/Developer";

interface DevCardProps {
  dev: Developer;
}

const DevCard = ({ dev }: DevCardProps) => {
  return (
    <div className="perfil-container">
      <div className="inf">
        <h2>{dev.name}</h2>
        <h3>{dev.role}</h3>
        <div className="social-dev">
          {dev.website && (
            <a href={dev.website}><img src="/essenciais/web-dark.png" alt="Site" className="icon" /></a>
          )}
          <a href={dev.whatsapp} target="_blank" rel="noreferrer">
            <img src="/essenciais/zap-dark.png" alt="Whatsapp" className="icon" />
          </a>
        </div>
      </div>
      <div className="habilidades">
        {dev.skills.map((skill, index) => (
          <div className="card-habilidade" key={index}>
            <span>{skill.name}</span>
            <img src={skill.img} alt={skill.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevCard;