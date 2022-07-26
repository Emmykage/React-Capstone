import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Details from './components/detailspage';

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detailspage" element={<Details />} />

      </Routes>

    </div>
  );
}

export default App;
