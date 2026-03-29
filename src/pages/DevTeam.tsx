import React from 'react';
import DevCard from "../components/DevCard";
import developersData from "../data/developers";
import '../../styles/clubcoffee.css';
import '../../styles/media/mobile.css';
import '../../styles/media/tablet.css';
const DevTeam = () => {
  return (
    <main>
      <section id="devs">
        <h1 className="titulo-habilidades">Equipe de Desenvolvimento</h1>
        
        {developersData.map((dev, index) => (
          <React.Fragment key={dev.id}>
            <DevCard dev={dev} />
            {index < developersData.length - 1 && <hr className="divisor" />}
          </React.Fragment>
        ))}
      </section>
    </main>
  );
};

export default DevTeam;