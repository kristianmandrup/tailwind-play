import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import clsx from 'clsx';

type ActionProps = {
  label: string;
  onSubmit: () => void;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl'; 
  className?: string;
  action?: ActionProps;
};

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  footer,
  children,
  size = 'md',
  className,
  action,
}) => {
  // Map size to Tailwind width classes
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={clsx('transition-transform duration-300 ease-in-out', className, sizeClasses[size])}
    >
      {title && (
        <ModalHeader className="text-lg font-bold">{title}</ModalHeader>
      )}
      <ModalBody className="p-4">{children}</ModalBody>
      <ModalFooter className="p-4 flex justify-between">
        {footer}
        {action && (
          <Button onClick={action.onSubmit}>
            {action.label}
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponent;
