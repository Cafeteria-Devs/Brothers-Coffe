import supabase from "../config/supabase";
import { StatItem } from "../components/dashboard/OverviewTab";
import { OrderItem } from "../components/dashboard/OrdersTab";
import { ProductItem } from "../components/dashboard/ProductsTab";

export interface DashboardData {
  stats: StatItem[];
  recentOrders: OrderItem[];
  topProducts: ProductItem[];
}

export async function getLogs(): Promise<DashboardData | null> {
  try {
    const { data, error } = await supabase.functions.invoke('get-logs', {
      method: 'GET',
    });

    if (error) throw error;

    return {
      stats: data.stats,
      recentOrders: data.recentOrders,
      topProducts: data.topProducts,
    };
  } catch (error: any) {
    console.error('Erro ao buscar dados do dashboard:', error.message);
    return null;
  }
}