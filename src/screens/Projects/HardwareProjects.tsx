import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Link } from "react-router-dom";

export const HardwareProjects = (): JSX.Element => {
  const projects = [
    {
      title: "IoT Environmental Monitor",
      category: "IoT",
      description: "ESP32-based system for monitoring temperature, humidity, and air quality",
      image: "/website-design.png",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Smart Home Controller",
      category: "Home Automation",
      description: "Raspberry Pi-based system for controlling home devices",
      image: "/website-design.png",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Automated Garden System",
      category: "Automation",
      description: "Arduino-based system for automated plant watering and monitoring",
      image: "/website-design.png",
      gradient: "from-blue-500 to-cyan-500",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-4">
        <Link to="/" className="text-white hover:text-gray-300">← Back to Home</Link>
        <h1 className="text-3xl font-bold text-center mt-8 mb-12">Hardware Projects</h1>
      </header>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-gray-900 border-none overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-70`}></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-200 mt-2">{project.description}</p>
                    <div className="flex justify-between items-center mt-2">
                      <Badge variant="outline" className="bg-gray-800 text-white border-none">
                        {project.category}
                      </Badge>
                      <span className="text-white">→</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};