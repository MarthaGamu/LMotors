import './App.css';
import Brands from './Components/Brands';
import Footer from './Components/Footer';
import HeroBanner from './Components/HeroBanner';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <Welcome />
      <Services />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
