import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import LogoStrip from './components/LogoStrip.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

import Members from './pages/Members.jsx';
import News from './pages/News.jsx';
import Events from './pages/Events.jsx';
import Gallery from './pages/Gallery.jsx';
import Admin from './pages/Admin.jsx';
import About from './pages/About.jsx';
import Careers from './pages/Careers.jsx';
import Contribute from './pages/Contribute.jsx';
import Engage from './pages/Engage.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Blog from './pages/Blog.jsx';
import ContactUs from './pages/ContactUs.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/members" element={<Members />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/contribute" element={<Contribute />} />
                        <Route path="/engage" element={<Engage />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/admin" element={<PrivateRoute role="admin"><Admin /></PrivateRoute>} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        
                    </Routes>
                </main>
                <LogoStrip />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
