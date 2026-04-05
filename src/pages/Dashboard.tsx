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
  const [stats, setStats] = useState<StatItem[]>([
    { label: 'Vendas', value: 'R$ 0,00', change: '-', icon: '📈' },
    { label: 'Pedidos', value: '0', change: '-', icon: '🛒' },
    { label: 'Clientes', value: '0', change: '-', icon: '👥' },
    { label: 'Ticket médio', value: 'R$ 0,00', change: '-', icon: '⭐' },
  ]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [products, recentResult, allResult] = await Promise.all([
          productsData(),
          supabase
            .from('logs_pedidos')
            .select('id, user, product_id, created_at')
            .order('created_at', { ascending: false })
            .limit(5),
          supabase
            .from('logs_pedidos')
            .select('id, user, product_id')
            .order('created_at', { ascending: false }),
        ]);

        const recentOrdersData = recentResult.data;
        const allOrders = allResult.data;

        if (recentResult.error) throw recentResult.error;
        if (allResult.error) throw allResult.error;

        const formattedOrders: OrderItem[] = (recentOrdersData || []).map((order: any) => {
          const product = products.find((p) => p.id === order.product_id);
          const price = product?.price ?? 0;
          return {
            id: `#${String(order.id).padStart(3, '0')}`,
            client: order.user || 'Usuário desconhecido',
            product: product?.name || 'Produto desconhecido',
            value: `R$ ${price.toFixed(2).replace('.', ',')}`,
            status: 'processando',
          };
        });

        const orderCount = allOrders?.length ?? 0;
        const uniqueCustomers = new Set((allOrders || []).map((order: any) => order.user).filter(Boolean)).size;
        const totalRevenue = (allOrders || []).reduce((sum: number, order: any) => {
          const product = products.find((p) => p.id === order.product_id);
          return sum + (product?.price ?? 0);
        }, 0);
        const averageTicket = orderCount > 0 ? totalRevenue / orderCount : 0;

        setRecentOrders(formattedOrders);
        setStats([
          { label: 'Receita', value: `R$ ${totalRevenue.toFixed(2).replace('.', ',')}`, change: orderCount ? '+0%' : '-', icon: '📈' },
          { label: 'Pedidos', value: `${orderCount}`, change: '+0', icon: '🛒' },
          { label: 'Clientes', value: `${uniqueCustomers}`, change: '+0', icon: '👥' },
          { label: 'Ticket médio', value: `R$ ${averageTicket.toFixed(2).replace('.', ',')}`, change: '+0', icon: '⭐' },
        ]);
      } catch (err) {
        console.error('Erro ao buscar dados do dashboard:', err);
      }
    };

    fetchDashboardData();
  }, []);

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

