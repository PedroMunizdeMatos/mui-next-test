"use client"
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChevronDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import LanguageSelector from './LanguageSelector';
import EntrarButton from './EntrarButton';
import MenuDrawer from './MenuDrawer';

const Navbar: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setIsMenuOpen(false);
        setAnchorEl(null);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
<>
  <AppBar position="fixed" className='bg-white text-blue-900'>
    <div className='md:flex justify-between w-full border-b-2 border-blue-50 py-2  hidden'>
      <div className='md:flex text-xs gap-4 py-1 md:ml-40 mr-8'>
        <a href="#" className='m-auto text-black hover:text-blue-900 hover:font-semibold ease-in-out duration-300'><span>ACESSIBILIDADE</span></a>
        <a href="#" className='m-auto text-black hover:text-blue-900 hover:font-semibold ease-in-out duration-300'><span>CARTA DE SERVIÇOS</span></a>
        <a href="#" className='m-auto text-black hover:text-blue-900 hover:font-semibold ease-in-out duration-300'><span>TRANSPARÊNCIA E PRESTAÇÃO DE CONTAS</span></a>
        <a href="#" className='m-auto text-black hover:text-blue-900 hover:font-semibold ease-in-out duration-300'><span>DENUNCIE</span></a>
      </div>
      <div className='md:flex gap-4 mr-40'>
        <LanguageSelector />
        <EntrarButton color='primary' variant='outlined'/>
      </div>
    </div>
    <Toolbar className='py-8 md:mx-40 flex justify-between px-0 mx-8' >
      <Typography variant="h6" component="div" className='mr-8' >
        <img src="/logo-tcu.svg" alt="Logo" />
      </Typography>
      <div className='flex justify-items-end'>
        <IconButton
          color="inherit"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          {isMenuOpen ? <MenuIcon className='hidden' /> : <MenuIcon />}
        </IconButton>
        <div
          className={`lg:flex lg:gap-2  hidden transition-all duration-300`}
        >
          <Typography
          variant="body1"
          color="inherit"
          onClick={handleMenuClick}
          className='m-auto cursor-pointer lg:mr-8 font-bold text-center'
          >
          Nosso Trabalho
          <ChevronDownIcon 
          className='transform rotate-90 absolute right-full lg:right-auto lg:rotate-0'
          />
          </Typography>
          <Typography
          variant="body1"
          color="inherit"
          onClick={handleMenuClick}
          className='m-auto cursor-pointer lg:mr-8 font-bold text-center'
          >
          Áreas de Atuação 
          <ChevronDownIcon 
          className='transform rotate-90 absolute right-full lg:right-auto lg:rotate-0'
          />
          </Typography>
          <Typography
          variant="body1"
          color="inherit"
          onClick={handleMenuClick}
          className='m-auto cursor-pointer lg:mr-8 font-bold text-center'
          >
          TCU e Congresso
          <ChevronDownIcon 
          className='transform rotate-90 absolute right-full lg:right-auto lg:rotate-0'
          />
          </Typography>
          <Typography
          variant="body1"
          color="inherit"
          onClick={handleMenuClick}
          className='m-auto cursor-pointer lg:mr-8 font-bold text-center'
          >
          Sobre o TCU
          <ChevronDownIcon 
          className='transform rotate-90 absolute right-full lg:right-auto lg:rotate-0'
          />
          </Typography>
          <IconButton
          color="inherit"
          onClick={() => {
            // Implementar ação de pesquisa aqui
          }}
          className='m-auto cursor-pointer lg:mr-0 font-bold'
          >
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        className="lg:z-0 lg:left-1 lg:top-8 lg:mt-2 max-w-lg " // Ajusta o posicionamento para diferentes tamanhos de tela
      >
        <MenuItem onClick={handleMenuClose} className='text-sky-600 hover:bg-sky-50'>
          <Typography variant="body1">sub-opção 1</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} className='text-sky-600 hover:bg-sky-50'>
          <Typography variant="body1">sub-opção 2</Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose} className='text-sky-600 hover:bg-sky-50'>
          <Typography variant="body1">sub-opção 3</Typography>
        </MenuItem>
      </Menu>
    </Toolbar>
    <MenuDrawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    {/* <Drawer
      anchor="right"
      open={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
    >
      <div className="flex justify-end p-4">
        <IconButton onClick={() => setIsMenuOpen(false)}>
          <CloseIcon />
        </IconButton>
      </div>  
      <List>
        <ListItemButton onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
          <ListItemText primary="Nosso Trabalho" />
            <Collapse in={isSubMenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Sub-opção 1" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Sub-opção 2" />
                </ListItemButton>
              </List>
            </Collapse>
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Áreas de Atuação" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="TCU e Congresso" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Sobre o TCU" />
        </ListItemButton>
      </List>
    </Drawer> */}
  </AppBar>
</>
);
};

export default Navbar;
