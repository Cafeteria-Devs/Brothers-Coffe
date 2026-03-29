import storesData from "../data/store";
import "../../styles/restaurantes.css";
import "../../styles/media/mobile.css";
import "../../styles/media/tablet.css";

const Stores = () => {
  return (
    <main className="lojas">
      <h2>Nossas Lojas</h2>

      {storesData.map((store) => (
        <div className="loja-card" key={store.id}>
          <div className="loja-info">
            <h3>{store.name}</h3>
            <p>
              {store.address}
              <br />
              {store.cityState}
            </p>
          </div>

          <div className="fone">
            <a href={store.phoneLink} target="_blank" rel="noreferrer">
              <span className="material-icons">call</span>
            </a>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Stores;