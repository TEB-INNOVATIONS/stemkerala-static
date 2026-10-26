import React from 'react';

interface StatusBadgeProps {
  className?: string;
  onClick?: () => void;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ className = '', onClick }) => {
  return (
    <button 
      className={`status-badge ${className}`} 
      role="status" 
      aria-label="Status: Coming Soon. Click to replay loading animation."
      onClick={onClick}
      title="Click to replay animation"
      style={{ cursor: onClick ? 'pointer' : 'default', background: 'none' }}
    >
      <span className="status-pulse-dot" aria-hidden="true">
        <span className="pulse-ring"></span>
        <span className="pulse-core"></span>
      </span>
      <span className="status-badge-text">COMING SOON</span>
    </button>
  );
};
