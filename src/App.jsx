// library
import { BrowserRouter } from 'react-router-dom';

// src/assets
import './assets/myreset.css';

// src/routes
import Router from './routes';

// src/components
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scroll/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
