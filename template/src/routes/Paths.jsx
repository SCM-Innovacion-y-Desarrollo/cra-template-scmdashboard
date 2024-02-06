import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import { SignIn } from '../pages/common/SignIn'
import { Employees } from '../pages/web/Employees'
import { Employees as EmployeesMobile } from '../pages/mobile/Employees'

const WebPaths = () => {
    const { authenticated } = useContext(GlobalContext)

    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={ authenticated ? <Navigate to={'/employees'}/> : <Navigate to={'/signin'}/> }
                        exact
                    />

                    <Route
                        path='/signin'
                        element={ authenticated ? <Navigate to={'/'}/> : <SignIn /> }
                        exact
                    />

                    <Route
                        path='/employees'
                        element={ authenticated ? <Employees /> : <Navigate to={'/signin'}/> }
                        exact
                    />

                    <Route path='*' element={<>404 page not found</>}/>
                </Routes>
            </Router>
        </>
    )
}
const MobilePaths = () => {
    const { authenticated } = useContext(GlobalContext)

    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={ authenticated ? <Navigate to={'/employees'}/> : <Navigate to={'/signin'}/> }
                        exact
                    />

                    <Route
                        path='/signin'
                        element={ authenticated ? <Navigate to={'/'}/> : <SignIn /> }
                        exact
                    />

                    <Route
                        path='/employees'
                        element={ authenticated ? <EmployeesMobile /> : <Navigate to={'/signin'}/> }
                        exact
                    />

                    <Route path='*' element={<>404 page not found</>}/>
                </Routes>
            </Router>
        </>
    )
}


export {
    WebPaths,
    MobilePaths
}