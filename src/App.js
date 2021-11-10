import './App.css';
import "./responsive.css";
import Home from './components/home/home';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Resume from "../src/components/resume/resume";
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';




function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
