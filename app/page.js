"use client";

import { EnvelopeIcon, MapPinIcon, DocumentArrowDownIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showWorkImage, setShowWorkImage] = useState(false);

  const fullText = "Nelvim John M. Anoc";

  useEffect(() => {
    setIsLoaded(true);
    
    // Typing animation
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    // Scroll progress
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { name: 'JavaScript',  color: 'from-yellow-400 to-orange-500' },
    { name: 'HTML/CSS',  color: 'from-blue-400 to-blue-600' },
    { name: 'Next.js',  color: 'from-gray-400 to-gray-600' },
    { name: 'Tailwind CSS',  color: 'from-cyan-400 to-blue-500' },
    { name: 'React',  color: 'from-blue-300 to-blue-500' },
    { name: 'Node.js',  color: 'from-green-400 to-green-600' }
  ];

  const projects = [
    {
      title: "Air Quality Monitor",
      description: "Developed a safety system using microcontrollers to detect gasoline leaks in restaurants. Real-time air quality monitoring and automatic alerts were key features.",
      tech: ["Arduino", "Sensors", "Real-time Data"],
      status: "Thesis Project",
      icon: "🛡️"
    },
  ];

  const CircularProgress = ({ percentage, color, children }) => (
    <div className="relative w-24 h-24 mx-auto">
      <svg className="w-24 h-24 transform -rotate-90">
        <circle
          cx="48"
          cy="48"
          r="40"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="48"
          cy="48"
          r="40"
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${2 * Math.PI * 40}`}
          strokeDashoffset={`${2 * Math.PI * 40 * (1 - percentage / 100)}`}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="text-blue-400" stopColor="currentColor" />
            <stop offset="100%" className="text-purple-400" stopColor="currentColor" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold">{percentage}%</span>
      </div>
    </div>
  );

  const ContactForm = () => (
    <div className={`fixed inset-0 z-50 ${showContactForm ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowContactForm(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gradient-to-br from-slate-900 to-purple-900 p-6 shadow-2xl transform transition-transform duration-300">
        <button 
          onClick={() => setShowContactForm(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl cursor-pointer"
        >
          ×
        </button>
        <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect!</h3>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea 
            placeholder="Your Message" 
            rows="4"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button 
            onClick={() => setShowContactForm(false)}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 text-gray-900'} relative overflow-hidden`}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md ${darkMode ? 'bg-white/10' : 'bg-black/10'} border-b border-white/20`}>
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Nelvim John M. Anoc
          </h1>
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex gap-6 text-sm font-medium">
              {['education', 'thesis', 'projects', 'experience', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="hover:text-blue-400 transition-colors duration-300 relative group capitalize">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
              <img 
                src="/images/pfp.jpg" 
                alt="Profile Picture" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent min-h-[4rem]">
             {typedText}
             <span className="animate-pulse">|</span>
           </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-4">Information Technology Graduate</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
             Enthusiastic about web development and committed to continuous learning.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
             <button 
               onClick={() => setShowContactForm(true)}
               className="cursor-pointer px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
             >
               Get In Touch
             </button>
            </div>
           <div className="flex justify-center gap-6">
             <a href="https://github.com/StinkyJeans" className="text-2xl hover:text-blue-400 transition-colors duration-300 hover:scale-125 transform">
               <FaGithub />
             </a>
             <a href="https://www.linkedin.com/in/nelvim-john-anoc-6762a0374/" className="text-2xl hover:text-blue-400 transition-colors duration-300 hover:scale-125 transform">
                <FaLinkedin />
              </a>
           </div>
         </div>
       </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-24 relative z-10">
        {/* Education */}
        <section id="education" className="group">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className={`backdrop-blur-xl ${darkMode ? 'bg-white/10' : 'bg-black/10'} cursor-pointer rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl`}>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                🎓
              </div>
              <div>
                <p className="text-xl font-medium">Bachelor of Science in Information Technology</p>
                <p className="text-gray-400 mt-2">
                  Specialized in web development, systems analysis, and technology implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Thesis */}
        <section id="thesis" className="group">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Thesis Project
          </h2>
          <div className={`backdrop-blur-xl ${darkMode ? 'bg-white/10' : 'bg-black/10'} cursor-pointer rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl`}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-2xl">
                🛡️
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  Enhancing Safety: Implementing Microcontroller-Based Air Quality Monitoring Systems for Gasoline Leak Detection in Restaurants
                </h3>
                <p className="text-gray-400 mt-2 mb-4">
                  Developed a safety system using microcontrollers to detect gasoline leaks in restaurants.
                  Real-time air quality monitoring and automatic alerts were key features.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Real-time gas detection', 'Automatic safety alerts', 'Data monitoring and logging'].map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="group">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid  gap-8 cursor-pointer">
            {projects.map((project, index) => (
              <div key={index} className={`backdrop-blur-xl ${darkMode ? 'bg-white/10' : 'bg-black/10'} rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group`}>
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{project.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="group">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className={`backdrop-blur-xl ${darkMode ? 'bg-white/10' : 'bg-black/10'} cursor-pointer rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl`}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-2xl">
                💼
              </div>
              <div className="flex-1">
                <p className="text-xl font-medium">On-the-Job Training</p>
                <p className="text-gray-400 mt-2">
                  I participated in the development of a church project based in Butuan City, which aimed to upgrade their old system for booking and management; the project's scope covers the entire Philippines and provided me with hands-on experience in full-stack development.
                </p>
                <div className="flex justify-end mt-5">
                  <button 
                    onClick={() => setShowWorkImage(!showWorkImage)}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                  >
                    View Details →
                  </button>
                </div>
                
                {/* Image that appears when View Details is clicked */}
                {showWorkImage && (
                  <div className="mt-6 overflow-hidden rounded-xl transition-all duration-500 ease-in-out">
                    <img 
                      src="/images/DIO.png" 
                      alt="Work Experience Project" 
                      className="w-full h-full object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-center text-gray-400 text-sm mt-2">
                      Church Management System Development Project
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
          <section id="skills" className="group">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
             Technical Skills
           </h2>
           <div className={`backdrop-blur-xl ${darkMode ? 'bg-white/10' : 'bg-black/10'} cursor-pointer rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/30 transition-all duration-500 transform`}>
             <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-blue-400">Programming Languages</h4>
                 <p className="text-gray-400 mb-6">JavaScript, HTML, CSS</p>
               </div>
               <div>
                 <h4 className="text-xl font-semibold mb-6 text-purple-400">Web Development</h4>
                 <p className="text-gray-400 mb-6">Next.js, Tailwind CSS</p>
               </div>
             </div>
            </div>
          </section>

        {/* Contact */}
        <section id="contact" className="group">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className={`backdrop-blur-xl ${darkMode ? 'bg-white/10' : 'bg-black/10'} rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl text-center space-y-6`}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href="mailto:anocnelvimjohn@gmail.com" 
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>anocnelvimjohn@gmail.com</span>
              </a>
              <a 
                href="https://github.com/StinkyJeans" 
                className="flex items-center gap-3 px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
                <span>github.com/StinkyJeans?tab=repositories</span>
              </a>
              <div className="flex items-center gap-3 px-6 py-3 text-gray-400">
                <MapPinIcon className="h-5 w-5 text-red-400" />
                <span>Butuan City, Philippines</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Download Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-30">
        <DocumentArrowDownIcon className="w-6 h-6 text-white" />
      </button>

      {/* Contact Form Modal */}
      <ContactForm />
    </main>
  );
}