import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes' 
import Footer from './components/Footer';

const App = () => {
  const apiKey = '2862413eb1d9c4d5f49401c6ff8bdda0';

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
