import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Dashboard } from '../pages/Dashboard'
import { ViewPost } from '../pages/ViewPost'

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts/:id" element={<ViewPost/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}