import React from "react";
import { Link } from "react-router-dom";

export const SmartDesk: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 h-full">
        <Link to="/#projects" className="inline-block mb-12 opacity-0 animate-fade-in-up-1">
          <span className="text-white hover:text-purple-400 transition-colors duration-300">← Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up-1">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Smart Desk - AI-Powered Ergonomic Workspace
              </span>
            </h1>
            <p className="text-gray-300">An intelligent workspace solution that combines IoT, AI, and ergonomic design</p>
          </div>

          <div className="space-y-12 pb-16">
            {/* Technologies */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 opacity-0 animate-fade-in-up-2">
              <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Technologies Used
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex flex-col items-center">
                  <img 
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg" 
                    alt="Kotlin" 
                    className="w-12 h-12 mb-1"
                  />
                  <span className="text-gray-300 text-sm">Kotlin</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" 
                    alt="C" 
                    className="w-12 h-12 mb-1"
                  />
                  <span className="text-gray-300 text-sm">C</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" 
                    alt="Firebase" 
                    className="w-12 h-12 mb-1"
                  />
                  <span className="text-gray-300 text-sm">Firebase</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" 
                    alt="HTML" 
                    className="w-12 h-12 mb-1"
                  />
                  <span className="text-gray-300 text-sm">HTML</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/xml/xml-original.svg" 
                    alt="XML" 
                    className="w-12 h-12 mb-1"
                  />
                  <span className="text-gray-300 text-sm">XML</span>
                </div>
              </div>
            </div>

            {/* Project Poster */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 opacity-0 animate-fade-in-up-3">
              <img 
                src="/capstoneposter.png" 
                alt="Smart Desk Capstone Poster" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-gray-400 text-sm mt-2 text-center">Smart Desk Capstone Project Poster</p>
            </div>

            {/* Mobile App Interface */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 opacity-0 animate-fade-in-up-4">
              <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Mobile App Interface
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <img 
                    src="/smartdeskapp1.jpg" 
                    alt="Smart Desk App Screenshot 1" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-300 text-sm mt-2 text-center">Help & Information Page</p>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/smartdeskapp2.jpg" 
                    alt="Smart Desk App Screenshot 2" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-300 text-sm mt-2 text-center">AI Recommendations</p>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/smartdeskapp3.jpg" 
                    alt="Smart Desk App Screenshot 3" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-300 text-sm mt-2 text-center">Height Control</p>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/smartdeskapp4.jpg" 
                    alt="Smart Desk App Screenshot 4" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-300 text-sm mt-2 text-center">Connection Page</p>
                </div>
              </div>
              <div className="mt-6 text-gray-300">
                <p className="mb-4">
                  The Smart Desk mobile app provides an intuitive interface for controlling and monitoring your workspace. 
                  Users can easily adjust desk height, receive AI-powered posture recommendations, and manage device connectivity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Real-time height adjustment controls</li>
                      <li>AI-powered posture recommendations</li>
                      <li>Bluetooth device management</li>
                      <li>Customizable height presets</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">User Experience:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Clean, minimalist interface</li>
                      <li>Easy-to-navigate screens</li>
                      <li>Real-time feedback system</li>
                      <li>Seamless device pairing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CAD Design */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 opacity-0 animate-fade-in-up-5">
              <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                CAD Design
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <img 
                    src="/smartdeskapp5.jpg" 
                    alt="Smart Desk CAD Design - Front View" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-300 text-sm mt-4 text-center">Front View - Mechanical Design</p>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/smartdeskapp6.jpg" 
                    alt="Smart Desk CAD Design - Components" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-300 text-sm mt-4 text-center">Component Assembly View</p>
                </div>
              </div>
              <div className="mt-6 text-gray-300">
                <p className="mb-4">
                  The Smart Desk was designed using advanced CAD software to ensure precise mechanical integration and optimal component placement. 
                  The design focuses on ergonomics, stability, and seamless integration of electronic components.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Design Features:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Modular component design</li>
                      <li>Integrated cable management</li>
                      <li>Sturdy frame construction</li>
                      <li>Easy-access maintenance panels</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Technical Specifications:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Height range: 60-120cm</li>
                      <li>Maximum load capacity: 100kg</li>
                      <li>Dual motor system</li>
                      <li>Integrated sensor array</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware Used */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 opacity-0 animate-fade-in-up-7">
              <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Hardware Used
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <img 
                    src="/cypress_semiconductor_logo.jpg" 
                    alt="Cypress BLE Board" 
                    className="w-32 h-20 object-contain mb-2 bg-white p-2 rounded-lg"
                  />
                  <div className="text-center">
                    <h3 className="text-base font-semibold text-white mb-1">Cypress BLE Board</h3>
                    <p className="text-gray-300 text-sm">Bluetooth Low Energy microcontroller</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg" 
                    alt="Arduino Board" 
                    className="w-32 h-20 object-contain mb-2"
                  />
                  <div className="text-center">
                    <h3 className="text-base font-semibold text-white mb-1">Arduino Board</h3>
                    <p className="text-gray-300 text-sm">Motor control and sensor interfacing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 opacity-0 animate-fade-in-up-8">
              <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Key Features
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Mobile App Control</h3>
                    <p className="text-gray-300">Seamless desk control using BLE (Bluetooth Low Energy) for real-time adjustments</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">AI Posture Detection</h3>
                    <p className="text-gray-300">Computer vision-based posture monitoring with real-time feedback</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Smart Automation</h3>
                    <p className="text-gray-300">Automatic height adjustments based on user preferences and AI insights</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 opacity-0 animate-fade-in-up-9">
              <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Technical Implementation
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  The project was built using a modern tech stack including React Native for the mobile app, Python for the AI components, 
                  and TensorFlow for the posture detection model. The desk's hardware includes load cell sensors for weight distribution 
                  monitoring and stepper motors for precise height adjustments.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">BLE</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">IoT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 