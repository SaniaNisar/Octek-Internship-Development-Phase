import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Logo from "../../../assets/images/logo.png";
import icons from '../../../assets/images/icons';
import { FormControl, MenuItem, Select, TextField, Typography, InputAdornment } from '@mui/material';
import menuItems from './menu';
import { Search } from '@mui/icons-material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: "100%",
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuItemClick = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: "column", minHeight: '100vh' }}>
      <AppBar position="fixed" sx={{ paddingTop: "10px", backgroundColor: 'white', boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ width: drawerWidth - 15 }}>
            <a href="/">
              <img width={148} height={50} src={Logo} alt="Logo" />
            </a>
          </Box>
          <Box display={"flex"} flexBasis={{ xs: "100%", md: "50%", sm: "60%" }}>
            <TextField
              placeholder="Search"
              variant="standard"
              style={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                disableUnderline: true,
                sx: {
                  height: "48px",
                  border: 'none',
                  width: "100%",
                  borderRadius: "6px",
                  padding: "12px",
                  backgroundColor: "rgb(250, 250, 250)"
                },
              }}
              sx={{
                '& .MuiInputBase-root': {
                  border: 'none',
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", flex: 0.5, flexDirection: "row", marginTop: "80px" }}>
        <Drawer
          PaperProps={{
            sx: { marginTop: "65px" }
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              border: "none"
            },
          }}
          variant="permanent"
          anchor="left"
          open={true}
        >
          <FormControl sx={{ margin: "10px", marginTop: "25px" }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              onChange={() => null}
            >
              <MenuItem value={10}>Aftab Baig</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', paddingLeft: "15px" }}>
            <List>
              {menuItems.map((menuItem, index) => (
                <ListItem
                  sx={{ height: "55px", marginBottom: "2px", borderRadius: "6px" }}
                  key={menuItem.title}
                  disablePadding
                >
                  <ListItemButton
                    onClick={() => handleMenuItemClick(menuItem.title.toLowerCase())}
                    sx={{
                      backgroundColor: 'background.default',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        '& .MuiListItemText-primary': {
                          color: 'white',
                        },
                      },
                      borderRadius: "6px",
                      display: "flex",
                      justifyContent: "space-evenly"
                    }}
                  >
                    <img src={icons[menuItem.icon]} width={24} height={24} alt={menuItem.icon} />
                    <ListItemText
                      sx={{ justifyContent: "flex-start", marginLeft: "5px", fontSize: "16px", color: 'black' }}
                      primary={menuItem.title}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column", justifyContent: "flex-end", marginBottom: "60px" }}>
              <List>
                <ListItem sx={{ height: "55px", marginBottom: "8px", borderRadius: "6px", backgroundColor: "rgba(250, 250, 250, 1)" }} disablePadding>
                  <ListItemButton
                    sx={{
                      backgroundColor: 'background.default',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                      },
                      borderRadius: "6px",
                      display: "flex",
                      justifyContent: "space-evenly"
                    }}
                  >
                    <img src={icons["logout"]} width={24} height={24} alt="logout" />
                    <ListItemText sx={{ marginLeft: "5px", fontSize: '16px', justifyContent: "flex-start" }} primary={"Logout"} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Drawer>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: "10px", minHeight: 'calc(100vh - 80px)' }}>
          {location.pathname === '/blogs' && (
            <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>Blogs</Typography>
          )}
          <Box sx={{ padding: "10px", marginTop: "10px", flexGrow: 1, backgroundColor: "rgb(250, 250, 250)", overflowY: 'auto' }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
