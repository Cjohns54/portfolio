import React, { useEffect, useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Link } from "react-router-dom";

export const Box = (): JSX.Element => {
  // Navigation links
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Skills/technologies
  const skills = [
    { name: "C", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
    { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
    { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "HTML", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
    { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
    { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  ];

  // Software Projects data
  const softwareProjects = [
    {
      title: "EasierEmails.com",
      category: "STARTUP",
      role: "Co-Founder & CTO",
      location: "Toronto, ON",
      period: "Jan 2024 - Present",
      description: "Leading the development of an innovative email marketing platform that revolutionizes targeted outreach. Built with a modern tech stack including JavaScript, PHP, MySQL, and AWS.",
      highlights: [
        "Managing a team of 4 developers to deliver a high-performance marketing platform",
        "Achieved reach of +2,400,000 targeted profiles with 85% click-through rate",
        "Implemented advanced analytics resulting in 45% conversion rate",
        "Architected scalable infrastructure using AWS services",
      ],
      image: "/website-design.png",
      gradient: "from-purple-500 to-blue-500",
      link: "https://easieremails.com"
    },
    {
      title: "Smart Desk - AI-Powered Ergonomic Workspace",
      category: "CAPSTONE PROJECT",
      role: "Lead Developer",
      location: "University of Waterloo",
      period: "2024",
      description: "An intelligent workspace solution that combines IoT, AI, and ergonomic design to create the perfect working environment. Built with React Native, Python, and TensorFlow.",
      highlights: [
        "Developed a mobile app for seamless desk control using BLE (Bluetooth Low Energy)",
        "Implemented AI-powered posture detection using computer vision",
        "Integrated load cell sensors for real-time ergonomic monitoring",
        "Created smart automation system for height adjustments based on user preferences and AI insights",
      ],
      image: "/website-design.png",
      gradient: "from-blue-500 to-indigo-500",
      link: "/smart-desk"
    },
  ];

  // Hardware Projects data
  const hardwareProjects = [
    {
      title: "Program Counter Design",
      category: "DIGITAL DESIGN",
      tools: "Cadence",
      description: "Custom-designed 8-bit program counter implementing advanced CMOS logic architecture.",
      highlights: [
        "Developed custom CMOS logic for full adders, multiplexers, flipflops and registers",
        "Created comprehensive test benches for component validation",
        "Performed detailed simulations to verify timing and functionality",
        "Implemented efficient circuit layout following design rules",
      ],
      image: "/website-design.png",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "AES Encryption Modes",
      category: "FPGA DESIGN",
      tools: "Verilog, C Programming",
      description: "Comparative analysis of AES encryption modes (CBC vs OFB) implemented on FPGA architecture.",
      highlights: [
        "Implemented AES encryption in CBC and OFB modes on FPGA",
        "Conducted thorough performance analysis of latency and throughput",
        "Optimized hardware implementation for efficient resource utilization",
        "Developed test vectors for validation and comparison",
      ],
      image: "/website-design.png",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Real-Time Home Security System",
      category: "EMBEDDED SYSTEMS",
      tools: "FreeRTOS, STM32F429",
      description: "Advanced security system leveraging real-time operating system capabilities with integrated sensors.",
      highlights: [
        "Developed on STM32F429 using FreeRTOS for real-time operation",
        "Integrated PIR sensor and ArduCAM for motion detection and image capture",
        "Implemented task synchronization and interrupt handling",
        "Created efficient LCD interface for real-time alert display",
      ],
      image: "/website-design.png",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  // Experience data
  const experiences = [
    {
      company: "Ansys",
      logo: "/ANSYS.png",
      position: "Full Stack R&D Engineer Intern",
      location: "San Jose, CA",
      period: "May 2024 - May 2025",
      description: [
        "Developed a web application utilizing Angular, TypeScript and Python to monitor advanced CAD simulations, contributing +50 commits, and 10 code reviews with successful merges across 4 deployment release cycles.",
        "Developed 3 core features, including real-time messaging, logging, and dynamic dialogs for simulation submissions.",
        "Wrote E2E tests, increasing test coverage on core features, validating API data flow and third-party visualizations (Plotly)."
      ],
    },
    {
      company: "P&P Optica",
      logo: "/PPO.jpg",
      position: "Cloud & AI Automation Engineer Intern",
      location: "Waterloo, ON",
      period: "May 2023 - August 2023",
      description: [
        "Solely developed the company wide AI model test script in Python that evaluates the speed and performance of diverse models, capturing results in JSON format for team-wide analysis.",
        "Restructured an existing tree model architecture, verified with Pytest, to accommodate distinct edge cases resulting in a 5% accuracy boost while maintaining consistent model performance.",
        "Developed a script to launch AWS EC2 instances on Windows or Linux using Python and Boto3."
      ],
    },
    {
      company: "Virtek Vision International",
      logo: "/Virtek.jpg",
      position: "Software QA Engineer Intern",
      location: "Waterloo, ON",
      period: "January 2023 - April 2023",
      description: [
        "Completed 250+ regression tests, reported 28 defects, and developed 15 Python unit tests, to strengthen 75% of software features ahead of a major release. Leveraged Jira and Confluence to keep track of results."
      ],
    },
  ];

  const [animateBG, setAnimateBG] = useState(true);
  const [showGradient, setShowGradient] = useState(false);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setAnimateBG(false), 2000);
    const timeout2 = setTimeout(() => setShowGradient(true), 2200);
    const timeout3 = setTimeout(() => setShowContent(true), 2600);
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <>
    <style>{`
      @keyframes gradientBG {
        0% { background-position: 0% 50%; background: linear-gradient(270deg, #7c3aed, #2563eb, #a21caf, #0ea5e9, #7c3aed); }
        50% { background-position: 100% 50%; background: linear-gradient(270deg, #7c3aed, #2563eb, #a21caf, #0ea5e9, #7c3aed); }
        100% { background-position: 0% 50%; background: linear-gradient(to bottom right, #000, #6d28d9, #1e40af); }
      }
      .animated-gradient {
        background: linear-gradient(270deg, #7c3aed, #2563eb, #a21caf, #0ea5e9, #7c3aed);
        background-size: 200% 200%;
        animation: gradientBG 2s ease-in-out 1;
      }
      .parallax-blob {
        transition: transform 0.3s cubic-bezier(.25,.8,.25,1);
      }
      .typewriter {
        overflow: hidden;
        border-right: .15em solid #fff;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .08em;
        animation: typing 2.2s steps(30, end), blink-caret .75s step-end infinite;
      }
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #fff; }
      }
      .clip-reveal {
        clip-path: circle(0% at 50% 50%);
        animation: revealCircle 1.2s cubic-bezier(.77,0,.18,1) 0.3s forwards;
      }
      @keyframes revealCircle {
        to { clip-path: circle(75% at 50% 50%); }
      }
      .shimmer-arrow {
        background: linear-gradient(90deg, #fff 0%, #60a5fa 50%, #fff 100%);
        background-size: 200% 100%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shimmer 2s linear infinite;
      }
      @keyframes shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      .bg-fade {
        transition: background 0.8s cubic-bezier(.77,0,.18,1);
      }
      .fade-in-content {
        opacity: 0;
        transition: opacity 0.7s cubic-bezier(.77,0,.18,1);
      }
      .fade-in-content.visible {
        opacity: 1;
      }
    `}</style>
    <div className={`min-h-screen bg-fade ${showGradient ? "bg-gradient-to-br from-black via-purple-900 to-blue-900" : "bg-black"} text-white relative overflow-hidden flex flex-col justify-between`}>
      {/* Parallax SVG Blobs */}
      <svg className="absolute top-[-10%] left-[-10%] w-96 h-96 opacity-30 parallax-blob z-0" style={{ filter: 'blur(40px)' }} viewBox="0 0 200 200"><circle fill="#a21caf" cx="100" cy="100" r="100" /></svg>
      <svg className="absolute top-[20%] right-[-10%] w-80 h-80 opacity-20 parallax-blob z-0" style={{ filter: 'blur(32px)' }} viewBox="0 0 200 200"><ellipse fill="#2563eb" cx="100" cy="100" rx="100" ry="80" /></svg>
      <svg className="absolute bottom-[-10%] left-[30%] w-96 h-96 opacity-20 parallax-blob z-0" style={{ filter: 'blur(48px)' }} viewBox="0 0 200 200"><ellipse fill="#0ea5e9" cx="100" cy="100" rx="90" ry="100" /></svg>

      {/* Landing Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen pt-16 z-10 select-none">
        {/* Profile Image with circular reveal */}
        <div className="relative group mb-6 clip-reveal" style={{ animationFillMode: 'forwards' }}>
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-blob"></div>
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full relative shadow-lg border-4 border-purple-400/30 group-hover:border-blue-400/60 transition-all duration-500">
            <img
              src={import.meta.env.BASE_URL + "headshot.jpg"}
              alt="Professional headshot"
              className="w-full h-full object-cover rounded-full p-2 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        {/* Name and Title with typewriter effect */}
        <div className="text-center mb-2">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2 typewriter">Connor Johnson</h1>
          <div className={`fade-in-content${showContent ? " visible" : ""}`}> 
            <div className="text-lg md:text-2xl text-blue-200 font-semibold tracking-wide mb-2">
              Full Stack Developer & Cloud Solutions Architect
            </div>
          </div>
        </div>
        {/* Summary Card (slides up after delay) */}
        <div className={`w-full flex justify-center fade-in-content${showContent ? " visible" : ""}`}>
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 text-lg mt-6 px-2 md:px-8">
            {/* Education */}
            <div className="bg-black/30 rounded-xl p-8 shadow-lg flex flex-col items-start">
              <div className="text-2xl font-extrabold text-purple-400 mb-2">🎓 Bachelor of Engineering, Computer Engineering</div>
              <div className="text-sm text-gray-400 mb-2">University of Guelph (Graduating Dec 2025)</div>
              <ul className="list-disc list-inside text-base pl-4">
                <li>Advanced Mathematics & Statistics</li>
                <li>Computer Science & Programming</li>
                <li>Digital & Embedded Systems</li>
                <li>Hardware Design</li>
              </ul>
            </div>
            {/* Industry Experience */}
            <div className="bg-black/30 rounded-xl p-8 shadow-lg flex flex-col items-start">
              <div className="text-2xl font-extrabold text-blue-400 mb-2">💼 5 Software Engineering Internships</div>
              <div className="text-sm text-gray-400 mb-2">Startups & Major Firms (e.g., Ansys)</div>
              <ul className="list-disc list-inside text-base pl-4">
                <li>Cloud Development (AWS, Azure)</li>
                <li>Embedded Systems & IoT</li>
                <li>Full-Stack Web Applications</li>
                <li>Agile & Cross-Functional Teams</li>
              </ul>
            </div>
            {/* Leadership & Impact */}
            <div className="bg-black/30 rounded-xl p-8 shadow-lg flex flex-col items-start">
              <div className="text-2xl font-extrabold text-pink-400 mb-2">🚀 Experienced Leader</div>
              <div className="text-sm text-gray-400 mb-2">CTO & Product Manager at EasierEmails.com</div>
              <ul className="list-disc list-inside text-base pl-4 mt-2">
                <li>Led development teams on SaaS platforms</li>
                <li>Delivered under pressure in fast-paced environments</li>
                <li>Balanced technical excellence with real-world problem solving</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Buttons (fade in after summary) */}
        <div className={`flex flex-col md:flex-row gap-4 mt-8 fade-in-content${showContent ? " visible" : ""}`}>
          <Link to="/contact">
            <Button 
              variant="outline" 
              className="rounded-full px-8 py-3 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-lg animate-bounce-once"
            >
              Get in Touch
            </Button>
          </Link>
          <Button
            variant="outline"
            className="rounded-full px-8 py-3 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg animate-bounce-once"
            onClick={() => {
              const link = document.createElement('a');
              link.href = import.meta.env.BASE_URL + 'Resume2025.pdf';
              link.download = 'Connor_Johnson_Resume_2025.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download CV
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto py-12 text-center relative z-10">
        <h2 className="text-xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
          Tech Stack
        </h2>
        <div className="flex justify-center">
          <div className="w-1/3 relative overflow-hidden bg-black/30 backdrop-blur-sm rounded-lg p-4">
            <div className="flex animate-scroll-left whitespace-nowrap">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex items-center mx-8 group"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="ml-2 text-white group-hover:text-purple-400 transition-colors duration-300">{skill.name}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {skills.map((skill) => (
                <div
                  key={`${skill.name}-duplicate`}
                  className="inline-flex items-center mx-8 group"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="ml-2 text-white group-hover:text-purple-400 transition-colors duration-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software Projects Section */}
      <section id="software-projects" className="container mx-auto py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            SOFTWARE PROJECTS
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {softwareProjects.map((project) => (
            <Link to={project.link} key={project.title} className="block group" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-black/40 transition-all duration-300">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-90`}></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                      <Badge
                        variant="outline"
                        className="bg-black/50 text-white border-none mb-2"
                      >
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-white/80">
                        <span className="mr-4">{project.role}</span>
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-400">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hardware Projects Section */}
      <section id="hardware-projects" className="container mx-auto py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            HARDWARE PROJECTS
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hardwareProjects.map((project) => (
            <div key={project.title} className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-black/40 transition-all duration-300">
              <div className="relative h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-90`}></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <Badge
                      variant="outline"
                      className="bg-black/50 text-white border-none mb-2"
                    >
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="text-sm text-white/80">
                      {project.tools}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-400">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            EXPERIENCE
          </span>
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.position}
                      </h3>
                      <p className="text-purple-400">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Contact</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-400 mb-8">
            For business inquires or work opportunities please contact me
          </p>
          <div className="flex items-center justify-center mb-6">
            <span className="text-gray-400 mr-2">📧</span>
            <a
              href="mailto:connorjohnsontech@gmail.com"
              className="text-white hover:text-gray-300"
            >
              connorjohnsontech@gmail.com
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-white hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-gray-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};