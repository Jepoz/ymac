import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Button from '../button/button';
import Constants from '../../../constants/constants';

interface WhatsAppButtonProps {
  text: string;  
  message?: string;
  isShoppingButton?: boolean;

}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, message = '', isShoppingButton }) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${Constants.phoneNumber}?text=${encodedMessage}`;

  return (
    <Button
      as="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      icon={isShoppingButton ? <HiOutlineShoppingBag size={24} /> : <FaWhatsapp size={24} />}
      text={text}
      className="whatsapp-style"
    />
  );
};

export default WhatsAppButton;
