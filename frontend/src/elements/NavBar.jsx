import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to={'about'} >О себе</Link></li>
                <li><Link to={'projects'}>Проекты</Link></li>
                <li><Link to={'contacts'}>Контакты</Link></li>
            </ul>
        </div>
    )
};

export default NavBar;