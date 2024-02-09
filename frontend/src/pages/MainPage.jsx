import './MainPage.css';
import NavBar from '../elements/NavBar';
import Footer from '../elements/Footer';

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <div className='main'>
        <div className="greetings">
          <div className="center-box">
            <h1 className="center-h">Привет! </h1>
            <h1> Меня зовут Дмитрий</h1>
            <p>Начинающий веб-разработчик из Санкт-Петербурга</p>
            <p>И это мой сайт-визитка:)</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
