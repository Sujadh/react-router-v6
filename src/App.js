import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import About from './pages/AboutPage/About';
import AboutPage from './pages/AboutPage/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='contents'>
      <Routes>
        <Route path="/" element={<MainPage />} >
          <Route index element={<About />} />         
        </Route>
        <Route path="/about/:id" element={<AboutPage />} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
