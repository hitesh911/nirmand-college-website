import {BrowserRouter ,Routes,Route , useLocation} from "react-router-dom"
import { useEffect } from "react";
// ---------importing componenets -------
import Header from './components/Header';
import Footer from './components/Footer';
// ------imprting pages ------
import HomePage from './pages/HomePage';
import CourcesPage from './pages/CourcesPage'
import Notification from "./pages/NotificationPage"
import BlogsPage from './pages/BlogsPage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import SignUpPage from './pages/SignUpPage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';
import {NotificationContainer} from 'react-notifications';
// -------import styles ------
import "./styles/Global.css"
// external libs css 
import 'react-notifications/lib/notifications.css';
import 'animate.css';
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

function App() {
  return (
    <BrowserRouter> 
    <NotificationContainer/>
    <ScrollToTop>
    <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cources" element={<CourcesPage />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

    </Routes>
    <Footer />
    </ScrollToTop>
  </BrowserRouter>
  );
}

export default App;
