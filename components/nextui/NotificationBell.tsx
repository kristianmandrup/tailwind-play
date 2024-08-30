import React from 'react';
import { Badge } from '@nextui-org/react';
import { IconBell } from '@tabler/icons-react';

type NotificationBellProps = {
  type?: 'success' | 'warning' | 'danger'; // Badge types
  content?: string; // Badge content, e.g., number of notifications
  onClick?: () => void; // Optional click handler
};

type Color = "success" | "warning" | "danger"

const NotificationBell: React.FC<NotificationBellProps> = ({
  type = 'warning', // Default to warning
  content = '5', // Default content
  onClick,
}) => {
  // Map type to Badge color
  const badgeColorMap: Record<string, Color> = {
    success: 'success',
    warning: 'warning',
    danger: 'danger',
  };

  return (
    <Badge
      color={badgeColorMap[type]}
      content={content}
      placement="top-right"
      aria-label="Notifications"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <IconBell size={24} />
    </Badge>
  );
};

export default NotificationBell;
