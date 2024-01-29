import { Login } from '../components/Login';
import React from 'react';

export default {
    component: Login,
    title: 'Login',
};

const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});


// Pruebas Unitarias.
// 1-) Imagen del login debe cambiar dependiendo del subdominio.
// 2-) Se debe validar que el campo email no este vacio y el formato del email sea correcto.
// 3-) Se debe validar que el campo password no este vacio.
// 4-) Se debe validar el inicio de sesion con un usuario valido.


