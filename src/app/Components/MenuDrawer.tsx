import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ open, onClose }) => {
  const [openedSubOption, setOpenedSubOption] = useState<string | null>(null);

  return (
    <Drawer anchor="right" open={open} onClose={onClose} className='text-center'>
      <div className="flex justify-end p-4">
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className=" py-4">
        <List component="div" disablePadding>
          <ListItemButton
            onClick={() =>
              setOpenedSubOption(openedSubOption === 'nossoTrabalho' ? null : 'nossoTrabalho')
            }
          >
            <ListItemText primary="Nosso Trabalho" />
          </ListItemButton>
          <Collapse in={openedSubOption === 'nossoTrabalho'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 2" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 3" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 4" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 5" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 6" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton
            onClick={() =>
              setOpenedSubOption(openedSubOption === 'areasAtuacao' ? null : 'areasAtuacao')
            }
          >
            <ListItemText primary="Áreas de Atuação" />
          </ListItemButton>
          <Collapse in={openedSubOption === 'areasAtuacao'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 2" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 3" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 4" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 5" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 6" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton
            onClick={() =>
              setOpenedSubOption(openedSubOption === 'tcuCongresso' ? null : 'tcuCongresso')
            }
          >
            <ListItemText primary="Tcu e Congresso" />
          </ListItemButton>
          <Collapse in={openedSubOption === 'tcuCongresso'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 2" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 3" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 4" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 5x" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 6" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton
            onClick={() =>
              setOpenedSubOption(openedSubOption === 'sobreTcu' ? null : 'sobreTcu')
            }
          >
            <ListItemText primary="Sobre o TCU" />
          </ListItemButton>
          <Collapse in={openedSubOption === 'sobreTcu'} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 2" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 3" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 4" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 5" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Sub-opção 6" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </div>
      {/* Repita o padrão para mais itens do menu */}
    </Drawer>
  );
};

export default MenuDrawer;
