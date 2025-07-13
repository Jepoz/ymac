import React from 'react';
import WhatsAppButton from '../whatsapp-button/whatsapp-button';
import styles from "./floating-whatsapp-button.module.scss";

interface FloatingWhatsappButtonProps {  

}

const FloatingWhatsappButton: React.FC<FloatingWhatsappButtonProps> = () => {    
  return (
    <WhatsAppButton className={styles['whatsappFloatingButton']}  text={'¡Pide por WhatsApp!'} isDefaultMessage/>
  );
};

export default FloatingWhatsappButton;
