import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.module.css';
import About from './components/pages/about/About';
import Catalog from './components/pages/catalog/Catalog';
import Manage from './components/pages/manage/Manage';
import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header';

const App = () => {
  // added skip to content button
  // removed main element and made individual pages have the main element

  const handleMainContentFocus = () => {
    document.getElementById('main-content')?.setAttribute('tabindex', '-1');
  };

  return (
    <Router>
      <>
        <a
          onClick={handleMainContentFocus}
          href="#main-content"
          className="skip__link"
        >
          Skip to Main Content
        </a>
        <Header />
        <>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </>
        <Footer />
      </>
    </Router>
  );
};

export default App;
