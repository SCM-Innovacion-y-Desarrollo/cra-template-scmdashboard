import { AppBar, BottomNavigation, BottomNavigationAction, Box, Breadcrumbs, Divider, Grid, IconButton, Link, SwipeableDrawer, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useNavigate } from 'react-router-dom';

const items = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        path: '/',
    }
]

const BottomNavbar = ({component}) => {
    const [value, setValue] = useState(0)
    const [open, setOpen]   = useState(false)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const navigate          = useNavigate()

    return (
        <>
            <Box>
                <AppBar 
                    position='static'
                    color='transparent'
                    sx={{ boxShadow: 'none', }}
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => { setOpen(true) }}
                            onKeyDown={() => { setOpen(true) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        
                        <Breadcrumbs sx={{ flexGrow: 1 }} maxItems={2}>
                            <Link underline="hover" color="inherit" href={items[value].path}>
                                { items[value].title }
                            </Link>
                        </Breadcrumbs>
                    </Toolbar>
                </AppBar>
            </Box>

            <Box sx={{height: {xs: `calc(100vh - ${56+56}px)`, sm: `calc(100vh - ${64+56}px)`, md: `calc(100vh - ${64+56}px)`}}}>
                { component }
            </Box>

            <Box sx={{position: 'absolute', bottom: 0, width: '100vw'}}>
                <Divider />

                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                >
                    {items.map((item, index) => (
                        <BottomNavigationAction 
                            key={index} 
                            label={item.title} 
                            icon={item.icon}
                            onClick={() => { navigate(item.path) }} 
                        />
                    ))}
                </BottomNavigation>
            </Box>

            <SwipeableDrawer
                anchor='bottom'
                open={open}
                onClose={() => { setOpen(false) }}
                onOpen={() => { setOpen(true) }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }
                }}
            >
                <Box 
                    sx={{ 
                        height: '75vh', 
                        borderTopLeftRadius: 10, 
                        borderTopRightRadius: 10,
                        borderTop: (theme) => theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
                    }}
                >
                    { isMobile ?
                        <Grid item xs={12}>
                            <Box sx={{display: 'flex', alignContent: 'center', justifyContent: 'center', padding: 1}}>
                                <DragHandleIcon sx={{cursor: 'ns-resize'}}/>
                            </Box>

                            <Divider />

                            { component }
                        </Grid>
                        :
                        null
                    }
                </Box>
            </SwipeableDrawer>
        </>
    )
}

export default BottomNavbar

/*
const [anchorEl, setAnchorEl] = useState(null);

<Menu
    anchorEl={anchorEl}
    open={anchorEl ? true : false}
    onClose={() => setAnchorEl(null)}
    slotProps={{
        paper: {
            elevation: 0,
            boxShadow: 'none',
            borderRadius: 1000,
            backgroundColor: '#000'
        }
    }}
>
    <Box 
        sx={{
            borderRadius: 2,
            border: (theme) => theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
        }
    }>
        {items[value].subitems.map((subitem, index) => (
            <>
                <MenuItem key={index}>
                    <ListItemIcon>
                        { subitem.icon }
                    </ListItemIcon>

                    <ListItemText primary={subitem.title} />
                </MenuItem>
            </>
        ))}
    </Box>
</Menu>
*/