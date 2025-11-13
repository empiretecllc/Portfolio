import { ExternalLink, Newspaper, Sparkles, BookOpen, Bot, Plane } from 'lucide-react';

const brands = [
  {
    name: 'Black Howk',
    tagline: 'Pulse of Tomorrow: Your Media Edge on Tech & Innovation',
    description: 'Stay ahead of the curve with coverage of News, Tech, Sports, Travel, AI & Marketing Trends. Your definitive source for tomorrow\'s headlines today.',
    icon: Newspaper,
    color: 'from-slate-600 to-slate-700',
    shadow: 'shadow-slate-500/20',
    url: 'https://blackhowk.com',
  },
  {
    name: 'BloomDuke',
    tagline: 'Your Hub for Fashion, Entertainment & Lifestyle',
    description: 'Discover the latest in Fashion, Entertainment, Lifestyle & Marketing. Your go-to source for trends that define culture and inspire your world.',
    icon: Sparkles,
    color: 'from-pink-600 to-rose-600',
    shadow: 'shadow-pink-500/20',
    url: 'https://bloomduke.com',
  },
  {
    name: 'Bookish Duke',
    tagline: 'Your Daily Dose of Books, Style & Global Buzz',
    description: 'Explore Books, Movies, Creative Guides & Global News. Dive into stories, trends, and ideas that shape our world and spark your imagination.',
    icon: BookOpen,
    color: 'from-amber-600 to-yellow-600',
    shadow: 'shadow-amber-500/20',
    url: 'https://bookishduke.com',
  },
  {
    name: 'Black Robox',
    tagline: 'Explore the Latest in Fashion, Travel, Entertainment, News, and AI',
    description: 'Dive into News, AI Tools, Marketing, Tech, Travel & Fashion innovations. Your window into the intersection of technology and lifestyle.',
    icon: Bot,
    color: 'from-blue-600 to-cyan-600',
    shadow: 'shadow-blue-500/20',
    url: 'https://blackrobox.com',
  },
  {
    name: 'MittiPaoo',
    tagline: 'Your Destination for News, Lifestyle & Trends',
    description: 'Explore News, Finance, Entertainment, Travel & Sports. Your comprehensive guide to living well and staying informed in our dynamic world.',
    icon: Plane,
    color: 'from-emerald-600 to-teal-600',
    shadow: 'shadow-emerald-500/20',
    url: 'https://mittipaoo.com',
  },
];

export default function Brands() {
  return (
    <section id="brands" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">Media Brands</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A diverse portfolio of digital publications connecting audiences worldwide
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl flex flex-col"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${brand.shadow} shadow-lg`}>
                  <brand.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{brand.name}</h3>
                  <p className="text-blue-400 font-semibold text-sm leading-tight">{brand.tagline}</p>
                </div>
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed flex-grow">{brand.description}</p>

              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 w-fit"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://empiretecdigitalmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105"
          >
            Visit All Websites
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
