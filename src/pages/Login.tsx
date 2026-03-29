import React, { useState } from 'react';
import loginUser from '../services/login';
import "../../styles/login.css"
import "../../styles/media/mobile.css"
import "../../styles/media/tablet.css"

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await loginUser(email, password);
      
      if (response.success) {
        setMessage(response.data?.user?.email ?? '');
        window.location.href = '/admin/dashboard';
      } else {
        setMessage(response.error || 'Erro ao realizar login.');
      }
    } catch (err) {
      setMessage('Ocorreu um erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-payload">
        <form onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          
          <div className="field">
            <label htmlFor="email">email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required 
            />
          </div>

          <div className="field">
            <label htmlFor="pass">senha</label>
            <input 
              type="password" 
              name="pass" 
              id="pass" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required 
            />
          </div>
          
          <button type="submit" id="send" disabled={loading}>
            {loading ? 'Carregando...' : 'Enviar'}
          </button>

          {message && (
          <p id="msg" className={message.includes('@') ? 'success' : 'error'}>
            {message}
          </p>
        )}
        </form>      
        
      </div>
    </main>
  );
};

export default LoginPage;