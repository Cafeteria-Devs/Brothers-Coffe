import { Link } from 'react-router-dom';
import '../../styles/elements/footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col logo-col">
          <img src="/essenciais/logo-sem-fundo.png" alt="Brothers Coffee" className="footer-logo" />
          <p>Entre em contato para o desenvolvimento de projetos.</p>
        </div>

        <div className="footer-col">
          <h3>Institucional</h3>
          <Link to="/">Início</Link>
          <Link to="/restaurantes">Lojas</Link>
          <Link to="/contatos">Contato</Link>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <Link to="/cardapio">Cardápio</Link>
          <Link to="/apoiadores">Clube Coffee</Link>
        </div>

        <div className="footer-col">
          <h3>Redes sociais</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com..." target="_blank" rel="noreferrer">
              <img src="/essenciais/logo-insta.png" alt="Instagram" />
            </a>
            <a href="https://github.com..." target="_blank" rel="noreferrer">
              <img src="/essenciais/logo-git-hub.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Projeto desenvolvido inteiramente do zero. Imagens meramente ilustrativas. © 2026</p>
      </div>
    </footer>
  );
}
