export default function About() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">Empire Tec Digital Media</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
            Empire Tec LLC operates under <span className="text-blue-400 font-semibold">Empire Tec Digital Media</span>, specializing in building niche media brands that connect global audiences through creativity, innovation, and storytelling.
          </p>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            We curate diverse content experiences across multiple platforms, reaching audiences passionate about technology, fashion, literature, travel, and digital innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
