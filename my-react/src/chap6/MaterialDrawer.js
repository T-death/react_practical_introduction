import { useState } from 'react';
import { Home, Mail, Info, AccountTree } from '@mui/icons-material';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { orange } from '@mui/material/colors';

const menu = [
  { title: 'ホーム', href: 'home.html', icon: Home },
  { title: 'お問い合わせ', href: 'contact.html', icon: Mail },
  { title: '会社概要', href: 'comapny.html', 'icon': Info },
  { title: 'サイトマップ', href: 'sitemap.html', icon: AccountTree },
];

export default function MaterialDrawer() {
  const [show, setShow] = useState(false);
  const handleDraw = () => setShow(!show);
  
  return (
    <>
      <Button onClick={handleDraw}>ドローワー</Button>
      <Drawer anchor="left" open={show}>
        <Box sx={{ height: '100vh' }} onClick={handleDraw}>
          <List>
            {menu.map(obj => {
              const Icon = obj.icon;
              return (
                <ListItem key={obj.title}>
                  <ListItemButton href={obj.href}>
                    <ListItemIcon><Icon sx={{ color: orange[500] }}/></ListItemIcon>
                    <ListItemText primary={obj.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}