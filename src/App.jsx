// library
import { BrowserRouter } from 'react-router-dom';

// src/assets
import './assets/myreset.css';

// src/routes
import Router from './routes';

// src/components
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
