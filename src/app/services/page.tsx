'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightLine, RiCheckLine, RiCodeSLine, RiSmartphoneLine, RiPaletteLine, RiMegaphoneLine, RiTeamLine } from 'react-icons/ri';
import { Users } from 'lucide-react';
import { IconType } from 'react-icons';
import { FaCode, FaPaintBrush, FaMegaport, FaDesktop, FaMobileAlt, FaCloud, FaCogs, FaPalette, FaBalanceScale, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

// Components
import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/Button';
import ParallaxSection from '@/components/ParallaxSection';
import PageHero from '@/components/PageHero';

// Add clean, professional CSS animations
const customStyles = `
  @keyframes matrix-rain {
    0% { transform: translateY(-100%); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
  @keyframes code-compile {
    0% { transform: scaleX(0); opacity: 0; }
    50% { transform: scaleX(1); opacity: 1; }
    100% { transform: scaleX(1); opacity: 0.7; }
  }
  @keyframes hologram {
    0%, 100% { opacity: 0.7; transform: translateZ(0) rotateY(0deg); }
    50% { opacity: 1; transform: translateZ(10px) rotateY(180deg); }
  }
  @keyframes smooth-pulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
  }
  @keyframes data-stream {
    0% { transform: translateX(-100%) translateY(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(100%) translateY(-20px); opacity: 0; }
  }
  @keyframes clean-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes smooth-slide {
    0% { transform: translateX(-100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  @keyframes fade-in-out {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
  @keyframes progress-fill {
    0% { width: 0%; }
    100% { width: 100%; }
  }
  @keyframes simple-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  @keyframes chart-grow {
    0% { transform: scaleY(0); }
    100% { transform: scaleY(1); }
  }
  @keyframes clean-glow {
    0%, 100% { box-shadow: 0 0 5px rgba(255, 77, 0, 0.3); }
    50% { box-shadow: 0 0 20px rgba(255, 77, 0, 0.6); }
  }
  
  .animate-matrix-rain { animation: matrix-rain 3s linear infinite; }
  .animate-code-compile { animation: code-compile 2s ease-out infinite; }
  .animate-hologram { animation: hologram 4s ease-in-out infinite; }
  .animate-smooth-pulse { animation: smooth-pulse 2s ease-in-out infinite; }
  .animate-data-stream { animation: data-stream 3s ease-in-out infinite; }
  .animate-clean-rotate { animation: clean-rotate 8s linear infinite; }
  .animate-smooth-slide { animation: smooth-slide 1s ease-out forwards; }
  .animate-fade-in-out { animation: fade-in-out 2s ease-in-out infinite; }
  .animate-progress-fill { animation: progress-fill 2s ease-in-out infinite; }
  .animate-simple-bounce { animation: simple-bounce 2s ease-in-out infinite; }
  .animate-chart-grow { animation: chart-grow 1.5s ease-out forwards; transform-origin: bottom; }
  .animate-clean-glow { animation: clean-glow 3s ease-in-out infinite; }
  
  .glass-clean {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

// Insert styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = customStyles;
  document.head.appendChild(styleSheet);
}

// Clean ServiceAnimation Component
const ServiceAnimation = ({ serviceId, className }: { serviceId: string; className?: string }) => {
  const getAnimation = (id: string) => {
    switch (id) {
      case 'branding':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#FF4D00]/10 to-orange-500/5 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              {/* Comprehensive Brand Guidelines Interface */}
              <div className="w-full max-w-md h-full max-h-96 glass-clean rounded-lg p-4 relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-[#FF4D00]">Brand Style Guide</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-smooth-pulse"></div>
                    <span className="text-xs text-gray-700 dark:text-gray-400">v2.1</span>
                  </div>
                </div>
                
                {/* Brand Identity Section */}
                <div className="mb-3">
                  <div className="text-xs text-gray-700 dark:text-gray-400 mb-2 font-medium">Brand Identity</div>
                  <div className="grid grid-cols-2 gap-2">
                    {/* Primary Logo */}
                    <div className="p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600 animate-smooth-slide">
                      <div className="w-full h-6 bg-gradient-to-r from-[#FF4D00] to-orange-600 rounded flex items-center justify-center text-white text-xs font-bold animate-clean-glow">
                        BRAND
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 text-center">Primary</div>
                    </div>
                    
                    {/* Secondary Logos */}
                    <div className="space-y-1">
                      <div className="p-1 bg-gray-900 rounded flex items-center justify-center animate-smooth-slide" style={{ animationDelay: '0.2s' }}>
                        <span className="text-white text-xs font-bold">BRAND</span>
                      </div>
                      <div className="p-1 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center animate-smooth-slide" style={{ animationDelay: '0.3s' }}>
                        <span className="text-gray-900 dark:text-white text-xs font-bold">BRAND</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Color System */}
                <div className="mb-3">
                  <div className="text-xs text-gray-700 dark:text-gray-400 mb-2 font-medium">Color System</div>
                  <div className="grid grid-cols-6 gap-1 mb-2">
                    {[
                      { color: '#FF4D00', name: 'Primary' },
                      { color: '#FF6B2B', name: 'Secondary' },
                      { color: '#FF8F66', name: 'Accent' },
                      { color: '#1F2937', name: 'Dark' },
                      { color: '#6B7280', name: 'Gray' },
                      { color: '#F9FAFB', name: 'Light' }
                    ].map((colorItem, i) => (
                      <div key={i} className="text-center animate-smooth-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                        <div 
                          className="w-full h-4 rounded mb-1 border border-gray-200 dark:border-gray-600" 
                          style={{ backgroundColor: colorItem.color }}
                        />
                        <div className="text-xs text-gray-600 dark:text-gray-400" style={{ fontSize: '9px' }}>{colorItem.name}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Color Usage Examples */}
                  <div className="grid grid-cols-3 gap-1">
                    <div className="p-1 bg-[#FF4D00] rounded text-center animate-fade-in-out">
                      <span className="text-white text-xs">CTA</span>
                    </div>
                    <div className="p-1 bg-[#FF6B2B] rounded text-center animate-fade-in-out" style={{ animationDelay: '0.3s' }}>
                      <span className="text-white text-xs">Hover</span>
                    </div>
                    <div className="p-1 bg-[#1F2937] rounded text-center animate-fade-in-out" style={{ animationDelay: '0.6s' }}>
                      <span className="text-white text-xs">Text</span>
                    </div>
                  </div>
                </div>
                
                {/* Typography Scale */}
                <div className="mb-3">
                  <div className="text-xs text-gray-700 dark:text-gray-400 mb-2 font-medium">Typography</div>
                  <div className="space-y-1">
                    <div className="animate-smooth-slide">
                      <div className="text-base font-bold text-gray-900 dark:text-white">Heading Bold</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">32px • Technor</div>
                    </div>
                    <div className="animate-smooth-slide" style={{ animationDelay: '0.2s' }}>
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-200">Subheading Medium</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">24px • Technor</div>
                    </div>
                    <div className="animate-smooth-slide" style={{ animationDelay: '0.4s' }}>
                      <div className="text-xs text-gray-700 dark:text-gray-300">Body Regular</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">16px • Pilcrow</div>
                    </div>
                  </div>
                </div>
                
                {/* Brand Elements & Icons */}
                <div className="mb-3">
                  <div className="text-xs text-gray-700 dark:text-gray-400 mb-2 font-medium">Brand Elements</div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { element: '🎯', name: 'Target' },
                      { element: '⚡', name: 'Speed' },
                      { element: '💎', name: 'Quality' },
                      { element: '🚀', name: 'Growth' }
                    ].map((item, i) => (
                      <div key={i} className="text-center animate-simple-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                        <div className="text-lg mb-1">{item.element}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Brand Voice */}
                <div>
                  <div className="text-xs text-gray-700 dark:text-gray-400 mb-2 font-medium">Brand Voice</div>
                  <div className="grid grid-cols-3 gap-1">
                    {['Professional', 'Innovative', 'Reliable'].map((trait, i) => (
                      <div 
                        key={trait}
                        className="text-center p-1 bg-[#FF4D00]/10 dark:bg-[#FF4D00]/20 rounded text-xs text-[#FF4D00] dark:text-orange-400 animate-fade-in-out"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      >
                        {trait}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Brand Symbol */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#FF4D00] to-orange-600 rounded-lg animate-clean-rotate flex items-center justify-center">
                    <div className="text-white font-bold text-sm">©</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'web-development':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              {/* Web Development Workspace */}
              <div className="w-full max-w-md h-full max-h-96 glass-clean rounded-lg p-4 relative overflow-hidden">
                {/* IDE Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-700 dark:text-gray-400">VS Code</span>
                  </div>
                  <div className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded">Dev Server</div>
                </div>
                
                {/* File Explorer */}
                <div className="mb-3">
                  <div className="text-xs text-gray-700 dark:text-gray-400 mb-2">📁 Project Files</div>
                  <div className="space-y-1">
                    {[
                      { name: 'index.html', icon: '🌐', status: 'modified' },
                      { name: 'style.css', icon: '🎨', status: 'saved' },
                      { name: 'app.js', icon: '⚡', status: 'active' },
                      { name: 'components/', icon: '📦', status: 'folder' }
                    ].map((file, i) => (
                      <div 
                        key={file.name}
                        className={`flex items-center space-x-2 text-xs p-1 rounded animate-smooth-slide ${
                          file.status === 'active' ? 'bg-blue-100 dark:bg-blue-900/30' : ''
                        }`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <span>{file.icon}</span>
                        <span className="flex-1 text-gray-800 dark:text-gray-300">{file.name}</span>
                        {file.status === 'modified' && <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>}
                        {file.status === 'active' && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-smooth-pulse"></div>}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Code Editor */}
                <div className="mb-3 p-2 bg-gray-900 dark:bg-gray-950 rounded text-xs overflow-hidden border border-gray-300 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-400">app.js</span>
                    <div className="w-1 h-1 bg-green-500 rounded-full animate-smooth-pulse"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-purple-400 animate-smooth-slide">const app = () =&gt; &#123;</div>
                    <div className="text-blue-400 animate-smooth-slide" style={{ animationDelay: '0.2s' }}>  return (</div>
                    <div className="text-green-400 animate-smooth-slide" style={{ animationDelay: '0.4s' }}>    &lt;div className="app"&gt;</div>
                    <div className="text-yellow-400 animate-smooth-slide" style={{ animationDelay: '0.6s' }}>      &lt;Header /&gt;</div>
                    <div className="text-yellow-400 animate-smooth-slide" style={{ animationDelay: '0.8s' }}>      &lt;Main /&gt;</div>
                    <div className="text-green-400 animate-smooth-slide" style={{ animationDelay: '1.0s' }}>    &lt;/div&gt;</div>
                    <div className="text-blue-400 animate-smooth-slide" style={{ animationDelay: '1.2s' }}>  );</div>
                    <div className="text-purple-400 animate-smooth-slide" style={{ animationDelay: '1.4s' }}>&#125;</div>
                  </div>
                </div>
                
                {/* Browser Preview */}
                <div className="mb-3">
                  <div className="text-xs text-gray-700 dark:text-gray-400 mb-2">🌐 Browser Preview</div>
                  <div className="border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
                    {/* Browser Bar */}
                    <div className="h-4 bg-gray-100 dark:bg-gray-800 flex items-center px-2">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center text-xs text-gray-600 dark:text-gray-400">localhost:3000</div>
                    </div>
                    
                    {/* Website Content */}
                    <div className="h-12 bg-white dark:bg-gray-900 p-2">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-1 animate-smooth-slide">
                        <div className="w-8 h-2 bg-blue-600 rounded"></div>
                        <div className="w-6 h-1.5 bg-blue-600 rounded animate-clean-glow"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="grid grid-cols-3 gap-1">
                        {[...Array(6)].map((_, i) => (
                          <div 
                            key={i}
                            className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded animate-smooth-slide"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Development Tools */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { tool: 'React', status: 'Running', color: 'blue' },
                    { tool: 'Webpack', status: 'Building', color: 'orange' },
                    { tool: 'Git', status: 'Clean', color: 'green' }
                  ].map((item, i) => (
                    <div 
                      key={item.tool}
                      className="text-center p-1 bg-white/60 dark:bg-black/20 rounded animate-fade-in-out border border-gray-200 dark:border-gray-600"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      <div className="text-xs font-medium text-gray-900 dark:text-white">{item.tool}</div>
                      <div className={`text-xs text-${item.color}-600 dark:text-${item.color}-400`}>{item.status}</div>
                      {item.status === 'Building' && (
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-0.5 mt-1">
                          <div className="bg-orange-500 h-0.5 rounded-full animate-progress-fill"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'app-development':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-purple-500/10 to-indigo-500/5 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              {/* Mobile App Development Interface */}
              <div className="flex items-center justify-center h-full space-x-6 max-w-lg">
                {/* Main Device */}
                <div className="relative">
                  <div className="w-32 h-56 bg-gray-900 rounded-3xl border-4 border-gray-700 relative overflow-hidden shadow-2xl">
                    {/* Screen */}
                    <div className="absolute inset-3 bg-gradient-to-b from-purple-900/40 to-indigo-900/40 rounded-2xl overflow-hidden">
                      {/* Status bar */}
                      <div className="h-6 bg-gradient-to-r from-purple-600/60 to-indigo-600/60 flex items-center justify-between px-2">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full animate-smooth-pulse"></div>
                          <div className="w-1 h-1 bg-white rounded-full animate-smooth-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-1 h-1 bg-white rounded-full animate-smooth-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <div className="text-white text-xs font-medium">EdotApp</div>
                        <div className="text-white text-xs">100%</div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-3 space-y-2">
                        {/* Navigation */}
                        <div className="flex justify-between items-center mb-3">
                          <div className="w-6 h-6 bg-purple-500 rounded-lg animate-smooth-pulse flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded"></div>
                          </div>
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Content Cards */}
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="p-2 bg-white/10 rounded-lg animate-smooth-slide"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-indigo-500 rounded"></div>
                              <div className="flex-1 h-1 bg-purple-400/60 rounded"></div>
                            </div>
                            <div className="space-y-1">
                              <div className="w-full h-1 bg-indigo-400/40 rounded"></div>
                              <div className="w-3/4 h-1 bg-indigo-400/30 rounded"></div>
                            </div>
                          </div>
                        ))}
                        
                        {/* Bottom Action */}
                        <div className="mt-4 p-2 bg-[#FF4D00] rounded-lg text-center animate-clean-glow">
                          <div className="text-white text-xs font-medium">Get Started</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                  
                  {/* Device Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-3xl"></div>
                </div>
                
                {/* Development Tools Panel */}
                <div className="w-40 h-56 glass-clean rounded-lg p-3">
                  <div className="text-xs font-bold text-purple-600 mb-3">Development Tools</div>
                  
                  {/* Code Editor Simulation */}
                  <div className="mb-3 p-2 bg-gray-900 rounded text-xs">
                    <div className="text-purple-400 animate-smooth-slide">const app = () =&gt; &#123;</div>
                    <div className="text-blue-400 animate-smooth-slide" style={{ animationDelay: '0.2s' }}>  return (</div>
                    <div className="text-green-400 animate-smooth-slide" style={{ animationDelay: '0.4s' }}>    &lt;AppComponent /&gt;</div>
                    <div className="text-blue-400 animate-smooth-slide" style={{ animationDelay: '0.6s' }}>  );</div>
                    <div className="text-purple-400 animate-smooth-slide" style={{ animationDelay: '0.8s' }}>&#125;</div>
                  </div>
                  
                  {/* Build Status */}
                  <div className="space-y-2">
                    {[
                      { task: 'Compile', status: 'Complete', color: 'green' },
                      { task: 'Bundle', status: 'Running', color: 'yellow' },
                      { task: 'Deploy', status: 'Pending', color: 'gray' }
                    ].map((item, i) => (
                      <div key={item.task} className="flex items-center space-x-2 animate-smooth-slide" style={{ animationDelay: `${i * 0.3}s` }}>
                        <div className={`w-2 h-2 bg-${item.color}-500 rounded-full ${item.status === 'Running' ? 'animate-smooth-pulse' : ''}`}></div>
                        <div className="flex-1 text-xs">{item.task}</div>
                        <div className={`text-xs text-${item.color}-600`}>{item.status}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Device Testing */}
                  <div className="mt-4">
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Testing</div>
                    <div className="grid grid-cols-3 gap-1">
                      {['iOS', 'Android', 'Web'].map((platform, i) => (
                        <div 
                          key={platform}
                          className={`text-center p-1 rounded text-xs ${i === 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600'} animate-fade-in-out`}
                          style={{ animationDelay: `${i * 0.2}s` }}
                        >
                          {platform}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Touch Interactions */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-12 h-12 border-2 border-purple-400/50 rounded-full animate-smooth-pulse"
                    style={{
                      top: `${25 + i * 30}%`,
                      right: `${-10 + i * 5}px`,
                      animationDelay: `${i * 0.8}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'graphic-design':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-pink-500/10 to-rose-500/5 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              {/* Design Workspace */}
              <div className="w-full max-w-md h-full max-h-96 glass-clean rounded-lg p-4 relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-pink-600">Creative Studio</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-smooth-pulse"></div>
                    <span className="text-xs text-gray-600">Design Mode</span>
                  </div>
                </div>
                
                {/* Main Artboard */}
                <div className="mb-4 p-3 bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-pink-300 dark:border-pink-600 relative">
                  {/* Canvas Content */}
                  <div className="space-y-3">
                    {/* Header Design */}
                    <div className="flex items-center justify-between animate-smooth-slide">
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-8 bg-gradient-to-r from-[#FF4D00] to-orange-500 rounded animate-clean-glow flex items-center justify-center text-white text-xs font-bold">LOGO</div>
                        <div className="space-y-1">
                          <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        </div>
                      </div>
                      <div className="w-8 h-6 bg-pink-500 rounded animate-smooth-pulse"></div>
                    </div>
                    
                    {/* Hero Section */}
                    <div className="p-3 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded animate-smooth-slide" style={{ animationDelay: '0.2s' }}>
                      <div className="w-20 h-2 bg-pink-600 rounded mb-2"></div>
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-gray-400 dark:bg-gray-500 rounded"></div>
                        <div className="w-3/4 h-1 bg-gray-400 dark:bg-gray-500 rounded"></div>
                        <div className="w-1/2 h-1 bg-gray-400 dark:bg-gray-500 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Content Grid */}
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i}
                          className="space-y-1 animate-smooth-slide"
                          style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                        >
                          <div className="w-full h-6 bg-gradient-to-br from-pink-300 to-purple-300 rounded"></div>
                          <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          <div className="w-2/3 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Selection Tool */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-2 border-pink-600 border-dashed animate-simple-bounce"></div>
                </div>
                
                {/* Design Tools & Color Palette */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Tools */}
                  <div>
                    <div className="text-xs text-gray-700 dark:text-gray-400 mb-2">Tools</div>
                    <div className="grid grid-cols-4 gap-1">
                      {[
                        { name: 'Select', icon: '↖️', active: true },
                        { name: 'Brush', icon: '🖌️', active: false },
                        { name: 'Text', icon: '📝', active: false },
                        { name: 'Shape', icon: '⬜', active: false }
                      ].map((tool, i) => (
                        <div 
                          key={tool.name}
                          className={`text-center p-1 rounded text-xs ${tool.active ? 'bg-pink-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} animate-smooth-slide`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <div className="text-sm">{tool.icon}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Color Palette */}
                  <div>
                    <div className="text-xs text-gray-700 dark:text-gray-400 mb-2">Colors</div>
                    <div className="grid grid-cols-4 gap-1">
                      {[
                        { color: '#FF4D00', name: 'Primary' },
                        { color: '#EC4899', name: 'Accent' },
                        { color: '#8B5CF6', name: 'Purple' },
                        { color: '#06B6D4', name: 'Cyan' }
                      ].map((colorItem, i) => (
                        <div 
                          key={colorItem.name}
                          className="text-center animate-smooth-pulse"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        >
                          <div 
                            className="w-6 h-6 rounded mx-auto mb-1 border-2 border-white dark:border-gray-600 shadow-sm" 
                            style={{ backgroundColor: colorItem.color }}
                          />
                          <div className="text-xs text-gray-600 dark:text-gray-400">{colorItem.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Layer Panel */}
                <div className="absolute top-4 right-4 w-20 bg-white/90 dark:bg-gray-800/90 rounded p-2 border border-gray-200 dark:border-gray-600">
                  <div className="text-xs font-medium mb-2 text-gray-800 dark:text-white">Layers</div>
                  {['Header', 'Hero', 'Content', 'Footer'].map((layer, i) => (
                    <div 
                      key={layer}
                      className="flex items-center space-x-1 mb-1 animate-smooth-slide"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
                      <div className="text-xs text-gray-700 dark:text-gray-300">{layer}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'marketing':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              {/* Marketing Dashboard */}
              <div className="w-full max-w-md h-full max-h-96 glass-clean rounded-lg p-4 relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Campaign Analytics</h3>
                  <div className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded">Live</div>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { label: 'CTR', value: '4.2%', change: '+12%' },
                    { label: 'ROI', value: '340%', change: '+28%' },
                    { label: 'Leads', value: '1.2K', change: '+45%' },
                    { label: 'Sales', value: '$47K', change: '+18%' }
                  ].map((metric, i) => (
                    <div 
                      key={metric.label} 
                      className="text-center p-2 bg-white/60 dark:bg-black/20 rounded animate-fade-in-out border border-gray-200 dark:border-gray-600"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">{metric.value}</div>
                      <div className="text-xs text-emerald-600 dark:text-emerald-400">{metric.change}</div>
                    </div>
                  ))}
                </div>
                
                {/* Growth Chart */}
                <div className="mb-3">
                  <div className="text-xs text-gray-700 dark:text-gray-400 mb-2">Revenue Growth</div>
                  <div className="flex items-end space-x-1 h-16 bg-white/40 dark:bg-black/20 rounded p-2 border border-gray-200 dark:border-gray-600">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t animate-chart-grow"
                        style={{
                          width: '6px',
                          height: `${25 + Math.sin(i * 0.8) * 20 + i * 2}px`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Channel Performance */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { channel: 'Social Media', performance: 85, color: 'bg-blue-500' },
                    { channel: 'Email', performance: 92, color: 'bg-purple-500' },
                    { channel: 'SEO', performance: 78, color: 'bg-green-500' },
                    { channel: 'PPC', performance: 89, color: 'bg-orange-500' }
                  ].map((item, i) => (
                    <div key={item.channel} className="flex items-center space-x-2 animate-smooth-slide" style={{ animationDelay: `${i * 0.2}s` }}>
                      <div className={`w-2 h-2 ${item.color} rounded-full`}></div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-700 dark:text-gray-400">{item.channel}</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                          <div 
                            className={`h-1 ${item.color} rounded-full animate-progress-fill`}
                            style={{ 
                              width: `${item.performance}%`,
                              animationDelay: `${i * 0.3}s`
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-gray-800 dark:text-white">{item.performance}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'software-solutions':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              {/* Enterprise Software Dashboard */}
              <div className="w-full max-w-md h-full max-h-96 glass-clean rounded-lg p-4 relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400">System Control Panel</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-smooth-pulse"></div>
                    <span className="text-xs text-gray-700 dark:text-gray-400">Online</span>
                  </div>
                </div>
                
                {/* System Status Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { name: 'API Server', status: 'Active', load: 67, color: 'green' },
                    { name: 'Database', status: 'Optimal', load: 23, color: 'blue' },
                    { name: 'Cache', status: 'Healthy', load: 45, color: 'purple' },
                    { name: 'Queue', status: 'Running', load: 12, color: 'orange' },
                    { name: 'Storage', status: 'Available', load: 78, color: 'teal' },
                    { name: 'CDN', status: 'Distributed', load: 34, color: 'pink' }
                  ].map((system, i) => (
                    <div 
                      key={system.name}
                      className="p-2 bg-white/40 dark:bg-black/20 rounded text-center animate-smooth-slide border border-gray-200 dark:border-gray-600"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="text-xs font-medium text-gray-900 dark:text-white">{system.name}</div>
                      <div className={`text-xs text-${system.color}-600 dark:text-${system.color}-400 mb-1`}>{system.status}</div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                        <div 
                          className={`h-1 bg-${system.color}-500 rounded-full animate-progress-fill`}
                          style={{ 
                            width: `${system.load}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: '2s'
                          }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{system.load}%</div>
                    </div>
                  ))}
                </div>
                
                {/* Recent Activity */}
                <div className="space-y-1">
                  <div className="text-xs text-gray-700 dark:text-gray-400 mb-2">Recent Activity</div>
                  {[
                    { activity: 'User Authentication', time: '2min ago', status: 'success' },
                    { activity: 'Data Sync Complete', time: '5min ago', status: 'success' },
                    { activity: 'Backup Initiated', time: '12min ago', status: 'processing' },
                    { activity: 'Cache Refresh', time: '18min ago', status: 'success' }
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className="flex items-center justify-between text-xs p-2 bg-white/30 dark:bg-black/10 rounded animate-smooth-slide border border-gray-200 dark:border-gray-600"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          item.status === 'success' ? 'bg-green-500' : 
                          item.status === 'processing' ? 'bg-yellow-500 animate-smooth-pulse' : 'bg-red-500'
                        }`}></div>
                        <span className="text-gray-800 dark:text-gray-300">{item.activity}</span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'ui-ux-design':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              {/* Design Tool Interface */}
              <div className="w-full max-w-md h-full max-h-96 glass-clean rounded-lg p-4 relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-cyan-600 dark:text-cyan-400">Design System</h3>
                  <div className="flex space-x-1">
                    {['Desktop', 'Mobile'].map((device, i) => (
                      <div 
                        key={device}
                        className={`text-xs px-2 py-1 rounded ${i === 0 ? 'bg-cyan-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'} animate-fade-in-out`}
                        style={{ animationDelay: `${i * 0.3}s` }}
                      >
                        {device}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Wireframe Canvas */}
                <div className="mb-4 p-3 bg-white dark:bg-gray-800 rounded border-2 border-dashed border-cyan-300 dark:border-cyan-600 relative">
                  {/* Header Section */}
                  <div className="flex items-center justify-between mb-3 animate-smooth-slide">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-2 bg-cyan-400 dark:bg-cyan-500 rounded animate-smooth-pulse"></div>
                      <div className="w-12 h-2 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </div>
                    <div className="w-6 h-2 bg-[#FF4D00] rounded animate-clean-glow"></div>
                  </div>
                  
                  {/* Content Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[...Array(6)].map((_, i) => (
                      <div 
                        key={i}
                        className="space-y-1 animate-smooth-slide"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="w-3/4 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="w-1/2 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Interactive Elements */}
                  <div className="flex space-x-2">
                    <div className="px-3 py-1 bg-cyan-600 text-white text-xs rounded animate-smooth-pulse">Primary</div>
                    <div className="px-3 py-1 border border-cyan-600 text-cyan-600 dark:text-cyan-400 text-xs rounded animate-smooth-pulse" style={{ animationDelay: '0.2s' }}>Secondary</div>
                  </div>
                  
                  {/* Cursor */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-l-2 border-b-2 border-cyan-600 dark:border-cyan-400 animate-simple-bounce"></div>
                </div>
                
                {/* Component Library */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { name: 'Button', color: 'bg-blue-500' },
                    { name: 'Input', color: 'bg-green-500' },
                    { name: 'Card', color: 'bg-purple-500' },
                    { name: 'Modal', color: 'bg-orange-500' }
                  ].map((component, i) => (
                    <div 
                      key={component.name}
                      className="text-center p-2 bg-white/30 dark:bg-black/20 rounded animate-smooth-slide"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div className={`w-6 h-6 ${component.color} rounded mx-auto mb-1`}></div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{component.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'cloud-solutions':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-gray-500/10 to-slate-500/5 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              {/* Cloud Infrastructure Dashboard */}
              <div className="w-full max-w-md h-full max-h-96 glass-clean rounded-lg p-4 relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300">Cloud Infrastructure</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-smooth-pulse"></div>
                    <span className="text-xs text-gray-700 dark:text-gray-400">3 Regions Active</span>
                  </div>
                </div>
                
                {/* Cloud Services Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { service: 'Compute', instances: '24', status: 'Running', icon: '⚡' },
                    { service: 'Storage', usage: '2.4TB', status: 'Available', icon: '💾' },
                    { service: 'Network', bandwidth: '156GB', status: 'Optimal', icon: '🌐' },
                    { service: 'Database', queries: '1.2M', status: 'Healthy', icon: '🗄️' },
                    { service: 'Cache', hits: '98.2%', status: 'Efficient', icon: '⚡' },
                    { service: 'CDN', nodes: '47', status: 'Global', icon: '🌍' }
                  ].map((item, i) => (
                    <div 
                      key={item.service}
                      className="p-2 bg-white/40 dark:bg-black/20 rounded text-center animate-smooth-slide border border-gray-200 dark:border-gray-600"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="text-lg mb-1 animate-simple-bounce" style={{ animationDelay: `${i * 0.2}s` }}>{item.icon}</div>
                      <div className="text-xs font-medium text-gray-900 dark:text-white">{item.service}</div>
                      <div className="text-xs font-bold text-gray-800 dark:text-gray-300">{item.instances || item.usage || item.bandwidth || item.queries || item.hits || item.nodes}</div>
                      <div className="text-xs text-green-600 dark:text-green-400">{item.status}</div>
                    </div>
                  ))}
                </div>
                
                {/* Resource Usage */}
                <div className="mb-3">
                  <div className="text-xs text-gray-700 dark:text-gray-400 mb-2">Resource Utilization</div>
                  <div className="space-y-2">
                    {[
                      { resource: 'CPU', usage: 67, color: 'blue' },
                      { resource: 'Memory', usage: 45, color: 'green' },
                      { resource: 'Storage', usage: 78, color: 'orange' },
                      { resource: 'Network', usage: 34, color: 'purple' }
                    ].map((resource, i) => (
                      <div key={resource.resource} className="flex items-center space-x-2 animate-smooth-slide" style={{ animationDelay: `${i * 0.15}s` }}>
                        <div className="w-12 text-xs text-gray-700 dark:text-gray-400">{resource.resource}</div>
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 bg-${resource.color}-500 rounded-full animate-progress-fill`}
                            style={{ 
                              width: `${resource.usage}%`,
                              animationDelay: `${i * 0.3}s`,
                              animationDuration: '2s'
                            }}
                          ></div>
                        </div>
                        <div className="text-xs font-medium text-gray-800 dark:text-white w-8">{resource.usage}%</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Deployment Status */}
                <div className="grid grid-cols-3 gap-1 text-xs">
                  {['US-East', 'EU-West', 'Asia-Pacific'].map((region, i) => (
                    <div 
                      key={region}
                      className="text-center p-1 bg-white/30 dark:bg-black/10 rounded animate-fade-in-out border border-gray-200 dark:border-gray-600"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div className="text-gray-800 dark:text-gray-300">{region}</div>
                      <div className="text-green-600 dark:text-green-400 text-xs">Active</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'legal-solutions':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-amber-500/10 to-yellow-500/5 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              {/* Legal Document Management Interface */}
              <div className="w-full max-w-md h-full max-h-96 glass-clean rounded-lg p-4 relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-amber-700 dark:text-amber-400">Legal Management</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-smooth-pulse"></div>
                    <span className="text-xs text-gray-700 dark:text-gray-400">Compliant</span>
                  </div>
                </div>
                
                {/* Document Types */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { type: 'Contracts', count: '127', status: 'Active', icon: '📄' },
                    { type: 'Privacy Policy', count: '1', status: 'Updated', icon: '🔒' },
                    { type: 'Terms of Service', count: '1', status: 'Current', icon: '📋' },
                    { type: 'NDAs', count: '23', status: 'Signed', icon: '🤐' }
                  ].map((doc, i) => (
                    <div 
                      key={doc.type}
                      className="p-2 bg-white/40 dark:bg-black/20 rounded animate-smooth-slide border border-gray-200 dark:border-gray-600"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm animate-simple-bounce" style={{ animationDelay: `${i * 0.2}s` }}>{doc.icon}</span>
                        <span className="text-xs font-medium text-gray-900 dark:text-white">{doc.type}</span>
                      </div>
                      <div className="text-sm font-bold text-amber-700 dark:text-amber-400">{doc.count}</div>
                      <div className="text-xs text-green-600 dark:text-green-400">{doc.status}</div>
                    </div>
                  ))}
                </div>
                
                {/* Compliance Status */}
                <div className="mb-4">
                  <div className="text-xs text-gray-700 dark:text-gray-400 mb-2">Compliance Overview</div>
                  <div className="space-y-2">
                    {[
                      { regulation: 'GDPR', compliance: 100, status: 'Compliant' },
                      { regulation: 'CCPA', compliance: 95, status: 'Review Needed' },
                      { regulation: 'COPPA', compliance: 100, status: 'Compliant' },
                      { regulation: 'SOX', compliance: 88, status: 'In Progress' }
                    ].map((item, i) => (
                      <div key={item.regulation} className="flex items-center space-x-2 animate-smooth-slide" style={{ animationDelay: `${i * 0.2}s` }}>
                        <div className="w-10 text-xs text-gray-700 dark:text-gray-400">{item.regulation}</div>
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 ${item.compliance === 100 ? 'bg-green-500' : item.compliance >= 95 ? 'bg-yellow-500' : 'bg-orange-500'} rounded-full animate-progress-fill`}
                            style={{ 
                              width: `${item.compliance}%`,
                              animationDelay: `${i * 0.3}s`,
                              animationDuration: '2s'
                            }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-800 dark:text-white w-16">{item.compliance}%</div>
                        <div className={`text-xs ${item.compliance === 100 ? 'text-green-600 dark:text-green-400' : item.compliance >= 95 ? 'text-yellow-600 dark:text-yellow-400' : 'text-orange-600 dark:text-orange-400'}`}>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Recent Legal Activity */}
                <div className="space-y-1">
                  <div className="text-xs text-gray-700 dark:text-gray-400 mb-2">Recent Activity</div>
                  {[
                    { activity: 'Contract Review Complete', time: '2h ago', type: 'contract' },
                    { activity: 'Privacy Policy Updated', time: '1d ago', type: 'policy' },
                    { activity: 'NDA Template Created', time: '3d ago', type: 'template' }
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className="flex items-center justify-between text-xs p-2 bg-white/30 dark:bg-black/10 rounded animate-smooth-slide border border-gray-200 dark:border-gray-600"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        <span className="text-gray-800 dark:text-gray-300">{item.activity}</span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-[#FF4D00]/10 to-primary-light/5 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-[#FF4D00] rounded-full animate-clean-rotate"></div>
          </div>
        );
    }
  };

  return (
    <div className={className}>
      {getAnimation(serviceId)}
    </div>
  );
};

// Service detail data
const serviceDetails = [
  {
    id: "branding",
    title: "Branding",
    subtitle: "Building memorable brand identities",
    description: "We create compelling brand identities that resonate with your audience and distinguish your business in the market. Our branding services help you establish a strong visual presence and communicate your values effectively.",
    image: "/images/services/branding.jpg",
    features: [
      "Brand Strategy Development",
      "Logo & Visual Identity Design",
      "Brand Guidelines",
      "Brand Positioning",
      "Brand Messaging",
      "Rebranding Services",
      "Brand Voice & Tone",
      "Visual Identity Systems"
    ],
    process: [
      { step: 1, title: "Research", description: "In-depth market and competitor analysis to understand your positioning" },
      { step: 2, title: "Strategy", description: "Define your brand's unique value proposition and target audience" },
      { step: 3, title: "Design", description: "Create visual elements that embody your brand identity" },
      { step: 4, title: "Implementation", description: "Roll out your brand identity across all channels and touchpoints" }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'Creating exceptional web experiences',
    description: 'We build modern, responsive, and high-performance websites that deliver exceptional user experiences. Our web development team combines technical expertise with creative design to create websites that engage your audience and achieve your business goals.',
    image: '/images/services/web-dev.jpg',
    features: [
      'Custom Website Design & Development',
      'E-commerce Solutions',
      'Content Management Systems',
      'Web Applications',
      'Progressive Web Apps',
      'Website Optimization & Maintenance',
      'API Development & Integration',
      'Custom WordPress Development',
      'Headless CMS Solutions',
      'Web Performance Optimization'
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Understand your goals, target audience, and technical requirements.' },
      { step: 2, title: 'Planning', description: 'Create wireframes, sitemaps, and technical specifications.' },
      { step: 3, title: 'Design', description: 'Develop visual mockups and user interface designs.' },
      { step: 4, title: 'Development', description: 'Build the website with clean, efficient, and maintainable code.' },
      { step: 5, title: 'Testing', description: 'Ensure perfect functionality across devices and browsers.' },
      { step: 6, title: 'Launch', description: 'Deploy the website and provide training and support.' },
    ],
  },
  {
    id: 'app-development',
    title: 'App Development',
    subtitle: 'Creating powerful mobile solutions',
    description: 'Our team creates intuitive and feature-rich mobile applications for iOS and Android platforms. We focus on creating seamless user experiences, optimized performance, and scalable architecture to ensure your app stands out in the market.',
    image: '/images/services/app-dev.jpg',
    features: [
      'Native iOS & Android Development',
      'Cross-Platform Development',
      'UI/UX Design for Mobile',
      'App Strategy & Consulting',
      'App Maintenance & Updates',
      'App Store Optimization',
      'Push Notification Integration',
      'Offline Functionality',
      'Analytics & Tracking',
      'App Security & Testing'
    ],
    process: [
      { step: 1, title: 'Strategy', description: 'Define your app\'s purpose, features, and target platform.' },
      { step: 2, title: 'Design', description: 'Create wireframes and user interface designs optimized for mobile.' },
      { step: 3, title: 'Development', description: 'Build the app with robust code and efficient architecture.' },
      { step: 4, title: 'Testing', description: 'Conduct thorough testing across devices and operating systems.' },
      { step: 5, title: 'Deployment', description: 'Launch the app on App Store or Google Play Store.' },
      { step: 6, title: 'Maintenance', description: 'Provide ongoing support, updates, and feature enhancements.' },
    ],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    subtitle: 'Creating impactful visual content',
    description: 'We deliver stunning visuals that effectively communicate your message and enhance your brand. Our graphic design services span from print to digital, creating cohesive and compelling visual content for all your marketing needs.',
    image: '/images/services/graphic-design.jpg',
    features: [
      'Marketing Collateral Design',
      'Social Media Graphics',
      'Packaging Design',
      'Illustration',
      'Infographics',
      'Print Design',
      'Brand Style Guides',
      'Visual Identity Systems',
      'Motion Graphics',
      '3D Design & Rendering'
    ],
    process: [
      { step: 1, title: 'Brief', description: 'Understand your design needs, goals, and target audience.' },
      { step: 2, title: 'Concept', description: 'Generate creative concepts that align with your brand.' },
      { step: 3, title: 'Design', description: 'Create high-quality designs with attention to detail.' },
      { step: 4, title: 'Refinement', description: 'Incorporate feedback and make necessary adjustments.' },
      { step: 5, title: 'Finalization', description: 'Deliver final designs in appropriate formats for use.' },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    subtitle: 'Driving growth through strategic marketing',
    description: 'Our data-driven marketing strategies help you reach your target audience and achieve your business goals. We create comprehensive marketing campaigns that increase brand awareness, generate leads, and drive conversions.',
    image: '/images/services/marketing.jpg',
    features: [
      'Digital Marketing Strategy',
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Pay-Per-Click Advertising',
      'Conversion Rate Optimization',
      'Marketing Analytics & Reporting',
      'Influencer Marketing',
      'Video Marketing'
    ],
    process: [
      { step: 1, title: 'Analysis', description: 'Evaluate your current marketing efforts and identify opportunities.' },
      { step: 2, title: 'Strategy', description: 'Develop a tailored marketing plan aligned with your goals.' },
      { step: 3, title: 'Execution', description: 'Implement marketing campaigns across relevant channels.' },
      { step: 4, title: 'Monitoring', description: 'Track performance using analytics and key metrics.' },
      { step: 5, title: 'Optimization', description: 'Refine strategies based on data and market response.' },
      { step: 6, title: 'Reporting', description: 'Provide transparent reports on results and ROI.' },
    ],
  },
  {
    id: 'software-solutions',
    title: 'Software Solutions',
    subtitle: 'Custom enterprise software development',
    description: 'We develop robust, scalable software solutions tailored to your business needs. Our enterprise software development services help streamline operations, improve efficiency, and drive innovation across your organization.',
    image: '/images/services/software.jpg',
    features: [
      'Custom Software Development',
      'Enterprise Resource Planning (ERP)',
      'Customer Relationship Management (CRM)',
      'Business Intelligence Solutions',
      'Cloud Migration Services',
      'Legacy System Modernization',
      'API Development & Integration',
      'Database Design & Optimization',
      'Workflow Automation',
      'Security Implementation'
    ],
    process: [
      { step: 1, title: 'Requirements Analysis', description: 'Gather and analyze business requirements and technical specifications.' },
      { step: 2, title: 'Architecture Design', description: 'Design scalable and secure software architecture.' },
      { step: 3, title: 'Development', description: 'Build the software using best practices and modern technologies.' },
      { step: 4, title: 'Testing', description: 'Conduct comprehensive testing to ensure quality and reliability.' },
      { step: 5, title: 'Deployment', description: 'Deploy the solution with minimal disruption to operations.' },
      { step: 6, title: 'Support', description: 'Provide ongoing maintenance and support services.' },
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    subtitle: 'Creating intuitive user experiences',
    description: 'Our UI/UX design services focus on creating beautiful, intuitive interfaces that enhance user engagement and satisfaction. We combine aesthetic excellence with functional design to deliver experiences that users love.',
    image: '/images/services/ui-ux.jpg',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'User Interface Design',
      'User Experience Design',
      'Interaction Design',
      'Usability Testing',
      'Design Systems',
      'Responsive Design',
      'Accessibility Compliance',
      'Design Handoff'
    ],
    process: [
      { step: 1, title: 'Research', description: 'Understand user needs, behaviors, and pain points.' },
      { step: 2, title: 'Wireframing', description: 'Create low-fidelity wireframes to outline structure and flow.' },
      { step: 3, title: 'Design', description: 'Develop high-fidelity designs with attention to detail.' },
      { step: 4, title: 'Prototyping', description: 'Build interactive prototypes for testing and validation.' },
      { step: 5, title: 'Testing', description: 'Conduct usability testing and gather feedback.' },
      { step: 6, title: 'Refinement', description: 'Refine designs based on testing results and feedback.' },
    ],
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    subtitle: 'Scalable cloud infrastructure and services',
    description: 'We help businesses leverage the power of cloud computing to improve scalability, reliability, and cost-efficiency. Our cloud solutions enable organizations to focus on innovation while we handle the technical infrastructure.',
    image: '/images/services/cloud.jpg',
    features: [
      'Cloud Strategy & Consulting',
      'Cloud Migration Services',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Serverless Architecture',
      'Cloud Security',
      'DevOps Implementation',
      'Containerization',
      'Cloud Cost Optimization',
      'Disaster Recovery Planning'
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluate current infrastructure and identify migration opportunities.' },
      { step: 2, title: 'Strategy', description: 'Develop a cloud migration and implementation strategy.' },
      { step: 3, title: 'Migration', description: 'Migrate applications and data to the cloud with minimal disruption.' },
      { step: 4, title: 'Optimization', description: 'Optimize cloud resources for performance and cost-efficiency.' },
      { step: 5, title: 'Security', description: 'Implement robust security measures to protect cloud resources.' },
      { step: 6, title: 'Management', description: 'Provide ongoing cloud management and support services.' },
    ],
  },
  {
    id: 'legal-solutions',
    title: 'Legal Solutions',
    subtitle: 'Comprehensive legal services for digital businesses',
    description: 'Our legal services are designed specifically for digital businesses, helping you navigate complex regulatory landscapes and ensure compliance while protecting your interests and intellectual property.',
    image: '/images/services/legal.jpg',
    features: [
      'Business Entity Formation',
      'Intellectual Property Protection',
      'Privacy Policy & Terms of Service',
      'GDPR & Data Protection Compliance',
      'Contract Drafting & Review',
      'Licensing Agreements',
      'Employment & Contractor Agreements',
      'Regulatory Compliance',
      'Dispute Resolution',
      'Legal Risk Assessment'
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Understand your business model and identify legal needs.' },
      { step: 2, title: 'Assessment', description: 'Evaluate current legal status and identify potential risks.' },
      { step: 3, title: 'Strategy', description: 'Develop a comprehensive legal strategy for your business.' },
      { step: 4, title: 'Implementation', description: 'Put necessary legal documents and protections in place.' },
      { step: 5, title: 'Compliance', description: 'Ensure ongoing compliance with relevant regulations.' },
      { step: 6, title: 'Maintenance', description: 'Regular updates to legal documents as your business evolves.' },
    ],
  }
];

// Service overview data
const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'We build modern, responsive websites and web applications that deliver exceptional user experiences.',
    icon: FaCode,
    link: '#web-development'
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Create powerful mobile solutions for iOS and Android with intuitive user experiences.',
    icon: FaMobileAlt,
    link: '#app-development'
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Build a memorable brand identity that resonates with your audience and stands out in the market.',
    icon: FaPaintBrush,
    link: '#branding'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Deliver stunning visuals that effectively communicate your message across all platforms.',
    icon: RiPaletteLine,
    link: '#graphic-design'
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Drive growth through strategic digital marketing campaigns that deliver measurable results.',
    icon: RiMegaphoneLine,
    link: '#marketing'
  },
  {
    id: 'software-solutions',
    title: 'Software Solutions',
    description: 'Custom enterprise software development to streamline operations and drive innovation.',
    icon: FaCogs,
    link: '#software-solutions'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Create intuitive, engaging user experiences that delight your customers and drive conversions.',
    icon: FaPalette,
    link: '#ui-ux-design'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Leverage cloud computing for improved scalability, reliability, and cost-efficiency.',
    icon: FaCloud,
    link: '#cloud-solutions'
  },
  {
    id: 'legal-solutions',
    title: 'Legal Solutions',
    description: 'Comprehensive legal setup and compliance services for your digital business.',
    icon: FaBalanceScale,
    link: '#legal-solutions'
  }
];

export default function Services() {
  
  return (
    <main className="relative services-page min-h-screen">
      <PageHero
        badge="Our Services"
        title="Comprehensive Digital Solutions"
        description="Explore our wide range of services designed to elevate your brand and drive business growth, from strategy to execution."
      />

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-dark-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 glass-card backdrop-blur-none md:backdrop-blur-lg"
                >
                  <div className="text-3xl text-primary mb-4">
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-technor text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-supreme text-sm">{service.description}</p>
                  <Button 
                    href={`/services/${service.id}`}
                    icon={<RiArrowRightLine />}
                    variant="outline"
                    className="text-sm"
                  >
                    Learn More
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence>
            {serviceDetails.map((service, index) => (
              <section
                key={service.id}
                id={service.id}
                className={`py-20 ${
                  index % 2 === 0 ? 'bg-primary/5 dark:bg-black/20' : 'bg-white dark:bg-transparent'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Service Content */}
                  <div
                    className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} font-supreme`}
                  >
                    <div className="mb-2 inline-block py-1 px-3 bg-primary/10 rounded-full -left-1 relative">
                      <span className="text-primary text-sm font-medium font-pilcrow uppercase">{service.subtitle}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-roundo uppercase font-semibold text-primary-light dark:text-primary mb-6 break-words">{service.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-8 font-pilcrow">{service.description}</p>
                    
                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-xl font-technor mb-4">What We Offer</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start">
                            <RiCheckLine className="text-primary mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 font-pilcrow">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Process */}
                    <div>
                      <h3 className="text-xl font-technor mb-4">Our Process</h3>
                      <div className="space-y-4">
                        {service.process?.map((item, index) => (
                          <div key={index} className="flex">
                            <div className="mr-4 flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-primary dark:bg-primary text-white flex items-center justify-center font-medium">
                                {item.step}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-technor text-primary mb-1">{item.title}</h3>
                              <p className="text-gray-600 dark:text-gray-400 font-pilcrow">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button 
                        href={`/services/${service.id}`}
                        icon={<RiArrowRightLine />}
                        className="bg-primary text-white hover:bg-primary-dark"
                      >
                        View Full Details
                      </Button>
                    </div>
                  </div>
                  
                  {/* Service Image */}
                  <div
                    className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-xl overflow-hidden group shadow-lg`}
                  >
                    <ServiceAnimation
                      serviceId={service.id}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </section>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-20 bg-white/5 dark:bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 dark:border-white/5"
            >
              <div className="inline-block bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-medium mb-4 font-pilcrow">
                FOR AGENCIES & FREELANCERS
              </div>
              <h2 className="text-3xl md:text-4xl font-technor text-black dark:text-white mb-6">
                Partner With Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 font-pilcrow">
                Are you an agency owner or freelancer looking to expand your service offerings? Partner with EdotStudio to provide top-tier development services to your clients without increasing overhead. We offer competitive referral commissions and white-label partnerships.
              </p>
              <Button 
                href="/partner" 
                className="bg-primary-light text-white hover:bg-primary"
              >
                Explore Partnership Opportunities
              </Button>
            </div>
            
            <div
              className="space-y-6"
            >
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/5">
                <h3 className="text-xl font-technor text-black dark:text-white mb-3">For Design Agencies</h3>
                <p className="text-gray-700 dark:text-gray-300 font-pilcrow">
                  Focus on design while we handle development. We'll work as your white-label development team to deliver exceptional results for your clients.
                </p>
              </div>
              
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/5">
                <h3 className="text-xl font-technor text-black dark:text-white mb-3">For Marketing Agencies</h3>
                <p className="text-gray-700 dark:text-gray-300 font-pilcrow">
                  Complement your marketing strategies with high-performance websites and applications that convert visitors into customers.
                </p>
              </div>
              
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-xl p-6 border border-white/20 dark:border-white/5">
                <h3 className="text-xl font-technor text-black dark:text-white mb-3">For Individual Referrals</h3>
                <p className="text-gray-700 dark:text-gray-300 font-pilcrow">
                  Earn competitive commissions by connecting us with businesses that need our expertise. Commissions are issued once the client completes full payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden w-full">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/10 via-transparent to-primary-light/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FF4D00]/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary-light/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            {/* Enhanced glassmorphism CTA card */}
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 lg:p-16 border border-white/25 dark:border-white/15 relative overflow-hidden group shadow-xl hover:bg-white/15 dark:hover:bg-white/8 hover:border-white/35 dark:hover:border-white/20 hover:shadow-[0_20px_50px_rgba(255,77,0,0.15)] dark:hover:shadow-[0_20px_50px_rgba(255,77,0,0.2)] w-full transition-all duration-500">
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-36 h-36 bg-[#FF4D00]/20 rounded-full blur-xl group-hover:bg-[#FF4D00]/25 group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-primary-light/20 rounded-full blur-xl group-hover:bg-primary-light/25 group-hover:scale-110 transition-all duration-500"></div>
              
              <div className="relative z-10 text-center w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-[#FF4D00] text-white px-6 py-3 rounded-full text-sm font-medium mb-8 font-pilcrow shadow-lg hover:bg-[#FF4D00]/90 hover:scale-105 hover:-translate-y-1 transition-all duration-500"
                >
                  <span>✨</span>
                  <span>TRANSFORM YOUR BUSINESS</span>
                </motion.div>
                
                <AnimatedTitle 
                  title="Ready to Transform Your Business?"
                  className="text-3xl md:text-5xl lg:text-6xl mb-6 font-technor text-black dark:text-white"
                />
                
                <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10 text-lg md:text-xl font-pilcrow leading-relaxed">
                  Let's discuss how our services can help you achieve your business goals and create a standout digital presence that drives results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full">
                  <Button 
                    href="/contact" 
                    className="bg-[#FF4D00] hover:bg-[#FF4D00]/90 text-white font-pilcrow shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-500"
                    size="lg"
                  >
                    Get in Touch
                  </Button>
                  <Button 
                    href="/portfolio" 
                    variant="outline"
                    className="border-gray-300 dark:border-white/30 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/40 hover:scale-105 hover:-translate-y-1 font-pilcrow transition-all duration-500"
                    size="lg"
                  >
                    View Our Work
                  </Button>
                </div>
                
                {/* Service highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {[
                    {
                      icon: "🚀",
                      title: "Fast Delivery",
                      description: "Quick turnaround without compromising quality"
                    },
                    {
                      icon: "💎",
                      title: "Premium Quality",
                      description: "Exceptional standards in every project"
                    },
                    {
                      icon: "🎯",
                      title: "Goal-Oriented",
                      description: "Solutions designed for your specific objectives"
                    }
                  ].map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center p-4 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/8 hover:border-white/30 dark:hover:border-white/15 hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-500"
                    >
                      <div className="text-2xl mb-3 hover:scale-110 transition-all duration-500">{highlight.icon}</div>
                      <h3 className="font-technor text-black dark:text-white mb-2">{highlight.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-pilcrow">{highlight.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 