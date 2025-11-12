import Hero from './components/Hero';
import About from './components/About';
import Brands from './components/Brands';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <About />
      <Brands />
      <Contact />
    </div>
  );
}

export default App;
