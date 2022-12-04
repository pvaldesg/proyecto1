import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BoxMenu from './BoxMenu';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useContext } from 'react';

const NavBar = () => {

    const test = useContext(CartContext)

    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to='/'>Diplomados </Link>
              </Typography>
              <BoxMenu/>
              <Button color="inherit" text="">Registrarse</Button>
              <Button color="inherit">Login</Button>

              <Button color='inherit' to="/cart" component={Link}>
              <CartWidget num={test.sumCantidadItems()}/>
              </Button>


            </Toolbar>
          </AppBar>
        </Box>
       
      </>  
      );

}

export default NavBar;