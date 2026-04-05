import React from 'react';

export type ProductItem = {
  name: string;
  sales: number;
  revenue: string;
};

type ProductsTabProps = {
  topProducts: ProductItem[];
};

export const ProductsTab = ({ topProducts }: ProductsTabProps) => (
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