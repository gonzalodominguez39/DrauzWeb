'use client';

import React from 'react';
import { FiUser, FiCode, FiLayout, FiBarChart2, FiGitBranch, FiMessageCircle } from 'react-icons/fi';
import { aboutData } from '../data/aboutData';

export const TeamSection = () => {
  const roleIcons = [
    <FiGitBranch key="1" />,
    <FiCode key="2" />,
    <FiLayout key="3" />,
    <FiBarChart2 key="4" />,
    <FiBarChart2 key="5" />,
    <FiMessageCircle key="6" />
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Un equipo talentoso y dedicado a transformar el mercado inmobiliario
          </p>
          <div className="w-20 h-1 bg-[#009B77] mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.team.map((member, index) => (
            <div 
              key={member.id}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#009B77]/50 hover:bg-white/8 transition-all duration-300"
            >
              <div className="bg-white/2 h-24 flex items-center justify-center relative overflow-hidden group">
                <div className="text-5xl text-[#009B77]/30 group-hover:scale-110 transition-transform">
                  {roleIcons[index]}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#009B77] text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#009B77]/20 text-[#009B77] text-xs px-3 py-1 rounded-full border border-[#009B77]/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
