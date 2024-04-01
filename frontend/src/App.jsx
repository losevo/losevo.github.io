import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import NavBar from './elements/NavBar.jsx';
import RSS from './pages/RSS.jsx'
import MainRating from './elements/Rating/MainRating.jsx';
import ChangeLog from './elements/ChangeLog.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='rss' element={<RSS />} />
        <Route path='rating' element={<MainRating />} />
        <Route path='/changelog' element={<ChangeLog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
