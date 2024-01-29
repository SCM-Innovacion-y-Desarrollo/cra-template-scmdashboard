import axios from "axios"

const validateEmail = (email) => {
	const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/
	return regex.test(email)
}

/*
La contraseña debe contener al menos una letra minúscula.
La contraseña debe contener al menos una letra mayúscula.
La contraseña debe contener al menos un número.
La contraseña debe tener al menos 8 caracteres. 
*/
const validatePassword = (password) => {
	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
  	return regex.test(password)
}

const logging = async (event, setLoading, email, password, redirect) => {
	event.preventDefault()
    
	setLoading(true)
	console.log(`loading: ${true} email: ${email.value} password: ${password.value}`)

    const data = {
        email: email.value,
        password: password.value
    }

    const headers = {
        'Content-Type': 'application/json'
    }

    await axios.post(
        'https://dummyjson.com/auth/login',
        data,
        headers
    )
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setLoading(false)
    })  
}

export {
    validateEmail,
    validatePassword,
    logging,
}