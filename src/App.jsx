import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes' 
import Footer from './components/Footer';

const App = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <Router>
      <div>
        <Routes apiKey={apiKey} />
      </div>
      <Footer>
        <p>&copy; 2025 Previsão do Tempo - Bruno Caian.</p>
      </Footer>
    </Router>
  );
};

export default App;
