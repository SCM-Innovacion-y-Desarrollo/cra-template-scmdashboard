import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { GlobalContext } from '../GobalContext'
import { SignOn } from '../pages/SignOn'
import { Employees } from '../pages/Employees'

export const Paths = () => {
    const { authenticated } = useContext(GlobalContext)

    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={ authenticated ? <Employees /> : <Navigate to={'/signon'}/> }
                        exact
                    />

                    <Route
                        path='/signon'
                        element={ authenticated ? <Navigate to={'/'}/> : <SignOn /> }
                        exact
                    />

                </Routes>
            </Router>
        </>
    )
}
