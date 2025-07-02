import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Button from '../button/button';

interface ShoppingBagButtonProps {
  text: string;  
  className?: string;
}

const ShoppingBagButton: React.FC<ShoppingBagButtonProps> = ({ text, className }) => {    

  return (
    <Button      
      onClick={() =>{}}
      target="_blank"      
      icon={<HiOutlineShoppingBag size={24} />}
      text={text}
      className={className}
    />
  );
};

export default ShoppingBagButton;
