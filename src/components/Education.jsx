import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">

      {/* Torn paper divider at top (transition from red Experience section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Background visual elements */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-20">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Academics
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div
          data-aos="zoom-in"
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          {/* Cap icon */}
          <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 flex items-center justify-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.42A12.083 12.083 0 0119 15.5V19a1 1 0 01-1 1H6a1 1 0 01-1-1v-3.5c0-1.5.393-2.94 1.084-4.209L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9v6" />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="text-white text-xl md:text-2xl font-black tracking-tight mb-1">
              {education.degree}
            </h3>
            <p className="text-red-400 text-sm font-bold font-mono tracking-wide uppercase mb-1">
              {education.institution}{education.location ? ` · ${education.location}` : ''}
            </p>
            <p className="text-white/50 text-sm font-semibold">
              {education.duration}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
