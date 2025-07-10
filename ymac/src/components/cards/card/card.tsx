import classNames from "classnames";
import React from "react";
import styles from './card.module.scss'

interface CardProps {    
  className?: string;
  children?: React.ReactNode;    
  onClick?: () => void;  
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div       
      className={
        classNames(
          styles.card, 
          props.className,          
        )}
        onClick={props.onClick}
    >
        {
          props.children ?? props.children
        }
    </div>
  );
};

export default Card;