import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/about/About';
import Catalog from './components/pages/catalog/Catalog';
import Manage from './components/pages/manage/Manage';
import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
