"use client";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  // SiThreejs,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

type Tag = "All" | "Web" | "Mobile" | "3D";

const techIconMap: Record<string, React.ReactNode> = {
  // "Three.js": <SiThreejs className="text-black" />,
  "React Three Fiber": <SiReact className="text-[#61dafb]" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  "React Native": <TbBrandReactNative className="text-[#61dafb]" />,
  "Node.js": <SiNodedotjs className="text-[#47a248]" />,
  MongoDB: <SiMongodb className="text-[#13aa52]" />,
  TypeScript: <SiTypescript className="text-[#3178c6]" />,
  React: <SiReact className="text-[#61dafb]" />,
};

const projects = [
  {
    title: "3D Baseball Glove Configurator",
    description:
      "An interactive 3D product configurator built for a baseball equipment brand. Users can customize glove colors, logos, and materials in real-time with a smooth WebGL-powered preview.",
    tags: ["Web", "3D"] as Tag[],
    tech: ["Three.js", "React Three Fiber", "Next.js", "TypeScript"],
    live: "https://royalslugger.netlify.app",
    github: null,
    featured: true,
    badge: "Featured",
  },
  {
    title: "2D Product Configurator",
    description:
      "A PNG-layer composition configurator that lets users build custom product visuals by toggling layers of color and components. Lightweight, fast, and mobile-friendly.",
    tags: ["Web"] as Tag[],
    tech: ["React", "Next.js", "TypeScript"],
    live: "https://jagproconfigurator.netlify.app",
    github: null,
    featured: false,
    badge: null,
  },
  {
    title: "Full Stack E-Commerce App",
    description:
      "A complete MERN stack e-commerce platform with product management, cart, checkout, JWT auth, and an admin dashboard for order management.",
    tags: ["Web"] as Tag[],
    tech: ["React", "Node.js", "MongoDB", "TypeScript"],
    live: null,
    github: "https://github.com/WaheedAKhan947",
    featured: false,
    badge: null,
  },
  {
    title: "Cross-Platform Mobile App",
    description:
      "A React Native mobile application with real-time data, push notifications via FCM, deep linking, and deployments on both Google Play Store and Apple App Store.",
    tags: ["Mobile"] as Tag[],
    tech: ["React Native", "Node.js", "MongoDB"],
    live: null,
    github: "https://github.com/WaheedAKhan947",
    featured: false,
    badge: null,
  },
];

export default function Projects() {
  const [activeTag, setActiveTag] = useState<Tag>("All");

  const tags: Tag[] = ["All", "Web", "Mobile", "3D"];

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="min-h-screen bg-[#f8f3ee] py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-[#4E9FA1] uppercase">
            Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-black mt-2">
            Projects
          </h1>
          <div className="w-16 h-1 bg-[#4E9FA1] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-5 max-w-xl mx-auto text-sm md:text-base">
            A selection of things I&apos;ve built — from 3D configurators to
            full-stack mobile apps.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTag === tag
                  ? "bg-[#4E9FA1] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#4E9FA1] hover:text-[#4E9FA1]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl shadow-md border overflow-hidden flex flex-col transition-transform hover:-translate-y-1 ${
                project.featured ? "border-[#4E9FA1]/50" : "border-gray-100"
              }`}
            >
              {/* Top accent bar */}
              <div
                className={`h-1.5 w-full ${
                  project.featured ? "bg-[#4E9FA1]" : "bg-gray-200"
                }`}
              />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-lg font-bold text-black leading-snug pr-2">
                    {project.title}
                  </h2>
                  {project.badge && (
                    <span className="text-xs bg-[#4E9FA1]/15 text-[#4E9FA1] font-semibold px-2 py-0.5 rounded-full shrink-0">
                      {project.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 text-xs font-medium bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"
                    >
                      {techIconMap[t] ?? null} {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-white bg-[#4E9FA1] hover:bg-[#3d8a8c] px-4 py-2 rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-sm mb-4">
            More projects and open-source contributions on GitHub
          </p>
          <a
            href="https://github.com/WaheedAKhan947"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sm bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <FaGithub className="text-lg" /> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
