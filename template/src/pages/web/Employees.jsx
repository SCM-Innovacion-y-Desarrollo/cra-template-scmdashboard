import React from 'react'
import Navbar from '../../components/navigation/web/Navbar'

const Employees = () => {
    return (
        <>
            <Navbar 
                view={{
                    title: 'Employees',
                    component: <> component </>
                }}
                right={{
                    title: 'Right',
                    component: <> componente </>
                }}
            />
        </>
    )
}

export { Employees } 