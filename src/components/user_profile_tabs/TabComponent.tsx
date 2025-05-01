import React, { useState } from 'react';
import './tab-styles.css';

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
};

type TabProps = {
  tabs: Tab[];
  defaultActiveTab?: string;
};

const TabComponent: React.FC<TabProps> = ({ tabs, defaultActiveTab }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  return (
    <div className="tabs-container">
      <div className="tabs-list">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''} ${
              tab.disabled ? 'disabled' : ''
            }`}
            disabled={tab.disabled}
          >
            {tab.icon && <span className="tab-icon">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab)?.content || null}
      </div>
    </div>
  );
};

export default TabComponent;