'use client'
import {useState} from 'react'
import {AppBar, Avatar, Box, CssBaseline, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { sidebarLinks } from '../../constants';
import Image from 'next/image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Link from 'next/link'
import AddIcon from '@mui/icons-material/Add';
import Card from './Card'


const drawerWidth = 240;
const width = 392;
const text = '{SAD}';

interface Props {
  window?: () => Window;
  user? : Array<{firstName: string, lastName: string, email: string}>
  transactions: [],
  banks: Array<{acc : string}>
}

export default function Sidebar(item: Props) {
  const { window, user, transactions, banks } = item;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isRight, setIsRight] = useState(false)

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerRight = () => {
    if (!isClosing) {
      setIsRight(!isRight);
    }
  }
  const handleRightClose = () => {
    setIsClosing(true);
    setIsRight(false);
  };

   const logo: string = '/logo.svg'
  
   const drawerLeft = (
    <div>
      <Link href = '/' 
      style ={{
        textDecoration: 'none'
      }}>
        <Stack direction = 'row' sx={{
          padding: '1rem',
          alignItems: 'center'
        }}>
            <Image 
            style={{
              marginRight : '0.5rem'
            }}
            width={23} height={23} alt='logo' src= {logo} />
            <Typography sx={{
                fontSize: {
                    xs: '1rem', lg: '1.5rem'
                },
                fontWeight: 'semi-bold'
            }}>
                Eldians
            </Typography>
          </Stack>
            </Link>
      <Divider />
      <List>
        {sidebarLinks.map((text) => (
          <ListItem key={text.label} disablePadding>
            <ListItemButton>
              <Link 
              style = {{
                textDecoration : 'none',
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center'
              }}
              href = {text.route} > 
              <Image width={20} height={20} src = {text.imgURL} alt='logo'/>
              <ListItemText sx={{
                ml: 2,
              }} primary={text.label} />
          </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      </div>
  );

  const drawerRight = (
    <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(90deg, #1e3a8a,rgb(246, 59, 84))',
              height: '12vh',
              width: '100%'
            }}
          />
          <Box sx = {{
            padding: '0.8rem'
          }}>

          <Avatar
            sx={{
              marginTop: '-2rem',
              backgroundColor: 'black',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '65px',
              width: '65px',
              padding: '1rem',
              border: '2px solid white',
              marginBottom: '0.5rem'
            }}
            >
            <Typography  variant="subtitle2">{text}</Typography>
            <Typography  variant="caption">Damilare</Typography>
          </Avatar>
          <Typography gutterBottom variant = 'subtitle1' sx = {{
            fontWeight: 'bold'
          }}>
          {user?.[0]?.firstName} {user?.[0]?.lastName}
          </Typography>
          <Typography gutterBottom variant = 'subtitle2'>
          {user?.[0]?.email}
        </Typography>
        <Stack direction = 'row'
        sx = {{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1.8rem',
        }} >
          <Typography>
            My Banks
          </Typography>
          <Link href = '/' style = {{
            textDecoration: "none",
            fontSize: '13px'
          }}>
          <IconButton
           color="inherit"
           aria-label="add icon"
           >
            <AddIcon />
          </IconButton>
          Add bank
          </Link>          
        </Stack>
        {banks?.length > 0 && (
          <Box sx = {{
            marginTop : '1.5rem',
            position: 'relative',
            display: 'flex',
            flexDirection : 'column',
            justifyContent: 'center',
            gap: '0.5rem',
            alignItems: 'center', 
          }}> 
          <Container sx = {{
            positon: 'relative',
            zIndex: 10
          }}>
            <Card user={[{ firstName: 'Sheriff', lastName: 'Damilare', email: 'adeleyeSheriff464@gmail.com'}]} />
          </Container>
          {banks[1] && (
            <Container sx = {{
              zIndex: 0,
              position: 'absolute',
              top: '1.5rem',
              right: '-1.5rem',
            }}>
            <Card user={[{ firstName: 'Sheriff', lastName: 'Damilare', email: 'adeleyeSheriff464@gmail.com'}]} />
          </Container>
          )}
        </Box>
        )}
            </Box>
        </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          display: { md: 'none' },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction = 'row'
          sx={{
            alignItems: 'center',
          }}>
            <Image 
            style={{
                marginRight : '0.5rem'
            }}
            width={23} height={23} alt='logo' src= {logo} />
            <Typography sx={{
                fontSize: {
                    xs: '1rem', lg: '1.5rem'
                },
                fontWeight: 'semi-bold'
            }}>
                Eldians
            </Typography>
          </Stack>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerRight}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <ChevronRightIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawerLeft}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawerLeft}
        </Drawer>

        <Drawer
          container={container}
          variant="temporary"
          open={isRight}
          anchor = 'right'
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleRightClose}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: width },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawerRight}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: width },
          }}
          open
          anchor = 'right'
        >
          {drawerRight}
        </Drawer>
      </Box>
    </Box>
  );
}
