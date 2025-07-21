import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Button from '../button/button';
import Constants from '../../../constants/constants';
import { formatString } from '../../../utils/format-string';

interface WhatsAppButtonProps {
  text: string;  
  message?: string;
  isDefaultMessage?: boolean;
  isShoppingButton?: boolean;
  className?: string;
  productName?: string;
  productBrand?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text, 
  message = '', 
  isDefaultMessage = false, 
  isShoppingButton, 
  className, 
  productName, 
  productBrand 
}) => {
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  // Construir el mensaje
  let whatsAppMessage = '';
  if (!isDefaultMessage && message === '' && productName && productBrand) {
    const productValues = {
      productName: productName,
      productBrand: productBrand,
    };
    whatsAppMessage = formatString(Constants.productWhatsAppMessage, productValues);
  } else {
    whatsAppMessage = isDefaultMessage ? Constants.defaultWhatsAppMessage : message;
  }

  // Codificación mejorada que preserva signos de puntuación
  const encodedMessage = encodeURIComponent(whatsAppMessage)
    .replace(/%2C/g, ',')   // Revertir comas
    .replace(/%3F/g, '?')   // Revertir signos de pregunta
    .replace(/%20/g, ' ')   // Opcional: Revertir espacios (puedes dejarlos como %20)
    .replace(/%22/g, '"')   // Revertir comillas
    .replace(/%27/g, "'");  // Revertir apóstrofes

  // Construir la URL según el dispositivo
  const url = isMobileDevice() 
    ? `https://wa.me/${Constants.phoneNumber}?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${Constants.phoneNumber}&text=${encodedMessage}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.stopPropagation(); 
    if (!isMobileDevice()) {
      window.open(url, '_blank');
      e.preventDefault();
    }
  };

  return (
    <Button
      as="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      icon={isShoppingButton ? <HiOutlineShoppingBag size={24} /> : <FaWhatsapp size={24} />}
      text={text}
      onClick={handleClick}
      className={`whatsapp-style ${className}`}
    />
  );
};

export default WhatsAppButton;