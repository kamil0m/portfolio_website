import {
    NavLink,
    Outlet
} from 'react-router-dom';

// export function MainLayout() {
//     return (
//         <>
//             <div className='background'></div>
//             <div className='container navbar__container'>    
//                 <nav className='navbar' >
//                     <ul className="navbar__links">
//                         <li><NavLink className="navbar__element" to="/" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>Home</NavLink></li>
//                         <li>
//                             <NavLink className="navbar__element" to="/aboutme">About me</NavLink>
//                         </li>
//                         <li className='tab-current'>
//                             <NavLink className="navbar__element" to="/projects">My projects</NavLink>
//                         </li>
//                         <li>
//                             <NavLink className="navbar__element" to="/skills">My skills</NavLink>     
//                         </li>
//                         <li>
//                             <NavLink className="navbar__element" to="/contact">Contact</NavLink>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//             <Outlet/>
//         </>
//     )
// }

export function MainLayout() {
    return (
        <>
            <div className='background'></div>
            <div className='container navbar__container'>    
                <nav className='navbar' >
                    <NavLink className="navbar__element" to="/" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>Home</NavLink>

                    <NavLink className="navbar__element" to="/aboutme" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>About me</NavLink>

                    <NavLink className="navbar__element" to="/projects" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>My projects</NavLink>
                
                    <NavLink className="navbar__element" to="/skills" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>My skills</NavLink>     
                
                    <NavLink className="navbar__element" to="/contact" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>Contact</NavLink>
                    
                </nav>
            </div>
            <Outlet/>
        </>
    )
}