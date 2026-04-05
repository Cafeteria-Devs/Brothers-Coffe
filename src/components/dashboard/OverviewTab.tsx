import React from 'react';

export type StatItem = {
  label: string;
  value: string;
  change: string;
  icon: string;
};

type OverviewTabProps = {
  stats: StatItem[];
};

export const OverviewTab = ({ stats }: OverviewTabProps) => (
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