"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

const educationData = [
  {
    degree: "BSc Software Engineering",
    institution: "Institute Of Management Sciences, Peshawar",
    location: "Peshawar, Pakistan",
    year: "2020 – 2024",
    grade: "CGPA: 3.26 / 4.0",
    description:
      "Focused on software design, data structures, algorithms, and full-stack web development. Final year project involved building a cross-platform mobile application using React Native.",
    icon: <HiAcademicCap className="text-white text-2xl" />,
    highlight: true,
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Govt. College",
    location: "Rawalpindi, Pakistan",
    year: "2017 – 2019",
    grade: "Grade: A",
    description:
      "Completed intermediate studies with a focus on Mathematics, Physics, and Computer Science, building a strong foundation for software engineering.",
    icon: <FaGraduationCap className="text-white text-2xl" />,
    highlight: false,
  },
];

const certifications = [
  {
    title: "React Native – The Practical Guide",
    issuer: "Udemy · Maximilian Schwarzmüller",
    year: "2022",
  },
  {
    title: "The Complete Node.js Developer Course",
    issuer: "Udemy · Andrew Mead",
    year: "2022",
  },
  {
    title: "Next.js & React – The Complete Guide",
    issuer: "Udemy · Maximilian Schwarzmüller",
    year: "2023",
  },
];

export default function Education() {
  return (
    <section className="min-h-screen bg-[#f8f3ee] py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest text-[#4E9FA1] uppercase">
            Background
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-black mt-2">
            Education
          </h1>
          <div className="w-16 h-1 bg-[#4E9FA1] mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#4E9FA1]/30 hidden md:block" />

          <div className="flex flex-col gap-10">
            {educationData.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                {/* Icon bubble */}
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-[#4E9FA1] items-center justify-center shadow-lg z-10">
                  {item.icon}
                </div>

                {/* Card */}
                <div
                  className={`flex-1 rounded-2xl p-6 shadow-md border ${
                    item.highlight
                      ? "bg-white border-[#4E9FA1]/40"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h2 className="text-xl font-bold text-black">
                      {item.degree}
                    </h2>
                    <span className="text-sm font-semibold text-[#4E9FA1] bg-[#4E9FA1]/10 px-3 py-1 rounded-full w-fit">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    {item.institution} · {item.location}
                  </p>
                  <p className="text-sm font-semibold text-gray-500 mt-1">
                    {item.grade}
                  </p>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 text-center">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-[#4E9FA1] mx-auto mb-8 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:border-[#4E9FA1]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#4E9FA1]/15 flex items-center justify-center mb-3">
                  <FaGraduationCap className="text-[#4E9FA1] text-sm" />
                </div>
                <h3 className="font-semibold text-black text-sm leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{cert.issuer}</p>
                <span className="text-xs font-medium text-[#4E9FA1] mt-2 inline-block">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
