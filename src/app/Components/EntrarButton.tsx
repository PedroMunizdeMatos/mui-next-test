import React from 'react';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';


interface EntrarButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'inherit' | 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

const EntrarButton: React.FC<EntrarButtonProps> = ({ variant = 'contained', color = 'primary', onClick }) => {
  return (
    <Button
      variant={variant}
      color={color}
      startIcon={<PersonIcon />}
      onClick={onClick}
      className='rounded-full'
    >
      Entrar
    </Button>
  );
};

export default EntrarButton;
