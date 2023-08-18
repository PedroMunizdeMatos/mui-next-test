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
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className="flex justify-end p-4">
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="px-10 py-4">
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
              {/* Adicione mais sub-opções conforme necessário */}
            </List>
          </Collapse>
        </List>
      </div>
      {/* Repita o padrão para mais itens do menu */}
    </Drawer>
  );
};

export default MenuDrawer;
