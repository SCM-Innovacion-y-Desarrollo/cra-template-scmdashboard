import { Box, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppBar } from './Appbar'
import { GlobalContext } from '../../../GlobalContext'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { Left } from './Left'
import { Right } from './Right'

const Navbar = ({view, right}) => {
    const { openLeft, openRight, handlerSideLeft, handlerSideRight } = useContext(GlobalContext)

    return (
        <>
            <Box sx={{display: 'flex'}}>
                <AppBar
                    position='fixed'
                    open={openLeft || openRight}
                    left={openLeft ? 240 : 0}
                    right={openRight ? 400 : 0}
                    color='transparent'
                    sx={{
                        borderBottom: (theme) => theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.12)',
                        boxShadow: 'none',
                    }}
                >
                    <Toolbar sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#ffffff' : '#000000',}}>
                        <IconButton
                            color="inherit"
                            onClick={() => handlerSideLeft(true)}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(openLeft && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        
                        <Typography variant="h6" noWrap component="div" sx={{width:"94vw"}} >
                            {view.title}
                        </Typography>

                        <IconButton
                            color="inherit"
                            onClick={() => handlerSideRight(true)}
                            edge="end"
                            sx={{
                                marginRight: 0,
                                ...(openRight && { display: 'none' }),
                            }}
                        >
                            <MenuOpenIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Left />

                <Right title={right.title} component={right.component}/>
            </Box>

            <Box
                sx={{
                    marginTop: '64px',
                    marginLeft: openLeft ? '240px' : '64px',
                    marginRight: openRight ? '400px' : '0px',
                    height: 'calc(100% - 64px)',
                    padding: '20px'
                }}
            >
                { view.component }
            </Box>
        </>
    )
}

export default Navbar