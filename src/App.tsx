import Hero from './components/Hero';
import About from './components/About';
import Brands from './components/Brands';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <About />
      <Brands />
      <Contact />
    </div>
  );
}

export default App;
