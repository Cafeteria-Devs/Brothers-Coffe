import { useEffect, useState } from "react";
import supabase from "../config/supabase";
import productsData from "../data/products";
import { Product } from "../types/Product";
import "../../styles/compras.css";
import "../../styles/media/mobile.css";
import "../../styles/media/tablet.css";

const Comprar = () => {
  const [userName, setUserName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [cep, setCep] = useState("");
  const [tel, setTel] = useState("");
  const [product, setProduct] = useState("");
  const [msg, setMsg] = useState("");
  const isValidCep = (value: string) => /^\d{8}$/.test(value);
  const isValidTel = (value: string) => /^\d{10,11}$/.test(value.replace(/\s+/g, ""));

  const clearForm = () => {
    setUserName("");
    setHouseNumber("");
    setCep("");
    setTel("");
    setProduct("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userName || !houseNumber || !cep || !tel || !product) {
      setMsg("Por favor, preencha todos os campos.");
      return;
    }

    if (!isValidCep(cep)) {
      setMsg("CEP inválido. Use apenas 8 números.");
      return;
    }

    if (!isValidTel(tel)) {
      setMsg("Telefone inválido. Use 10 ou 11 números.");
      return;
    }

    // Encontrar o produto selecionado
    const selectedProduct = data.find(p => p.name === product);
    if (!selectedProduct) {
      setMsg("Produto inválido.");
      return;
    }

    setMsg("Pedido enviado com sucesso! ☕ Obrigado por comprar conosco.");
    clearForm();

    // Salvar o pedido
    saveOrder(selectedProduct.id);
  };

  const saveOrder = async (productId: number) => {
    const session = JSON.parse(sessionStorage.getItem('sb-ionbouabqlgoafeansqh-auth-token'));
    const user = session?.user?.email ?? null;
    if (!user) {
      console.error("Usuário não autenticado");
      return;
    }
    try {
      const { data, error } = await supabase
        .from('logs_pedidos')
        .insert({ user: user, product_id: productId });
      if (error) throw error;
      console.log("Pedido salvo:", data);
    } catch (err) {
      console.error("Erro ao salvar pedido:", err);
      setMsg("Erro ao enviar pedido. Tente novamente.");
    }
  };

    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const products = await productsData();
        setData(products);
      };
      fetchData();
    }, []);

  return (
    <main className="comprar-main">
      <section className="box-compra">
        <h1>Finalizar Pedido</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="userName">Nome</label>
            <input
              type="text"
              id="userName"
              placeholder="Seu nome"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="houseNumber">Número da casa</label>
            <input
              type="text"
              id="houseNumber"
              placeholder="Ex: 123"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              placeholder="Somente números"
              value={cep}
              onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
              maxLength={8}
            />
          </div>

          <div className="campo">
            <label htmlFor="tel">Telefone</label>
            <input
              type="text"
              id="tel"
              placeholder="99 9 9999 9999"
              value={tel}
              onChange={(e) => setTel(e.target.value.replace(/\D/g, ""))}
              maxLength={11}
            />
          </div>

          <div className="campo">
            <label htmlFor="product">Escolha seu Café</label>
            <select
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="" disabled>
                Selecione um produto
              </option>
              {
                data.map((prod) => (
                  <option key={prod.id} value={prod.name}>
                    {prod.name}
                  </option>
                ))
              }
            </select>
          </div>

          <button id="send" type="submit">
            Enviar Pedido
          </button>
          <p id="msg">{msg}</p>
        </form>
      </section>
    </main>
  );
};

export default Comprar;
