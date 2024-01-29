import GoogleIcon from '@mui/icons-material/Google';
import WindowIcon from '@mui/icons-material/Window';
import CustomButton from '../components/Button';

export default {
    title: 'Demo/Button',
    component: CustomButton,
    // https://storybook.js.org/docs/essentials/controls
    argTypes: {
        variant: { 
            options: ['contained', 'outlined', 'text'],
            control: { type: 'select' },
        },
        color: {
            options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
            control: { type: 'select' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        disableElevation: {
            control: { type: 'boolean' },
        },
        startIcon: {
            control: { type: 'object' },
        },
        endIcon: {
            control: { type: 'object' },
        },
        loading: {
            control: { type: 'boolean' },
        },
        text: {
            control: { type: 'text' },
        },
    }
}

export const Default = (args) => <CustomButton {...args} />

Default.args = {
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    disabled: false,
    disableElevation: true,
    startIcon: null,
    endIcon: null,
    loading: false,
    text: 'Button',
}

export const SignOnWithGoogle = (args) => <CustomButton {...args} />

SignOnWithGoogle.args = {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
    disableElevation: true,
    startIcon: null,
    endIcon: <GoogleIcon />,
    loading: false,
    text: 'Sign on with',
}

export const SignOnWithMicrosoft = (args) => <CustomButton {...args} />

SignOnWithMicrosoft.args = {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
    disableElevation: true,
    startIcon: null,
    endIcon: <WindowIcon />,
    loading: false,
    text: 'Sign on with',
}