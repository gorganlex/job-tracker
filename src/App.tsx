import { Link, Route, Routes } from 'react-router';
import './App.css';
import { ApplicationsList } from './pages/ApplicationsList';
import { Settings } from './pages/Settings';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ApplicationsList />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default App;
