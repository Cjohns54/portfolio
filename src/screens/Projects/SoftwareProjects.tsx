import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const SoftwareProjects = (): JSX.Element => {
  const projects = [
    {
      title: "Smart Desk - AI-Powered Ergonomic Workspace",
      category: "CAPSTONE PROJECT",
      role: "Lead Developer",
      location: "University of Waterloo",
      period: "2024",
      description: "An intelligent workspace solution that combines IoT, AI, and ergonomic design to create the perfect working environment.",
      image: "/website-design.png",
      gradient: "from-blue-500 to-indigo-500",
      link: "/smart-desk"
    },
    {
      title: "Real-time Analytics Dashboard",
      category: "Web Application",
      description: "Built with React, D3.js, and WebSocket for live data visualization",
      image: "/website-design.png",
      gradient: "from-purple-500 to-pink-500",
      link: "#"
    },
    {
      title: "DevOps Automation Suite",
      category: "Infrastructure",
      description: "CI/CD pipelines and IaC using AWS CDK and GitHub Actions",
      image: "/website-design.png",
      gradient: "from-orange-500 to-red-500",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <Link to="/" className="inline-block mb-12 opacity-0 animate-fade-in-up-1">
          <span className="text-white hover:text-purple-400 transition-colors duration-300">← Back to Home</span>
        </Link>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 opacity-0 animate-fade-in-up-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Software Projects
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                to={project.link} 
                key={project.title}
                className="block group"
              >
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
                        {project.role && (
                          <div className="flex items-center text-sm text-white/80">
                            <span className="mr-4">{project.role}</span>
                            <span>{project.period}</span>
                          </div>
                        )}
                      </div>
                      <div className="mt-4">
                        <Button 
                          variant="outline" 
                          className="bg-black/50 text-white border-white/20 hover:bg-white/10"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};