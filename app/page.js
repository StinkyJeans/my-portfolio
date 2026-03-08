"use client";

import { EnvelopeIcon, MapPinIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import ConctactForm from "./modal/conctactForm";
import ImageModal from "./modal/ImageModal";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fullText = "Nelvim John M. Anoc";

  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Supabase",
    "PostgreSQL",
    "Claude (Anthropic)",
    "Cursor IDE",
    "AI-Assisted Development",
    "Vibe Coding",
  ];

  const featuredApps = [
    {
      title: "Gas Leak Detection Thesis Project",
      description:
        "Enhancing Safety: Implementing a microcontroller-based air quality monitoring system for gasoline leak detection in restaurants with real-time alerts.",
      badge: "Academic Thesis",
      tech: ["Arduino", "Sensors", "Real-time Monitoring"],
      image: "/images/TEst.png",
    },
    {
      title: "Resume Web App",
      description:
        "A personal resume site highlighting my vibe-coding workflow and AI-assisted full-stack development approach.",
      url: "https://resume-nelvim.vercel.app/resume_nelvim.html",
      badge: "Personal Branding",
      tech: ["Next.js", "JavaScript", "Claude + Cursor"],
    },
    {
      title: "Totally Normal Store",
      description:
        "A deployed ecommerce project with product browsing and customer-facing shopping flow.",
      url: "https://totallynormalstore.vercel.app/",
      badge: "Ecommerce",
      tech: ["Next.js", "Frontend UI", "Deployment"],
    },
    {
      title: "Tally POS & Inventory System",
      description:
        "A web-based POS and inventory system for daily sales operations, barcode scanning, stock deduction, and admin-side management.",
      url: "https://tally-pos.vercel.app/",
      secondaryUrl: "https://tally-pos-admin.vercel.app/",
      badge: "Web POS",
      tech: ["POS", "Inventory", "Admin Dashboard"],
      images: [
        "/images/tally-admin-inventory.png",
        "/images/tally-admin-sales.png",
        "/images/tally-admin-audit.png",
      ],
    },
  ];

  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => {
        const pseudoRandom = (salt) => {
          const value = Math.sin((i + 1) * 991 + salt * 971) * 10000;
          return value - Math.floor(value);
        };

        return {
          left: `${(pseudoRandom(1) * 100).toFixed(4)}%`,
          top: `${(pseudoRandom(2) * 100).toFixed(4)}%`,
          animationDelay: `${(pseudoRandom(3) * 2).toFixed(5)}s`,
          animationDuration: `${(2 + pseudoRandom(4) * 2).toFixed(5)}s`,
        };
      }),
    []
  );

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index += 1;
      } else {
        clearInterval(timer);
      }
    }, 95);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fullText]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowContactModal(false);
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-slate-950 text-slate-100"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-900"
      }`}
    >
      <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-black/20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute h-2 w-2 rounded-full bg-blue-400/40 animate-pulse"
            style={particle}
          />
        ))}
        <div className="absolute -top-1/3 right-[-10%] h-[35rem] w-[35rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-1/3 left-[-10%] h-[35rem] w-[35rem] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl ${
          darkMode ? "border-white/10 bg-slate-900/60" : "border-slate-300/60 bg-white/70"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Nelvim<span className="text-blue-500">.dev</span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#projects" className="transition hover:text-blue-500">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-blue-500">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-blue-500">
              Contact
            </a>
          </div>

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={`rounded-full p-2 transition ${
              darkMode ? "hover:bg-white/10" : "hover:bg-slate-200"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <section id="home" className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-20 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
              Open to Work - Web Developer
            </p>
            <h1 className="mb-4 min-h-[4rem] text-4xl font-extrabold leading-tight md:text-6xl">
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse text-blue-400">|</span>
            </h1>
            <p className={`mb-7 max-w-xl text-base md:text-lg ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              Fresh BSIT graduate from Butuan City focused on building modern full-stack web apps with
              clean UI, practical backend integration, and strong product thinking. I use an AI-assisted
              workflow with Claude and Cursor IDE to ship projects faster while keeping code organized.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-105"
              >
                View Projects
              </a>
              <button
                type="button"
                onClick={() => setShowContactModal(true)}
                className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${
                  darkMode ? "border-white/20 hover:bg-white/10" : "border-slate-300 hover:bg-slate-100"
                }`}
              >
                Contact Me
              </button>
            </div>
            <div className="mt-7 flex items-center gap-5 text-2xl">
              <a href="https://github.com/StinkyJeans" target="_blank" rel="noreferrer" className="transition hover:text-blue-500">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nelvim-john-anoc-6762a0374/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-blue-500"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div
            className={`rounded-3xl border p-7 shadow-2xl ${
              darkMode ? "border-white/10 bg-slate-900/70" : "border-slate-200 bg-white/80"
            }`}
          >
            <img
              src="/images/pfp.jpg"
              alt="Nelvim profile"
              className="mb-5 h-44 w-44 rounded-2xl object-cover shadow-xl"
            />
            <h2 className="text-2xl font-bold">Full-Stack Developer</h2>
            <p className={`mt-2 text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              Web Developer - Vibe Coder - Full-Stack. Building frontend, backend, and database-driven
              projects using Next.js and modern AI tools.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className={`rounded-xl p-3 ${darkMode ? "bg-white/5" : "bg-slate-100"}`}>
                <p className="font-semibold">Degree</p>
                <p className={darkMode ? "text-slate-300" : "text-slate-600"}>BSIT</p>
              </div>
              <div className={`rounded-xl p-3 ${darkMode ? "bg-white/5" : "bg-slate-100"}`}>
                <p className="font-semibold">Location</p>
                <p className={darkMode ? "text-slate-300" : "text-slate-600"}>Butuan City</p>
              </div>
            </div>
            <div className={`mt-3 rounded-xl p-3 text-sm ${darkMode ? "bg-white/5" : "bg-slate-100"}`}>
              <p className="font-semibold">School</p>
              <p className={darkMode ? "text-slate-300" : "text-slate-600"}>
                Father Saturnino Urios University
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Featured Work</h3>
        <h2 className="mb-10 text-3xl font-bold md:text-4xl">Featured projects and deployed apps</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredApps.map((app) => (
            <article
              key={app.title}
              className={`group rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-2xl ${
                darkMode
                  ? "border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/60"
                  : "border-slate-200 bg-gradient-to-br from-white to-slate-100"
              }`}
            >
              <p className="mb-3 inline-flex rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-400">
                {app.badge}
              </p>
              <h3 className="mb-2 text-2xl font-semibold">{app.title}</h3>
              <p className={`mb-4 text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{app.description}</p>
              {app.image ? (
                <img
                  src={app.image}
                  alt={app.title}
                  className="mb-4 h-44 w-full cursor-zoom-in rounded-2xl object-cover shadow-lg transition hover:opacity-90"
                  onClick={() => setSelectedImage({ src: app.image, alt: app.title })}
                />
              ) : null}
              {app.images ? (
                <div className="mb-4">
                  <p className={`mb-2 text-xs font-semibold uppercase tracking-wide ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Admin Screens
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {app.images.map((imageSrc, imageIndex) => (
                      <img
                        key={imageSrc}
                        src={imageSrc}
                        alt={`${app.title} admin screen ${imageIndex + 1}`}
                        className="h-36 w-full cursor-zoom-in rounded-xl object-cover shadow-md transition hover:opacity-90"
                        onClick={() =>
                          setSelectedImage({
                            src: imageSrc,
                            alt: `${app.title} admin screen ${imageIndex + 1}`,
                          })
                        }
                      />
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="mb-5 flex flex-wrap gap-2">
                {app.tech.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full px-3 py-1 text-xs ${
                      darkMode ? "bg-white/10 text-slate-200" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              {app.url ? (
                <div className="flex flex-wrap gap-3">
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition group-hover:text-blue-300"
                  >
                    Open App <FaExternalLinkAlt className="h-3 w-3" />
                  </a>
                  {app.secondaryUrl ? (
                    <a
                      href={app.secondaryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300"
                    >
                      Open Admin <FaExternalLinkAlt className="h-3 w-3" />
                    </a>
                  ) : null}
                </div>
              ) : (
                <p className={`text-sm font-semibold ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                  Academic project highlight
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Technical stack</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className={`rounded-full border px-4 py-2 text-sm ${
                darkMode ? "border-white/15 bg-white/5" : "border-slate-300 bg-white"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-16">
        <div
          className={`rounded-3xl border p-8 ${
            darkMode ? "border-white/10 bg-slate-900/70" : "border-slate-200 bg-white/90"
          }`}
        >
          <h2 className="mb-3 text-3xl font-bold">Let&apos;s build something great</h2>
          <p className={`mb-6 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
            I am available for entry-level opportunities and freelance web projects.
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <a href="mailto:anocnelvimjohn@gmail.com" className="flex items-center gap-3 hover:text-blue-400">
                <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                <span>anocnelvimjohn@gmail.com</span>
              </a>
              <p className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-pink-400" />
                <span>Butuan City, Philippines</span>
              </p>
            </div>
            <a
              href="https://github.com/StinkyJeans"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105"
            >
              See GitHub Projects
            </a>
          </div>
        </div>
      </section>

      <ConctactForm
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        darkMode={darkMode}
      />
      <ImageModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </main>
  );
}