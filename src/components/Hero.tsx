import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToBrands = () => {
    document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-yellow-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="text-6xl absolute top-20 left-10 opacity-20">🚀</div>
        <div className="text-6xl absolute top-40 right-20 opacity-20">💡</div>
        <div className="text-6xl absolute bottom-32 left-20 opacity-20">📱</div>
        <div className="text-6xl absolute bottom-20 right-10 opacity-20">✨</div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 opacity-0 animate-fadeIn">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-lg">Welcome to the Future</span>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Empowering Digital Media
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-blue-300 mb-4">
            Building the Future of Online Publishing 🌍
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeIn delay-200">
          Empire Tec LLC is a U.S.-based digital media company powering a diverse network of online brands that inspire, inform, and innovate. 🎯
        </p>

        <button
          onClick={scrollToBrands}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 opacity-0 animate-fadeIn delay-400"
        >
          Explore Our Media Network
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
