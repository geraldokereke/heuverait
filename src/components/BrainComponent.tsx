import React, { useState } from 'react';
import { 
  Brain, Code, Smartphone, Cloud, Bot, Building2, GraduationCap, 
  Heart, ShoppingCart, Building, Scale, Cog, FileText, Users, 
  Briefcase, UserCheck, BookOpen, Wrench, Phone, FileEdit, Calendar,
  TrendingUp, Bell, Sun, Moon, Grid, Layers
} from 'lucide-react';

const HeuveraBrainSection = () => {
  const [currentDate] = useState(new Date());

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const ANALYTICS_DATA = [45, 78, 34, 89, 56, 67, 45, 78, 90, 23, 67, 89];
  const NOTIFICATIONS = [
    { text: "New AI solution deployed", time: "2 min ago" },
    { text: "Client consultation scheduled", time: "15 min ago" },
    { text: "System update completed", time: "1 hour ago" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="w-[800px] h-[610px] relative hidden xl:block overflow-visible mx-auto">
          {/* Connecting Lines - Linear lines only */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.2">
                  <animate attributeName="stop-opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.8">
                  <animate attributeName="stop-opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.2">
                  <animate attributeName="stop-opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            
            {/* Base lines - emerald theme */}
            <path
              d="M 130 72 L 130 315 L 340 315"
              stroke="#10b981"
              strokeWidth="1"
              fill="none"
              className="opacity-20"
            />
            <path
              d="M 580 72 L 580 315 L 360 315"
              stroke="#10b981"
              strokeWidth="1"
              fill="none"
              className="opacity-20"
            />
            <path
              d="M 580 528 L 580 335 L 360 335"
              stroke="#10b981"
              strokeWidth="1"
              fill="none"
              className="opacity-20"
            />
            <path
              d="M 130 528 L 130 335 L 340 335"
              stroke="#10b981"
              strokeWidth="1"
              fill="none"
              className="opacity-20"
            />
            <path
              d="M 352 0 L 352 315"
              stroke="#10b981"
              strokeWidth="1"
              fill="none"
              className="opacity-20"
            />
            <path
              d="M 352 600 L 352 300"
              stroke="#10b981"
              strokeWidth="1"
              fill="none"
              className="opacity-20"
            />

            {/* Animated lines */}
            <path
              d="M 130 72 L 130 315 L 340 315"
              stroke="url(#pulseGradient)"
              strokeWidth="1.5"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,1000;1000,0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 580 72 L 580 315 L 360 315"
              stroke="url(#pulseGradient)"
              strokeWidth="1.5"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,1000;1000,0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 580 528 L 580 335 L 360 335"
              stroke="url(#pulseGradient)"
              strokeWidth="1.5"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,1000;1000,0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 130 528 L 130 335 L 340 335"
              stroke="url(#pulseGradient)"
              strokeWidth="1.5"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,1000;1000,0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 352 0 L 352 315"
              stroke="url(#pulseGradient)"
              strokeWidth="1.5"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,1000;1000,0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M 352 600 L 352 300"
              stroke="url(#pulseGradient)"
              strokeWidth="1.5"
              fill="none"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,1000;1000,0"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

          {/* Top Component - Technology Services */}
          <div className="absolute -top-24 left-[240px] z-40 w-64 animate-[slideDown_0.8s_ease-out_0.5s_both]">
            <div className="relative">
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <defs>
                  <mask id="topFadeMask">
                    <linearGradient id="topFadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0" />
                      <stop offset="40%" stopColor="white" stopOpacity="0" />
                      <stop offset="60%" stopColor="white" stopOpacity="0.3" />
                      <stop offset="80%" stopColor="white" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="white" stopOpacity="1" />
                    </linearGradient>
                    <rect width="100%" height="100%" fill="url(#topFadeGradient)" rx="12" ry="12" />
                  </mask>
                </defs>
              </svg>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-emerald-500/20" style={{ mask: 'url(#topFadeMask)' }}>
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-xl opacity-30 bg-gradient-to-r from-emerald-500 to-green-500"
                    style={{
                      backgroundSize: '200% 100%',
                      animation: 'pulse 2s infinite'
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Code className="text-emerald-400 h-5 w-5" />
                        <h4 className="font-medium text-sm text-white">Technology Services</h4>
                      </div>
                      <div className="px-2 py-1 bg-emerald-500/20 rounded-full text-xs text-emerald-300 font-medium">
                        Active
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white">Custom Software</span>
                        <span className="text-gray-300">24</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white">AI Solutions</span>
                        <span className="text-gray-300">12</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Component - Industries */}
          <div className="absolute -bottom-24 left-[240px] z-40 w-64 animate-[slideUp_0.8s_ease-out_0.6s_both]">
            <div className="relative">
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                <defs>
                  <mask id="bottomFadeMask">
                    <linearGradient id="bottomFadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                      <stop offset="20%" stopColor="white" stopOpacity="0.6" />
                      <stop offset="40%" stopColor="white" stopOpacity="0.4" />
                      <stop offset="60%" stopColor="white" stopOpacity="0.2" />
                      <stop offset="80%" stopColor="white" stopOpacity="0" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <rect width="100%" height="100%" fill="url(#bottomFadeGradient)" />
                  </mask>
                </defs>
              </svg>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-t-xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-emerald-500/20" style={{ mask: 'url(#bottomFadeMask)' }}>
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-t-xl opacity-30 bg-gradient-to-r from-emerald-500 to-green-500"
                    style={{
                      backgroundSize: '200% 100%',
                      animation: 'pulse 2s infinite'
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Building2 className="text-emerald-400 h-5 w-5" />
                        <h4 className="font-medium text-sm text-white">Industries</h4>
                      </div>
                      <div className="px-2 py-1 bg-emerald-500/20 rounded-full text-xs text-emerald-300 font-medium">
                        Global
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white">Healthcare</span>
                        <span className="text-gray-300">8</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white">Financial</span>
                        <span className="text-gray-300">12</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Central Logo - Heuvera Core */}
          <div className="flex flex-col items-center space-y-4">
            <div className="absolute top-[48%] left-[315px] -translate-y-1/2 z-50 animate-[scaleIn_0.5s_ease-out] transform">
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="rounded-lg bg-white/10 backdrop-blur-md border border-emerald-400/30 h-16 w-16 flex items-center justify-center shadow-2xl">
                  <div className="bg-emerald-600 border border-emerald-400 rounded-lg h-14 w-14 flex items-center justify-center">
                    <Brain className="text-2xl text-white w-8 h-8" />
                  </div>
                </div>
                <span className="text-lg font-semibold text-white">HEUVERA</span>
                <span className="text-sm text-emerald-300">CORE</span>
              </div>
            </div>
          </div>

          {/* Consulting & Strategy Card */}
          <div className="absolute top-10 left-0 z-40 w-64 animate-[slideRight_0.8s_ease-out_0.1s_both]">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-emerald-500/20">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="font-medium text-sm text-white">Consulting & Strategy</span>
                </div>
                <div className="text-xs text-gray-300">Expert</div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-start space-x-3 p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition-all">
                  <Briefcase className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium text-white">Business Strategy</span>
                </div>
                <div className="flex items-center justify-start space-x-3 p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 transition-all">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium text-white">Growth Planning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Card */}
          <div className="absolute top-10 right-0 z-40 w-80 animate-[slideLeft_0.8s_ease-out_0.2s_both]">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-emerald-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Layers className="text-emerald-400 h-5 w-5" />
                  <h4 className="font-medium text-sm text-white">Our Services</h4>
                </div>
                <div className="text-xs text-gray-300">{formatMonthYear(currentDate)}</div>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Code className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                  <span className="text-white">Dev</span>
                </div>
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Cloud className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                  <span className="text-white">Cloud</span>
                </div>
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Bot className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                  <span className="text-white">AI</span>
                </div>
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Smartphone className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                  <span className="text-white">Mobile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Card */}
          <div className="absolute bottom-10 right-0 z-40 w-72 animate-[slideLeft_0.8s_ease-out_0.3s_both]">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-emerald-500/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-sm text-white">Project Analytics</h4>
                <div className="px-2 py-1 bg-emerald-500/20 rounded-full text-xs text-emerald-300 font-medium">
                  +25.5%
                </div>
              </div>
              <div className="flex items-end space-x-1 h-24 mb-2">
                {ANALYTICS_DATA.map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-emerald-500 rounded-t transition-all duration-300 hover:bg-emerald-400 opacity-70"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>This Quarter</span>
                <div className="flex items-center">
                  <TrendingUp className="text-emerald-400 mr-1 h-3 w-3" />
                  <span>Success Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Updates Card */}
          <div className="absolute left-0 bottom-10 z-40 w-72 animate-[slideRight_0.8s_ease-out_0.4s_both]">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-emerald-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Bell className="text-emerald-400 h-5 w-5" />
                  <h4 className="font-medium text-sm text-white">Client Updates</h4>
                </div>
                <div className="px-2 py-1 bg-emerald-500/20 rounded-full text-xs text-emerald-300 font-medium">
                  3 New
                </div>
              </div>
              <div className="space-y-3">
                {NOTIFICATIONS.map((notification, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                    <div>
                      <p className="text-sm text-white">{notification.text}</p>
                      <p className="text-xs text-gray-300">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-500/10 rounded-full blur-3xl -z-10"></div>

      <style jsx>{`
        @keyframes pulse {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-100px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(100px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default HeuveraBrainSection;