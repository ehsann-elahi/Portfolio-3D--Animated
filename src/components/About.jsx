import stackImage from '../assets/about/ehsan-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const LaravelIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#FF2D20" d="M64 6l50 28.9v58L64 122 14 92.9v-58L64 6z" opacity="0.12" />
      <path fill="#FF2D20" d="M92 34.5v27.8c0 1-.53 1.93-1.4 2.43l-23.6 13.63v27.02c0 1-.53 1.93-1.4 2.43l-24.9 14.38c-.87.5-1.93.5-2.8 0L13 108.17c-.87-.5-1.4-1.43-1.4-2.43V51.9c0-1 .53-1.93 1.4-2.43l24.9-14.38c.87-.5 1.93-.5 2.8 0l24.9 14.38c.87.5 1.4 1.43 1.4 2.43v27l20.8-12.02V34.5c0-1 .53-1.93 1.4-2.43l24.9-14.38c.87-.5 1.93-.5 2.8 0l1.4.81-25.5 15.99-.6.01zM39.1 40.2L16.8 53.09v25.78L39.1 91.76l22.3-12.89V53.09L39.1 40.2z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Laravel</span>
  </div>
);

const AIIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="15" fill="#A78BFA" />
      <g stroke="#A78BFA" strokeWidth="4" fill="none">
        <circle cx="64" cy="64" r="34" strokeDasharray="6 8" />
        <line x1="64" y1="16" x2="64" y2="30" />
        <line x1="64" y1="98" x2="64" y2="112" />
        <line x1="16" y1="64" x2="30" y2="64" />
        <line x1="98" y1="64" x2="112" y2="64" />
        <line x1="30" y1="30" x2="40" y2="40" />
        <line x1="88" y1="88" x2="98" y2="98" />
        <line x1="98" y1="30" x2="88" y2="40" />
        <line x1="40" y1="88" x2="30" y2="98" />
      </g>
      <circle cx="64" cy="16" r="6" fill="#A78BFA" />
      <circle cx="64" cy="112" r="6" fill="#A78BFA" />
      <circle cx="16" cy="64" r="6" fill="#A78BFA" />
      <circle cx="112" cy="64" r="6" fill="#A78BFA" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">AI &amp; RAG</span>
  </div>
);

const MobileIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#02569B" d="M70 8L20 58l16 16 50-50-16-16z"/>
      <path fill="#02569B" opacity="0.6" d="M36 74L20 90l16 16 34-34-18-18-16 20z"/>
      <path fill="#7F52FF" d="M70 106l-18-18 18-18 18 18-18 18z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Flutter &amp; Kotlin</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage}
                  alt="Ehsan Elahi — Backend Developer & AI Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <LaravelIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <AIIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MobileIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
