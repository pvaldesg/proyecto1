import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BoxMenu from './BoxMenu';
import CartWidget from './CartWidget';

const NavBar = () => {

    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Diplomados
              </Typography>
              <BoxMenu/>
              <Button color="inherit" text="">Registrarse</Button>
              <Button color="inherit">Login</Button>
              <CartWidget num="10"/>
            </Toolbar>
          </AppBar>
        </Box>
       
      </>  
      );

}

export default NavBar;