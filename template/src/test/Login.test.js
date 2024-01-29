import { 
    validateEmail,
    validatePassword,
    logging,
} from '../utils/Login'

/*
    1-) validar formato de correo.
    2-) validar que el campo no este vacio.
*/
describe('Validación de email', () => {
    test('validar que el campo no este vacio', () => {
        expect(validateEmail('')).toBe(false);
    })
    
    test('validar formato', () => {
        expect(validateEmail('nicolas')).toBe(false);
        expect(validateEmail('nicolas.rivera')).toBe(false);
        expect(validateEmail('nicolas.rivera@')).toBe(false);
        expect(validateEmail('nicolas.rivera@scmlatam')).toBe(false);
        expect(validateEmail('nicolas.rivera@scmlatam.')).toBe(false);
        expect(validateEmail('nicolas.rivera@scmlatam.com')).toBe(true);
    })
})

/*
    1-) validar que el campo no este vacio.
    2-) validar que el campo tenga al menos 8 caracteres.
    3-) validar que el campo tenga al menos una letra mayuscula.
    4-) validar que el campo tenga al menos una letra minuscula.
    5-) validar que el campo tenga al menos un numero.
*/
describe('Validación de password', () => {
    test('validar que el campo no este vacio', () => {
        expect(validatePassword('')).toBe(false);
        expect(validatePassword(' ')).toBe(false);
    })

    test('validar que el campo tenga al menos 8 caracteres', () => {
        const pass  = '`Mt918=G'
        const error = '1234567'

        expect(validatePassword(pass)).toBe(true);
        expect(validatePassword(error)).toBe(false);
    })

    test('validar que el campo tenga al menos una letra mayuscula', () => {
        const pass  = '9R71s£=}'
        const error = '9r71s£=}'

        expect(validatePassword(pass)).toBe(true);
        expect(validatePassword(error)).toBe(false);
    })

    test('validar que el campo tenga al menos una letra minuscula', () => {
        const pass  = '5sC*9qO0'
        const error = '5SC*9QO0'

        expect(validatePassword(pass)).toBe(true);
        expect(validatePassword(error)).toBe(false);
    })
})

/*
    1-) validar que la
*/