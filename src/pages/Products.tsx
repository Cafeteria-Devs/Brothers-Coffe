import productsData from "../data/products";
import "../../styles/cardapio.css"
import "../../styles/media/mobile.css"
import "../../styles/media/tablet.css"

const Products = () => {
  return (
    <main>
      <section>
        <h1>Cardápio</h1>
        <div className="conteiner">
          {productsData.map((product) => (
            <div className="produto" key={product.id}>
              <div className="card">
                <img src={product.image} alt={product.alt} />
              </div>
              <div className="nome">
                <h2>{product.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products