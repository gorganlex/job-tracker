import { useState } from 'react';
import './App.css';
import { seedApplications } from './data/seedApplications';
import { ApplicationsTable } from './components/ApplicationsTable';

export const App = () => {
  const [applications] = useState([...seedApplications]);

  return <ApplicationsTable applications={applications} />;
};

export default App;
