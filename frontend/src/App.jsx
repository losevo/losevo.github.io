import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import NavBar from './elements/NavBar.jsx';
import Footer from './elements/Footer.jsx';
import RSS from './pages/RSS.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='rss' element={<RSS />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
