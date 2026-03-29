import React, { useState } from 'react';
import '../../styles/dashboard.css';
import '../../styles/media/mobile.css';
import '../../styles/media/tablet.css';
import config from '../config/config.js';
import { createClient } from '@supabase/supabase-js';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Vendas', value: 'R$ 2.540', change: '+12%', icon: '📈' },
    { label: 'Pedidos', value: '34', change: '+5', icon: '🛒' },
    { label: 'Clientes', value: '1.203', change: '+8%', icon: '👥' },
    { label: 'Nota', value: '4.8/5', change: '+0.2', icon: '⭐' },
  ];

  const recentOrders = [
    { id: '#001', client: 'João Silva', product: 'Espresso + Capuccino', value: 'R$ 28,00', status: 'entregue' },
    { id: '#002', client: 'Maria Santos', product: 'Café Coado', value: 'R$ 12,50', status: 'processando' },
    { id: '#003', client: 'Pedro Costa', product: 'Combo Manhã', value: 'R$ 45,00', status: 'entregue' },
    { id: '#004', client: 'Ana Oliveira', product: 'Mocaccino', value: 'R$ 18,00', status: 'preparando' },
  ];

  const topProducts = [
    { name: 'Espresso Duplo', sales: 245, revenue: 'R$ 1.470' },
    { name: 'Capuccino', sales: 189, revenue: 'R$ 945' },
    { name: 'Café Coado', sales: 156, revenue: 'R$ 780' },
    { name: 'Mocaccino', sales: 112, revenue: 'R$ 672' },
  ];

  return (
    <main className="admin-dashboard">
      <div className="admin-intro">
        <div>
          <h1>Painel Administrativo</h1>
          <p>Bem-vindo ao controle administrativo</p>
        </div>
        <time className="admin-date">
          {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      </div>

      <div className="admin-nav">
        <button className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
          📊 Visão Geral
        </button>
        <button className={`nav-tab ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
          📦 Pedidos
        </button>
        <button className={`nav-tab ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>
          ☕ Produtos
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="tab-panel">
          <section className="metrics">
            {stats.map((stat, idx) => (
              <div key={idx} className="metric">
                <span className="metric-icon">{stat.icon}</span>
                <div className="metric-data">
                  <h3>{stat.label}</h3>
                  <p className="metric-value">{stat.value}</p>
                  <small className="metric-trend">{stat.change}</small>
                </div>
              </div>
            ))}
          </section>

          <div className="main-grid">
            <section className="panel chart-panel">
              <h2>Vendas da Semana</h2>
              <div className="chart-container">
                <div className="bars">
                  <div className="bar-item" style={{ height: '40%' }}>
                    <span className="bar-label">Seg</span>
                  </div>
                  <div className="bar-item" style={{ height: '65%' }}>
                    <span className="bar-label">Ter</span>
                  </div>
                  <div className="bar-item" style={{ height: '55%' }}>
                    <span className="bar-label">Qua</span>
                  </div>
                  <div className="bar-item" style={{ height: '85%' }}>
                    <span className="bar-label">Qui</span>
                  </div>
                  <div className="bar-item" style={{ height: '70%' }}>
                    <span className="bar-label">Sex</span>
                  </div>
                  <div className="bar-item" style={{ height: '45%' }}>
                    <span className="bar-label">Sab</span>
                  </div>
                  <div className="bar-item" style={{ height: '30%' }}>
                    <span className="bar-label">Dom</span>
                  </div>
                </div>
              </div>
              <p className="chart-footer">Total da semana: R$ 10.850</p>
            </section>

            <section className="panel revenue-panel">
              <h2>Receita por Categoria</h2>
              <div className="revenue-list">
                <div className="revenue-item">
                  <div className="revenue-header">
                    <span>Bebidas Quentes</span>
                    <strong>R$ 6.200</strong>
                  </div>
                  <div className="revenue-bar">
                    <div className="revenue-fill" style={{ width: '64%' }}></div>
                  </div>
                </div>
                <div className="revenue-item">
                  <div className="revenue-header">
                    <span>Bebidas Geladas</span>
                    <strong>R$ 2.100</strong>
                  </div>
                  <div className="revenue-bar">
                    <div className="revenue-fill" style={{ width: '22%' }}></div>
                  </div>
                </div>
                <div className="revenue-item">
                  <div className="revenue-header">
                    <span>Acompanhamentos</span>
                    <strong>R$ 1.850</strong>
                  </div>
                  <div className="revenue-bar">
                    <div className="revenue-fill" style={{ width: '19%' }}></div>
                  </div>
                </div>
                <div className="revenue-item">
                  <div className="revenue-header">
                    <span>Grãos para Casa</span>
                    <strong>R$ 700</strong>
                  </div>
                  <div className="revenue-bar">
                    <div className="revenue-fill" style={{ width: '7%' }}></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="tab-panel">
          <section className="panel">
            <h2>Pedidos Recentes</h2>
            <div className="data-table">
              <div className="thead">
                <div className="th">ID</div>
                <div className="th">Cliente</div>
                <div className="th">Produto</div>
                <div className="th">Valor</div>
                <div className="th">Status</div>
              </div>
              <div className="tbody">
                {recentOrders.map((order, idx) => (
                  <div key={idx} className="tr">
                    <div className="td col-id">{order.id}</div>
                    <div className="td">{order.client}</div>
                    <div className="td">{order.product}</div>
                    <div className="td">{order.value}</div>
                    <div className="td">
                      <span className={`badge badge-${order.status}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'products' && (
        <div className="tab-panel">
          <section className="panel">
            <h2>Produtos em Destaque</h2>
            <div className="data-table">
              <div className="thead">
                <div className="th">Produto</div>
                <div className="th">Vendas</div>
                <div className="th">Receita</div>
              </div>
              <div className="tbody">
                {topProducts.map((product, idx) => (
                  <div key={idx} className="tr">
                    <div className="td">
                      <span className="product-name">☕ {product.name}</span>
                    </div>
                    <div className="td"><strong>{product.sales}</strong></div>
                    <div className="td"><strong>{product.revenue}</strong></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      <section className="panel actions-panel">
        <h2>Ações Rápidas</h2>
        <div className="action-buttons">
          <button className="btn-action">✏️ Editar Cardápio</button>
          <button className="btn-action">📊 Gerar Relatório</button>
          <button className="btn-action">👥 Gerenciar Usuários</button>
          <button className="btn-action">⚙️ Configurações</button>
        </div>
      </section>
    </main>
  );
}
