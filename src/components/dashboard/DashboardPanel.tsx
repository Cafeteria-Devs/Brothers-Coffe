import React from 'react';

export type StatItem = {
  label: string;
  value: string;
  change: string;
  icon: string;
};

export type OrderItem = {
  id: string;
  client: string;
  product: string;
  value: string;
  status: string;
};

export type ProductItem = {
  name: string;
  sales: number;
  revenue: string;
};

type DashboardPanelProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  stats: StatItem[];
  recentOrders: OrderItem[];
  topProducts: ProductItem[];
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

export const OverviewTab = ({ stats }: { stats: StatItem[] }) => (
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
  </div>
);

export const OrdersTab = ({ recentOrders }: { recentOrders: OrderItem[] }) => (
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
          {recentOrders.map((order) => (
            <div key={order.id} className="tr">
              <div className="td col-id">{order.id}</div>
              <div className="td">{order.client}</div>
              <div className="td">{order.product}</div>
              <div className="td">{order.value}</div>
              <div className="td">
                <span className={`badge badge-${order.status}`}>{order.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export const ProductsTab = ({ topProducts }: { topProducts: ProductItem[] }) => (
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
          {topProducts.map((product) => (
            <div key={product.name} className="tr">
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
