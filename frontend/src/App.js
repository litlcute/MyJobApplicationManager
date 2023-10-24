import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import LoginPage from './component/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
