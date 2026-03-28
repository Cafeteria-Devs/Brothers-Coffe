import { Link } from 'react-router-dom';
import '../../styles/elements/header.css';

export function Header() {

  return (
    <header>
      <nav className="nav-bar">
        <div className="mobile-menu" id="mobile-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        
        <div className="nav-logo">
          <Link to="/">
            <img src="/essenciais/logo-sem-fundo.png" alt="Brothers Coffee" />
          </Link>
        </div>

        <ul className="nav-links">
          <div className="user-profile-menu">
            <img src="/essenciais/user-icon.png" alt="Usuário" />
            <div className="user-status">
              <span className="user-name">Convidado</span>
              <div className="user-auth-btns">
                <Link to="/login" className="btn-login">Login</Link>
                <button className="btn-logout" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  Sair
                </button>
              </div>
            </div>
          </div>
          <hr className="menu-divider" />
          
          <li><Link to="/">Início</Link></li>
          <li><Link to="/cardapio">Cardápio</Link></li>
          <li><Link to="/restaurantes">Lojas</Link></li>
          <li><Link to="/contatos">Contato</Link></li>
          <li><Link to="/apoiadores">Clube Coffee</Link></li>
        </ul>

        <div className="nav-actions">
          <Link to="/perfil" id="desktop-user-link" className="desktop-user-link" title="Meu Perfil">
            <img src="/essenciais/user-icon.png" alt="Perfil" />
          </Link>
          <Link to="/comprar" className="nav-carrinho">
            <img src="/essenciais/carrinho.png" alt="Carrinho" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
