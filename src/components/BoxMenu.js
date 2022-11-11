import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

//const pages = ['Control de Gestión', 'Tributación', 'Contabilidad', 'Business Analytics'];

const BoxMenu = () =>{

    const [setAnchorElNav] = React.useState(null);


    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };    

    return(
        <>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link to='Categoria/1'>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Control de Gestión
                    </Button>
                </Link>
                <Link to='Categoria/2'>    
                    <Button
                        key='Menu'
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Tributación
                    </Button>
                </Link>    
                <Link to='Categoria/3'>    
                    <Button
                        key='Menu'
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Business Analytics
                    </Button>
                </Link>     
                <Link to='Categoria/4'>    
                    <Button
                        key='Menu'
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Contabilidad
                    </Button>   
                </Link>                                         
        </Box>        

        {/*
        
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
            <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                {page}
            </Button>
            ))}
        </Box>                
        
        
        */}

        
        </>
    )
}
export default BoxMenu;