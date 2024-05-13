import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LatestProducts from "./components/LatestProducts";
import { latestProductItems } from "./utils/data";
import LogoCarousel from "./components/LogoCarousel";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <LogoCarousel />
      <LatestProducts  latestProductItems={latestProductItems}/>
    </div>
  );
}

export default App;
