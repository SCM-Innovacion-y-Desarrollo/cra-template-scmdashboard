import React, { useContext } from 'react'
import { Drawer, DrawerHeaderLeft } from './Appbar'
import { Avatar, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Darklogo from '../../../assets/DarkLogo.png'
import { GlobalContext } from '../../../GlobalContext'
import GroupsIcon from '@mui/icons-material/Groups'
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useLocation, useNavigate } from 'react-router-dom'


const Left = () => {
    const { openLeft, handlerSideLeft } = useContext(GlobalContext)

    //const { t }    = useTranslation('global')
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Drawer variant="permanent" open={openLeft}>
            <DrawerHeaderLeft>
                { openLeft ? 
                    <>
                        <img
                            src={Darklogo}
                            alt='logo-app'
                            style={{
                                position: 'absolute', 
                                left: 10, 
                                margin: 10, 
                                width: "100px"
                            }}
                        />

                        <IconButton onClick={() => handlerSideLeft(!openLeft)}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </>
                    :
                    null
                }
            </DrawerHeaderLeft>

            <Divider />

            <List>
                <ListItemButton
                    sx={{ pl: 2.5 }}
                    selected={location.pathname === '/'} 
                    onClick={() =>navigate('/')}
                >
                    <ListItemIcon>
                        <GroupsIcon />
                    </ListItemIcon>

                    <ListItemText primary={'Employees'} />
                </ListItemButton>
            </List>

            <List sx={{position: 'absolute', bottom: 0, width: '100%'}}>
                <Divider />

                <ListItem
                    secondaryAction={
                        openLeft ?
                            <IconButton>
                                <ExitToAppIcon color='error'/>
                            </IconButton>
                            : 
                            null
                    }
                >
                    <ListItemIcon sx={{ml: -0.5}}>
                        <Avatar><PersonIcon /></Avatar>
                    </ListItemIcon>

                    <ListItemText primary={'Username'} secondary={'profile'}/>
                </ListItem>
            </List>    
        </Drawer>
    )
}

export {
    Left
}