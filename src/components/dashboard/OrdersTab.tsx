import React from 'react';

export type OrderItem = {
  id: string;
  client: string;
  product: string;
  value: string;
  status: string;
};

type OrdersTabProps = {
  recentOrders: OrderItem[];
};

export const OrdersTab = ({ recentOrders }: OrdersTabProps) => (
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