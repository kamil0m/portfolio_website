import {
    NavLink,
    Outlet
} from 'react-router-dom';

export function MainLayout() {
    return (
        <>
            <div className='container'>    
                <nav className='navbar' >
                    <ul className="navbar__links">
                        <NavLink className="navbar__element" to="/">Home</NavLink>
                        <NavLink className="navbar__element" to="/aboutme">About me</NavLink>
                        <NavLink className="navbar__element" to="/projects">My projects</NavLink>
                        <NavLink className="navbar__element" to="/skills">My skills</NavLink>     
                        <NavLink className="navbar__element" to="/contact">Contact</NavLink>
                    </ul>
                </nav>
            </div>
            <Outlet/>
        </>
    )
}