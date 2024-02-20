import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><Link to={{
                    pathname: '/',
                    hash: "#about"
                    }} >О себе</Link></li>
                <li><Link to={'projects'}>Проекты</Link></li>
                <li><Link to={'contacts'}>Контакты</Link></li>
            </ul>
        </nav>
    )
};

export default NavBar;