import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../button/button';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message = '' }) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Button
      as="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      icon={<FaWhatsapp size={24} />}
      text="¡Pide por WhatsApp!"
      className="whatsapp-style"
    />
  );
};

export default WhatsAppButton;
