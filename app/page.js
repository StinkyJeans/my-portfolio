import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-blue-600">Nelvim John M. Anoc</h1>
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li><a href="#education" className="hover:text-blue-500">Education</a></li>
            <li><a href="#thesis" className="hover:text-blue-500">Thesis</a></li>
            <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-purple-100 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">Nelvim John M. Anoc</h2>
          <p className="text-xl text-gray-700">Information Technology Graduate</p>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Enthusiastic about web development and committed to continuous learning.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Education */}
        <section id="education">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-lg font-medium">Bachelor of Science in Information Technology</p>
            <p className="text-gray-700 mt-2">
              Specialized in web development, systems analysis, and technology implementation.
            </p>
          </div>
        </section>

        {/* Thesis */}
        <section id="thesis">
          <h2 className="text-3xl font-bold mb-4">Thesis Project</h2>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-blue-600">
              Enhancing Safety: Implementing Microcontroller-Based Air Quality Monitoring Systems for Gasoline Leak Detection in Restaurants
            </h3>
            <p className="text-gray-700 mt-2">
              Developed a safety system using microcontrollers to detect gasoline leaks in restaurants.
              Real-time air quality monitoring and automatic alerts were key features.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>Real-time gas detection</li>
              <li>Automatic safety alerts</li>
              <li>Data monitoring and logging</li>
            </ul>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-lg">On-the-Job Training</p>
            <p className="text-gray-700 mt-2">
              I participated in the development of a church project based in Butuan City, which aimed to upgrade their old system for booking and management; the project's scope covers the entire Philippines and provided me with hands-on experience in full-stack development.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="bg-white rounded-xl shadow p-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Programming Languages</h4>
              <p>JavaScript, HTML, CSS</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Web Development</h4>
              <p>Next.js, Tailwind CSS</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
          <div className="bg-white rounded-xl shadow p-6 text-center space-y-2">
            <div className="flex justify-center items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-blue-600" />
              <a href="mailto:anocnelvimjohn@gmail.com" className="text-blue-600 underline">
               anocnelvimjohn@gmail.com
             </a>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FaGithub className="w-5 h-5 text-gray-700" />
              <p>github.com/StinkyJeans</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-red-500" />
              <p>Butuan City, Philippines</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
