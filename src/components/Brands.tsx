import { ExternalLink } from 'lucide-react';

const brands = [
  {
    name: 'Black Howk',
    tagline: 'Pulse of Tomorrow: Your Media Edge on Tech & Innovation',
    description: 'Stay ahead of the curve with coverage of News, Tech, Sports, Travel, AI & Marketing Trends. Your definitive source for tomorrow\'s headlines today.',
    logo: '/Blackhowk.png',
    color: 'from-slate-600 to-slate-700',
    shadow: 'shadow-slate-500/20',
    url: 'https://blackhowk.com',
  },
  {
    name: 'BloomDuke',
    tagline: 'Your Hub for Fashion, Entertainment & Lifestyle',
    description: 'Discover the latest in Fashion, Entertainment, Lifestyle & Marketing. Your go-to source for trends that define culture and inspire your world.',
    logo: '/bloomduke.png',
    color: 'from-pink-600 to-rose-600',
    shadow: 'shadow-pink-500/20',
    url: 'https://bloomduke.com',
  },
  {
    name: 'Bookish Duke',
    tagline: 'Your Daily Dose of Books, Style & Global Buzz',
    description: 'Explore Books, Movies, Creative Guides & Global News. Dive into stories, trends, and ideas that shape our world and spark your imagination.',
    logo: '/bookish-duke-logo-empire-tec-llc.png',
    color: 'from-amber-600 to-yellow-600',
    shadow: 'shadow-amber-500/20',
    url: 'https://bookishduke.com',
  },
  {
    name: 'Black Robox',
    tagline: 'Explore the Latest in Fashion, Travel, Entertainment, News, and AI',
    description: 'Dive into News, AI Tools, Marketing, Tech, Travel & Fashion innovations. Your window into the intersection of technology and lifestyle.',
    logo: '/black-robox-logo.png',
    color: 'from-blue-600 to-cyan-600',
    shadow: 'shadow-blue-500/20',
    url: 'https://blackrobox.com',
  },
  {
    name: 'MittiPaoo',
    tagline: 'Your Destination for News, Lifestyle & Trends',
    description: 'Explore News, Finance, Entertainment, Travel & Sports. Your comprehensive guide to living well and staying informed in our dynamic world.',
    logo: '/mittipaoo.png',
    color: 'from-emerald-600 to-teal-600',
    shadow: 'shadow-emerald-500/20',
    url: 'https://mittipaoo.com',
  },
];

export default function Brands() {
  return (
    <section id="brands" className="py-24 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Media Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse portfolio of digital publications connecting audiences worldwide
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg flex flex-col"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img src={brand.logo} alt={`${brand.name} logo`} className="w-full h-full object-contain p-2" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{brand.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm leading-tight">{brand.tagline}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed flex-grow">{brand.description}</p>

              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-md w-fit"
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
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-md"
          >
            Visit All Websites
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
