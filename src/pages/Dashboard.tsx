import { auth } from "../services/auth";
import React, { useState, useEffect } from 'react';
import { getLogs } from "../services/logs_pedidos";
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
  const [recentOrders, setRecentOrders] = useState<OrderItem[]>([]);
  const [stats, setStats] = useState<StatItem[]>([
    { label: 'Receita', value: 'R$ 0,00', change: '-', icon: '📈' },
    { label: 'Pedidos', value: '0', change: '-', icon: '🛒' },
    { label: 'Clientes', value: '0', change: '-', icon: '👥' },
    { label: 'Ticket médio', value: 'R$ 0,00', change: '-', icon: '⭐' },
  ]);
  const [topProducts, setTopProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const data = await getLogs();
      if (data) {
        setStats(data.stats);
        setRecentOrders(data.recentOrders);
        setTopProducts(data.topProducts);
      }
    };

    fetchDashboardData();
  }, []);

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

