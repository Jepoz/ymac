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

  // Clean phone number by removing all non-digit characters except leading +
  const cleanPhoneNumber = Constants.phoneNumber.replace(/[^\d+]/g, '');

  // Build the message
  const getWhatsAppMessage = () => {
    if (!isDefaultMessage && !message && productName && productBrand) {
      return formatString(Constants.productWhatsAppMessage, {
        productName,
        productBrand
      });
    }
    return isDefaultMessage ? Constants.defaultWhatsAppMessage : message;
  };

  // Encode message while preserving common punctuation
  const encodeWhatsAppMessage = (msg: string) => {
    return encodeURIComponent(msg)
      .replace(/%2C/g, ',')
      .replace(/%3F/g, '?')
      .replace(/%22/g, '"')
      .replace(/%27/g, "'");
  };

  const whatsAppMessage = encodeWhatsAppMessage(getWhatsAppMessage());
  const isMobile = isMobileDevice();
  
  // Build the appropriate URL based on device
  const whatsappUrl = isMobile
    ? `https://wa.me/${cleanPhoneNumber}?text=${whatsAppMessage}`
    : `https://web.whatsapp.com/send?phone=${cleanPhoneNumber}&text=${whatsAppMessage}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log('whatsappUrl', whatsappUrl)
    if (!isMobile) {
      e.preventDefault();
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
    // For mobile devices, let the default anchor behavior handle it
  };

  return (
    <Button
      as="a"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      icon={isShoppingButton ? <HiOutlineShoppingBag size={24} /> : <FaWhatsapp size={24} />}
      text={text}
      onClick={handleClick}
      className={`whatsapp-button ${className || ''}`}
    />
  );
};

export default WhatsAppButton;