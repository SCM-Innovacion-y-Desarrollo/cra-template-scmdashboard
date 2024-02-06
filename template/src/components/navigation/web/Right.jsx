// React
import React, { useContext } from 'react'

import { Box, Divider, IconButton } from '@mui/material'

import Drawer from '@mui/material/Drawer';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DrawerHeaderRight } from './Appbar';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../../GlobalContext';

export const Right = ({title, component }) => {
    const { openRight, handlerSideRight } = useContext(GlobalContext)

    const location = useLocation()


    return (
        <>
            <Drawer
                open={openRight}
                sx={{
                    overflow: 'hidden',
                    width: 400,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 400,
                    },
                }}
                variant="persistent"
                anchor="right"

            >
                <DrawerHeaderRight>
                    <IconButton onClick={() => handlerSideRight(false, location.pathname.replace('/', ''))}>
                        {openRight ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    <h4 style={{position: 'absolute', left: 50}}>{ title }</h4>
                </DrawerHeaderRight>

                <Divider />

                <Box sx={{p: 2}}>
                    { component }
                </Box>
            </Drawer>
        </>
    )
}
