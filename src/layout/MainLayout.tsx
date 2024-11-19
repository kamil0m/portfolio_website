import { useRef } from 'react';
import {
    NavLink,
    Outlet
} from 'react-router-dom';



export function MainLayout() {

    const checkboxRef = useRef(null);

    const closeMenu = () => {
        checkboxRef.current.checked = false;
    }

 
    // napisz obsluge blur z navbar container tak aby uncheck the checkbox
    return (
        <>
            <div className='background'></div>
            <div className='container navbar__container' onMouseLeave={closeMenu} >    

                <input 
                    className="hamburger__trigger" 
                    type="checkbox" 
                    id="trigger"
                    ref={checkboxRef}
                />
                <label className="hamburger__label" htmlFor="trigger" >
                    <i className='fa-solid fa-bars hamburger__icon'></i>
                </label>
                <nav className='navbar' onClick={closeMenu} >
                    <NavLink to="/" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>Home</NavLink>

                    <NavLink to="/aboutme" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>About me</NavLink>

                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>My projects</NavLink>
                
                    <NavLink to="/skills" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>My skills</NavLink>     
                
                    <NavLink className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'} to="/contact" >Contact</NavLink>
                </nav>
            </div>
            <Outlet/>
        </>
    )
}