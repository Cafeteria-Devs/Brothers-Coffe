import { auth } from "../services/auth";
import React, { useState } from 'react';
import '../../styles/dashboard.css';
import '../../styles/media/mobile.css';
import '../../styles/media/tablet.css';
import { DashboardPanel } from '../components/dashboard/DashboardPanel';
import { StatItem } from '../components/dashboard/OverviewTab';
import { OrderItem } from '../components/dashboard/OrdersTab';
import { ProductItem } from '../components/dashboard/ProductsTab';

auth();

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats: StatItem[] = [
    { label: 'Vendas', value: 'R$ 2.540', change: '+12%', icon: '📈' },
    { label: 'Pedidos', value: '34', change: '+5', icon: '🛒' },
    { label: 'Clientes', value: '1.203', change: '+8%', icon: '👥' },
    { label: 'Nota', value: '4.8/5', change: '+0.2', icon: '⭐' },
  ];

  const recentOrders: OrderItem[] = [
    { id: '#001', client: 'João Silva', product: 'Espresso + Capuccino', value: 'R$ 28,00', status: 'entregue' },
    { id: '#002', client: 'Maria Santos', product: 'Café Coado', value: 'R$ 12,50', status: 'processando' },
    { id: '#003', client: 'Pedro Costa', product: 'Combo Manhã', value: 'R$ 45,00', status: 'entregue' },
    { id: '#004', client: 'Ana Oliveira', product: 'Mocaccino', value: 'R$ 18,00', status: 'preparando' },
  ];

  const topProducts: ProductItem[] = [
    { name: 'Espresso Duplo', sales: 245, revenue: 'R$ 1.470' },
    { name: 'Capuccino', sales: 189, revenue: 'R$ 945' },
    { name: 'Café Coado', sales: 156, revenue: 'R$ 780' },
    { name: 'Mocaccino', sales: 112, revenue: 'R$ 672' },
  ];

  return (
    <DashboardPanel
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      stats={stats}
      recentOrders={recentOrders}
      topProducts={topProducts}
    />
  );
}

