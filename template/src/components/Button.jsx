import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';

const CustomButton = ({variant, color, size, disabled, disableElevation, text, startIcon, endIcon, loading}) => {
    const { t } = useTranslation()

    return (
        <>
            <LoadingButton 
                variant={variant}
                color={color}
                size={size}
                disabled={disabled}
                disableElevation={disableElevation}
                startIcon={startIcon}
                endIcon={endIcon}
                loading={loading}
            >
                { t('sign_on') }
            </LoadingButton>
        </>
    )
}

export default CustomButton