import { Link } from 'react-router-dom';
import '../../styles/style.css';

export default function Home() {
  return (
    <main>
      <section id="img">
        <div className="text-content">
          <h1>Café de verdade<br />para quem entende</h1>
          <p>Grãos selecionados, torra perfeita e sabor marcante.</p>
          <a href="#img2" className="btn-scroll">
            Confira mais
            <span> ↓</span>
          </a>
        </div>
      </section>

      <section id="img2">
        <div className="text-content">
          <h1>Promoções imperdíveis!</h1>
          <p>
            Veja o <Link id="pp" to="/cardapio">cardápio</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
