import { Routes, Route } from 'react-router-dom'

import { NewPost } from '../pages/NewPost'
import { Home } from '../pages/Home'
import { Dashboard } from '../pages/Dashboard'
import { SignIn } from '../pages/SignIn'
import { ViewPost } from '../pages/ViewPost'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts/:id" element={<ViewPost/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/newpost" element={<NewPost/>}/>
        </Routes>
    )
}