"use client";
import React, { useState } from "react";
import { FaBriefcase, FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiDocker,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const experiences = [
  {
    role: "Software Engineer (React Native/React)",
    company: "Eastern Tech",
    location: "Islamabad, Pakistan",
    period: "Aug 2025 – Present",
    type: "Full-time",
    description:
      "Worked on MERN stack web applications and React Native projects for local and international clients.",
    bullets: [
      "Developed full-stack web applications using React, Next.js, Node.js, Express, and MongoDB.",
      "Built reusable component libraries that reduced frontend development time by ~30%.",
      "Implemented JWT-based authentication and role-based access control across multiple projects.",
      "Consumed and designed RESTful APIs for data-driven dashboards.",
      "Mentored junior developers and conducted code reviews.",
    ],
    tech: [
      { label: "React", icon: <SiReact className="text-[#61dafb]" /> },
      { label: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      { label: "Node.js", icon: <SiNodedotjs className="text-[#47a248]" /> },
      {
        label: "TypeScript",
        icon: <SiTypescript className="text-[#3178c6]" />,
      },
      { label: "MongoDB", icon: <SiMongodb className="text-[#13aa52]" /> },
    ],
    current: true,
  },
  {
    role: "React Native Developer",
    company: "TechCreator",
    location: "Swabi, Pakistan",
    period: "Feb 2024 – Aug 2025",
    type: "Full-time",
    description:
      "Leading development of cross-platform mobile applications for clients across fintech and e-commerce verticals.",
    bullets: [
      "Built and maintained multiple React Native apps from scratch, deployed to both Google Play Store and Apple App Store.",
      "Integrated third-party REST APIs and payment gateways (Stripe, JazzCash) into mobile apps.",
      "Implemented push notifications using Firebase Cloud Messaging (FCM).",
      "Set up CI/CD pipelines with Docker for automated builds and deployments.",
      "Collaborated with UI/UX designers using Figma to deliver pixel-perfect interfaces.",
    ],
    tech: [
      {
        label: "React Native",
        icon: <TbBrandReactNative className="text-[#61dafb]" />,
      },
      {
        label: "TypeScript",
        icon: <SiTypescript className="text-[#3178c6]" />,
      },
      { label: "Node.js", icon: <SiNodedotjs className="text-[#47a248]" /> },
      { label: "MongoDB", icon: <SiMongodb className="text-[#13aa52]" /> },
      { label: "Docker", icon: <SiDocker className="text-[#2496ed]" /> },
    ],
    current: false,
  },
];

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl shadow-md border overflow-hidden transition-all ${
        exp.current ? "border-[#4E9FA1]/50" : "border-gray-200"
      }`}
    >
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-xl font-bold text-black">{exp.role}</h2>
              {exp.current && (
                <span className="text-xs font-semibold bg-[#4E9FA1] text-white px-2 py-0.5 rounded-full">
                  Current
                </span>
              )}
            </div>
            <p className="text-[#4E9FA1] font-semibold mt-0.5">{exp.company}</p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {exp.period}
            </span>
            <p className="text-xs text-gray-400 mt-1">{exp.location}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-3">{exp.description}</p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {exp.tech.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 text-xs font-medium bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full"
            >
              {t.icon} {t.label}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1.5 text-sm text-[#4E9FA1] font-semibold hover:underline focus:outline-none"
        >
          {expanded ? (
            <>
              Hide details <FaChevronUp className="text-xs" />
            </>
          ) : (
            <>
              View details <FaChevronDown className="text-xs" />
            </>
          )}
        </button>
      </div>

      {/* Expanded bullets */}
      {expanded && (
        <div className="border-t border-gray-100 bg-[#f8f3ee]/60 px-6 py-4">
          <ul className="space-y-2">
            {exp.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4E9FA1] shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="min-h-screen bg-[#f8f3ee] py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest text-[#4E9FA1] uppercase">
            Career
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-black mt-2">
            Experience
          </h1>
          <div className="w-16 h-1 bg-[#4E9FA1] mx-auto mt-4 rounded-full" />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "15+", label: "Projects Shipped" },
            { value: "3", label: "Companies" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100"
            >
              <p className="text-2xl md:text-3xl font-bold text-[#4E9FA1]">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#4E9FA1]/25 hidden md:block" />
          <div className="flex flex-col gap-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-[#4E9FA1] items-center justify-center shadow-lg z-10">
                  <FaBriefcase className="text-white text-lg" />
                </div>
                <div className="flex-1">
                  <ExperienceCard exp={exp} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
