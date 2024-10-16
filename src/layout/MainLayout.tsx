import {
    NavLink,
    Outlet
} from 'react-router-dom';

export function MainLayout() {
    return (
        <>
            <nav className='navbar' >
                <ul className="navbar__links">
                    <NavLink className="navbar__element" to="/">Home</NavLink>
                    <NavLink className="navbar__element" to="/aboutme">About me</NavLink>
                    <NavLink className="navbar__element" to="/">My projects</NavLink>
                    <NavLink className="navbar__element" to="/">My skills</NavLink>     
                    <NavLink className="navbar__element" to="/">Contact</NavLink>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}