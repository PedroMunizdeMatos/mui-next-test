"use client"
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TranslateIcon from '@mui/icons-material/Translate';

interface LanguageSelectorProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'text',
  color = 'primary',
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('PT');

  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (language: string) => {
    setSelectedLanguage(language);
    handleMenuClose();
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant={variant}
        color={color}
        startIcon={<TranslateIcon />}
        onClick={handleButtonClick}
      >
        {selectedLanguage}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem className='text-sky-600 hover:bg-sky-50' onClick={() => handleMenuItemClick('PT')}>PT</MenuItem>
        <MenuItem className='text-sky-600 hover:bg-sky-50' onClick={() => handleMenuItemClick('EN')}>EN</MenuItem>
        <MenuItem className='text-sky-600 hover:bg-sky-50' onClick={() => handleMenuItemClick('ES')}>ES</MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSelector;
