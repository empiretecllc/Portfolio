import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToBrands = () => {
    document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 opacity-0 animate-fadeIn">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
            Empowering Digital Media
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-600 mb-4">
            Building the Future of Online Publishing
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeIn delay-200">
          Empire Tec LLC is a U.S.-based digital media company powering a diverse network of online brands that inspire, inform, and innovate.
        </p>

        <button
          onClick={scrollToBrands}
          className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 opacity-0 animate-fadeIn delay-400"
        >
          Explore Our Media Network
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
