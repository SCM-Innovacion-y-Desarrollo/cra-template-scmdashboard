import React, { useState } from 'react'
import { Paths as WebRoutes } from './routes/Paths'
import { GlobalContext } from './GobalContext'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { 
	LightTheme, 
	//DarkTheme, 
	//CustomTheme  
} from './styles/themes'

const App = () => {
	const [authenticated, setAuthenticated] = useState(false)

	return (
		<>
			<GlobalContext.Provider value={{authenticated, setAuthenticated}}>
				<ThemeProvider theme={LightTheme}>
					<CssBaseline />
					<WebRoutes />
				</ThemeProvider>
			</GlobalContext.Provider>
		</>
	)
}

export default App