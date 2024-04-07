import './NavBar.css';
import { Link } from 'react-router-dom';
import history from 'history/browser'

const NavBar = () => {
    
    return (
        <nav className='nav'>
            <ul>
                <li><Link onClick={() => history.back()}>{'<-'}</Link>{" "}<Link to={'/'}>{"Главная"}</Link></li>
                <li><Link to={'changelog'}>Журнал изменений</Link></li>
            </ul>
        </nav>
    )
};

export default NavBar;