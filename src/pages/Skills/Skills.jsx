import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaRProject,
  FaGithub,
  FaTable,
  FaProjectDiagram,
  FaWpforms,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiLatex,
  SiTableau,
  SiMarkdown,
  SiNumpy,
  SiQuarto,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode, TbReload, TbLogicAnd, TbTools} from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2, BsBarChartLine, BsTools, BsDiagram3 } from "react-icons/bs";
import { MdAnimation, MdCompareArrows, MdOutlineTextSnippet, MdAssignment } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import {
  HiOutlineLightBulb, HiOutlineViewList, HiOutlineDatabase
} from "react-icons/hi";
import {
  AiOutlineClear, AiOutlineLineChart
} from "react-icons/ai";
import {
  FiLayers, FiClipboard
} from "react-icons/fi";
import {
  BiNetworkChart
} from "react-icons/bi";
import {
  RiFunctionLine
} from "react-icons/ri";
import {
  GiBrain, GiNotebook
} from "react-icons/gi";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: TbTools, // Or any icon you like
      title: "Technical Toolkit",
      color: "text-blue-400",
      skills: [
        { name: "R", icon: <FaRProject className="w-4 h-4 text-sky-500" /> },
        { name: "SQL", icon: <FaTable className="w-4 h-4 text-gray-300" /> },
        { name: "R Markdown", icon: <SiMarkdown className="w-4 h-4 text-white" /> },
        { name: "ggplot2", icon: <BsBarChartLine className="w-4 h-4 text-[#E76F51]" /> },
        { name: "tidyverse", icon: <FaRProject className="w-4 h-4 text-sky-500" /> },
        { name: "R Shiny", icon: <FaRProject className="w-4 h-4 text-sky-500" /> },
        { name: "Tableau", icon: <SiTableau className="w-4 h-4 text-[#E97627]" /> },
        { name: "Python", icon: <FaPython className="w-4 h-4 text-yellow-400" /> },
        { name: "Pandas", icon: <FaPython className="w-4 h-4 text-yellow-400" /> },
        { name: "NumPy", icon: <SiNumpy className="w-4 h-4 text-[#013243]" /> },
        { name: "LaTeX", icon: <SiLatex className="w-4 h-4 text-white" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "GitHub", icon: <FaGithub className="w-4 h-4 text-white" /> },
      ],
    },
    {
      icon: GiNotebook,
      title: "Methodology",
      color: "text-green-400",
      skills: [
        { name: "Statistical Modeling", icon: <BsBarChartLine className="w-4 h-4 text-[#6EE7B7]" /> },
        { name: "Causal Inference", icon: <TbLogicAnd className="w-4 h-4 text-white" /> },
        { name: "A/B Testing", icon: <MdCompareArrows className="w-4 h-4 text-white" /> },
        { name: "Mixed-Methods Research", icon: <FiLayers className="w-4 h-4 text-white" /> },
        { name: "Thematic Analysis", icon: <MdOutlineTextSnippet className="w-4 h-4 text-white" /> },
        { name: "Multilevel Modeling", icon: <BiNetworkChart className="w-4 h-4 text-white" /> },
        { name: "Structural Equation Modeling", icon: <RiFunctionLine className="w-4 h-4 text-white" /> },
        { name: "Survey Design", icon: <FaWpforms className="w-4 h-4 text-white" /> },
        { name: "Experimental Design", icon: <BsDiagram3 className="w-4 h-4 text-white" /> },
        { name: "Data Cleaning & Wrangling", icon: <AiOutlineClear className="w-4 h-4 text-white" /> },
        { name: "Behavioral Science", icon: <GiBrain className="w-4 h-4 text-white" /> },
        { name: "Qualtrics", icon: <FiClipboard className="w-4 h-4 text-white" /> },
        { name: "Dedoose", icon: <HiOutlineDatabase className="w-4 h-4 text-white" /> },
        { name: "ATLAS.ti", icon: <FaProjectDiagram className="w-4 h-4 text-white" /> },
        { name: "Data Interpretation", icon: <AiOutlineLineChart className="w-4 h-4 text-white" /> },
        { name: "Reproducible Research", icon: <TbReload className="w-4 h-4 text-white" /> },
        { name: "Insight Generation", icon: <HiOutlineLightBulb className="w-4 h-4 text-yellow-300" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
