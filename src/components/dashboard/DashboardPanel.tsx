import React from 'react';
import { OverviewTab } from './OverviewTab';
import { OrdersTab } from './OrdersTab';
import { ProductsTab } from './ProductsTab';

type DashboardPanelProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  stats: import('./OverviewTab').StatItem[];
  recentOrders: import('./OrdersTab').OrderItem[];
  topProducts: import('./ProductsTab').ProductItem[];
};

export const DashboardHeader = () => (
  <div className="admin-intro">
    <div>
      <h1>Painel Administrativo</h1>
      <p>Bem-vindo ao controle administrativo</p>
    </div>
    <time className="admin-date">
      {new Date().toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
  </div>
);

export const DashboardTabs = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void; }) => (
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
);

export const QuickActions = () => (
  <section className="panel actions-panel">
    <h2>Ações Rápidas</h2>
    <div className="action-buttons">
      <button className="btn-action">✏️ Editar Cardápio</button>
      <button className="btn-action">📊 Gerar Relatório</button>
      <button className="btn-action">👥 Gerenciar Usuários</button>
    </div>
  </section>
);

export const DashboardPanel = ({ activeTab, setActiveTab, stats, recentOrders, topProducts }: DashboardPanelProps) => (
  <main className="admin-dashboard">
    <DashboardHeader />
    <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

    {activeTab === 'overview' && <OverviewTab stats={stats} />}
    {activeTab === 'orders' && <OrdersTab recentOrders={recentOrders} />}
    {activeTab === 'products' && <ProductsTab topProducts={topProducts} />}

    <QuickActions />
  </main>
);
