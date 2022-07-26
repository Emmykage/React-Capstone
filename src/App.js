import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/Header';
import Details from './components/pages/detailspage';
import Category from './components/pages/category';

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detailspage" element={<Details />} />
        <Route path="category" element={<Category />} />

      </Routes>

    </div>
  );
}

export default App;
