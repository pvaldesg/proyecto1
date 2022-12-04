import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

//const pages = ['Control de Gestión', 'Tributación', 'Contabilidad', 'Business Analytics'];
//const ids = [1,2,3,4];

const pages = [
    {idp: 1, namep: 'Control de Gestión'},
    {idp: 2, namep: 'Tributación'},
    {idp: 3, namep: 'Business Analytics'},
    {idp: 4, namep: 'Contabilidad'}
]


const BoxMenu = () =>{

    const [AnchorElNav, setAnchorElNav] = React.useState(null);
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };    
    console.log(AnchorElNav);

    return(
        <>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((arrPages) => (
                <Link to={`/categoria/${arrPages.idp}`} key={arrPages.idp}>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                         {arrPages.namep}
                    </Button>
                </Link>
        ))}        
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