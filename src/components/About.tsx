export default function About() {
  return (
    <section className="py-24 px-6 relative bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Empire Tec Digital Media</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
            Empire Tec LLC operates under <span className="text-blue-600 font-semibold">Empire Tec Digital Media</span>, specializing in building niche media brands that connect global audiences through creativity, innovation, and storytelling.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We curate diverse content experiences across multiple platforms, reaching audiences passionate about technology, fashion, literature, travel, and digital innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
