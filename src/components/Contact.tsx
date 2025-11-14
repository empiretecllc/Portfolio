import { Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    handle: '@empire_tec_digital_media',
    url: 'https://www.instagram.com/empire_tec_digital_media/',
    color: 'from-pink-500 to-rose-600',
    hoverColor: 'hover:from-pink-400 hover:to-rose-500',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    handle: 'Empire Tec LLC',
    url: 'https://www.facebook.com/people/Empire-Tec-LLC/61582182041218/#',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-500 hover:to-blue-600',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    handle: 'Empire Tec LLC',
    url: 'https://linkedin.com/company/empire-tec-llc',
    color: 'from-blue-700 to-cyan-600',
    hoverColor: 'hover:from-blue-600 hover:to-cyan-500',
  },
];

export default function Contact() {
  return (
    <section className="py-24 px-6 relative bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's <span className="text-blue-600">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:empiretec.llc@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    empiretec.llc@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700">Denver, Colorado, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Follow Our Social Channels</h3>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <social.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{social.name}</h4>
                  <p className="text-gray-600 text-sm">{social.handle}</p>
                </div>
                <svg className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <footer className="text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Empire Tec LLC. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
