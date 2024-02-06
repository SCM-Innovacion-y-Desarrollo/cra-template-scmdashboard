import { Container } from "@mui/material"
import { Login } from "../../components/Login"

const SignIn = () => {
	return (
		<>
			<Container
				sx={{
					display: 'flex',
					height: '100vh',
					justifyContent: 'center',
					alignItems: 'center',
					flexGrow: 1,
				}}
			>
				<Login redirect={'/'} />
			</Container>
		</>
	)
}

export { SignIn }