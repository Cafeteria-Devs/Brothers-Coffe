import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../../styles/elements/header.css';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (mobileOpen || userModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }

    return () => {
      document.body.style.overflow = 'initial';
    };
  }, [mobileOpen, userModalOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setUserModalOpen(false);
  }, [location]);

  const handleNavToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeNav = () => {
    setMobileOpen(false);
  };

  const openUserModal = (event: React.MouseEvent) => {
    event.preventDefault();
    setUserModalOpen(true);
  };

  const closeUserModal = () => {
    setUserModalOpen(false);
  };

  const handleLogout = () => {
    setUserModalOpen(false);
    alert('Você saiu (simulação). Redirecionando para página de login.');
    navigate('/login');
  };

  return (
    <header>
      <nav className="nav-bar">
        <div
          className={`mobile-menu ${mobileOpen ? 'toggle' : ''}`}
          id="mobile-menu"
          onClick={handleNavToggle}
          aria-label="Alternar menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleNavToggle(); }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className="nav-logo">
          <Link to="/">
            <img src="/essenciais/logo-sem-fundo.png" alt="Brothers Coffee" />
          </Link>
        </div>

        <ul className={`nav-links ${mobileOpen ? 'active' : ''}`}>
          <div className="user-profile-menu">
            <img src="/essenciais/user-icon.png" alt="Usuário" />
            <div className="user-status">
              <span className="user-name">Convidado</span>
              <div className="user-auth-btns">
                <Link to="/login" className="btn-login" onClick={closeNav}>Login</Link>
                <button className="btn-logout" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleLogout}>
                  Sair
                </button>
              </div>
            </div>
          </div>
          <hr className="menu-divider" />
          
          <li><Link to="/" onClick={closeNav}>Início</Link></li>
          <li><Link to="/cardapio" onClick={closeNav}>Cardápio</Link></li>
          <li><Link to="/restaurantes" onClick={closeNav}>Lojas</Link></li>
          <li><Link to="/contatos" onClick={closeNav}>Contato</Link></li>
          <li><Link to="/apoiadores" onClick={closeNav}>Clube Coffee</Link></li>
        </ul>

        <div className="nav-actions">
          <Link to="/perfil" id="desktop-user-link" className="desktop-user-link" title="Meu Perfil" onClick={(e) => { e.preventDefault(); openUserModal(e); }}>
            <img src="/essenciais/user-icon.png" alt="Perfil" />
          </Link>
          <Link to="/comprar" className="nav-carrinho">
            <img src="/essenciais/carrinho.png" alt="Carrinho" />
          </Link>
        </div>
      </nav>

      {userModalOpen && (
        <div
          id="desktop-user-modal"
          className="desktop-user-modal active"
          aria-hidden="false"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeUserModal();
          }}
        >
          <div className="desktop-user-modal-content">
            <button id="desktop-user-modal-close" className="desktop-user-modal-close" aria-label="Fechar" onClick={closeUserModal}>
              ×
            </button>
            <h3 id="desktop-user-modal-title">Minha Conta</h3>
            <a href="/login" className="desktop-user-modal-btn" onClick={(e) => { e.preventDefault(); closeUserModal(); navigate('/login'); }}>
              Login
            </a>
            <button id="desktop-user-logout" className="desktop-user-modal-btn" onClick={handleLogout}>
              Sair
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
