import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";
import { GiDiscussion } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { PiBrainBold } from "react-icons/pi"; // From phosphor-react, if using
import { RiPresentationLine } from "react-icons/ri";
import { TbTopologyStar } from "react-icons/tb";
const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-xs font-mono bg-blue-500/30 px-2 py-0.5 rounded-full whitespace-nowrap">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-snug">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: MdHealthAndSafety,
      title: "Post-Doctoral Researcher",
      company: "NIH - Minority Health Disparities",
      period: "2023 - Present",
      description:
      <ul className="text-sm text-gray-300 pl-4 mt-4 space-y-2 list-disc list-inside leading-snug">
      <li>Led mixed-methods studies on racism and health outcomes using R, Python, SQL</li>
      <li>Built R Shiny/Tableau dashboards; communicated insights to cross-functional teams</li>
      <li>Applied supervised and unsupervised machine learning techniques to enhance predictive accuracy of health risk models across diverse populations</li>
      <li>Led the design and implementation of data cleaning and preprocessing workflows to prepare high-dimensional survey and biometric datasets for advanced statistical modeling</li>
      <li>Led qualitative research sessions with community stakeholders, synthesizing focus group insights to inform data models and strategic recommendations</li>
    </ul>,
    },
    {
      icon: RiPresentationLine,
      title: "Post-Doctoral Researcher",
      company: "UC Berkeley School of Public Health",
      period: "2021 - 23",
      description:
      <ul className="text-sm text-gray-300 pl-4 mt-4 space-y-2 list-disc list-inside leading-snug">
      <li>Led studies on structural racism's impact on health outcomes</li>
      <li>Developed custom metrics and visualizations for stakeholder use</li>
      <li>Applied machine learning techniques—including random forest, k-means clustering, and decision trees—to identify key predictors of health disparities and segment populations by risk profiles</li>
      <li>Addressed sampling biases and missing data using advanced imputation and weighting strategies to strengthen model reliability and generalizability</li>
      <li>Created reproducible R Markdown reports and presented findings at national and international conferences; contributed to peer-reviewed publications focused on structural determinants of health</li>
    </ul>,
    },
    {
      icon: Code2,
      title: "Statistical Consultant",
      company: "UC Berkeley Psychology Department",
      period: "2023 - 24",
      description:
      <ul className="text-sm text-gray-300 pl-4 mt-4 space-y-2 list-disc list-inside leading-snug">
      <li>Supported statistical analysis for randomized controlled trials (A/B testing) of school interventions, ensuring accurate implementation of experimental protocols and results interpretation</li>
      <li>Optimized reproducibility workflows; led data integrity checks for large-scale projects</li>
      <li>Identified and resolved critical bugs in legacy Stata scripts and translated workflows into R, enhancing reproducibility and efficiency of data analysis</li>
    </ul>,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Work Experience
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Telling powerful stories through data and design"
            </p>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;
