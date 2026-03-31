import { useState, useEffect } from "react";
import productsData from "../data/products";
import { Product } from "../types/Product";
import "../../styles/cardapio.css"
import "../../styles/media/mobile.css"
import "../../styles/media/tablet.css"

const Products = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await productsData();
      setData(products);
    };
    fetchData();
  }, []);

  return (
    <main>
      <section>
        <h1>Cardápio</h1>
        <div className="conteiner">
          {data.map((product) => (
            <div className="produto" key={product.id}>
              <div className="card">
                <img src={product.image_url} alt={product.name} />
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