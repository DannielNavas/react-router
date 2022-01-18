import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'text-danger' : ''} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/hola">Hola</NavLink>
                </li>
            </ul>
        </nav>
    );
}