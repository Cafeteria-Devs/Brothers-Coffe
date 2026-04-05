import { auth } from "../services/auth";
import React, { useState, useEffect } from 'react';
import supabase from "../config/supabase";
import productsData from "../data/products";
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

  useEffect(() => {
    const fetchRecentOrders = async () => {
      try {
        const { data, error } = await supabase
          .from('logs_pedidos')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(5);

        if (error) throw error;

        const products = await productsData();
        
        const formattedOrders: OrderItem[] = data.map((order: any) => ({
          id: `#${String(order.id).padStart(3, '0')}`,
          client: order.user || 'Usuário desconhecido',
          product: products.find(p => p.id === order.product_id)?.name || 'Produto desconhecido',
          value: `R$ ${products.find(p => p.id === order.product_id)?.price.toFixed(2).replace('.', ',') || '0,00'}`,
          status: 'processando',
        }));

        setRecentOrders(formattedOrders);
      } catch (err) {
        console.error("Erro ao buscar pedidos:", err);
      }
    };

    fetchRecentOrders();
  }, []);

  const stats: StatItem[] = [
    { label: 'Vendas', value: 'R$ 2.540', change: '+12%', icon: '📈' },
    { label: 'Pedidos', value: '34', change: '+5', icon: '🛒' },
    { label: 'Clientes', value: '1.203', change: '+8%', icon: '👥' },
    { label: 'Nota', value: '4.8/5', change: '+0.2', icon: '⭐' },
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

