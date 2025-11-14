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
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">💬</div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email 📧</h3>
                  <a
                    href="mailto:empiretec.llc@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    empiretec.llc@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Location 📍</h3>
                  <p className="text-slate-300">Denver, Colorado, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Follow Our Social Channels 🌟</h3>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <social.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{social.name}</h4>
                  <p className="text-slate-400 text-sm">{social.handle}</p>
                </div>
                <svg className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <footer className="text-center border-t border-slate-700/30 pt-8">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Empire Tec LLC. All rights reserved. 💙
          </p>
        </footer>
      </div>
    </section>
  );
}
