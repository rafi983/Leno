import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Preview from './components/Preview';
import Details from './components/Details';
import Screenshots from './components/Screenshots';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Testimonials />
      <Features />
      <Preview />
      <Details />
      <Screenshots />
      <Download />
      <Footer />
    </>
  );
}

export default App;

