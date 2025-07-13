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

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, message = '', isDefaultMessage = false, isShoppingButton, className, productName, productBrand }) => {
  let whatsAppMessage = '';
  if (!isDefaultMessage && message === '' && productName && productBrand) {
    const productValues = {
      productName: productName,
      productBrand: productBrand,
    };
    whatsAppMessage = formatString(Constants.productWhatsAppMessage, productValues);
  }
  else {
   whatsAppMessage = encodeURIComponent(isDefaultMessage ? Constants.defaultWhatsAppMessage : message);
  }  

  const url = `https://wa.me/${Constants.phoneNumber}?text=${whatsAppMessage}`;

  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.stopPropagation(); 
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
