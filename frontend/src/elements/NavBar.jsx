import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><Link to={'/'}>Главная</Link></li>
            </ul>
        </nav>
    )
};

export default NavBar;