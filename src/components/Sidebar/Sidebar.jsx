import { NavLink } from 'react-router'
import './Sidebar.css'

function Sidebar() {
    return (
        <aside className='sidebar'>
            <div className="sidebar__logo-container">
                <h1 className="sidebar__logo">DevProfiles</h1>
            </div>
            
            <nav className="sidebar__nav">
                <NavLink className="sidebar__link" to='/' >
                    Home
                </NavLink>

                <NavLink className="sidebar__link" to='/dev/crear' >
                    Crear Perfil
                </NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar
