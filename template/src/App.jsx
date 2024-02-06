import React, { useEffect, useState } from 'react'
import { WebPaths, MobilePaths } from './routes/Paths'
import { GlobalContext } from './GlobalContext'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { 
	DarkTheme,
	//LightTheme,  
	//CustomTheme  
} from './styles/themes'

const App = () => {
	const [authenticated, setAuthenticated] = useState(false)
	const [openLeft, setOpenLeft]           = useState(localStorage.getItem('openLeft') === 'true' ? true : false)
	const [openRight, setOpenRight]         = useState(localStorage.getItem(`right-${window.location.pathname}`) === 'true' ? true : false)


	const handlerSideLeft = (bool) => {        
		localStorage.setItem('openLeft', bool)
		setOpenLeft(bool)
	}

	const handlerSideRight = (bool) =>{
		localStorage.setItem(`right-${window.location.pathname}`, bool)
        setOpenRight(bool)
    }

	useEffect(() => {
		setOpenLeft(localStorage.getItem('openLeft') === 'true' ? true : false)
		setOpenRight(localStorage.getItem(`right-${window.location.pathname}`) === 'true' ? true : false)
	}, [])
	
	return (
		<>
			<GlobalContext.Provider 
				value={{
					authenticated, 
					setAuthenticated,
					openLeft,
					handlerSideLeft,
					openRight,
					handlerSideRight
				}}
			>

				<ThemeProvider theme={DarkTheme}>
					<CssBaseline />

					<Box sx={{display: {xs: 'none', sm: 'none', md: 'block'}, overflow: 'hidden'}}>
						<WebPaths />
					</Box>

					<Box sx={{display: {xs: 'block', sm: 'block', md: 'none'}}}>
						<MobilePaths />	
					</Box>
				</ThemeProvider>

			</GlobalContext.Provider>
		</>
	)
}

export default App