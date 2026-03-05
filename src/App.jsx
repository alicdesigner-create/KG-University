import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, Building2, Sparkles, AlertTriangle, Wrench, Droplets, Star } from 'lucide-react';

export default function KGMasterClass() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const categories = [
    { id: 'kgfs',      Icon: Building2,     title: 'Learn about KGFS',   description: 'Company history and mission' },
    { id: 'cleaning',  Icon: Sparkles,      title: 'Cleaning training',  description: 'Professional cleaning techniques' },
    { id: 'safety',    Icon: AlertTriangle, title: 'Safety at work',     description: 'Workplace safety protocols' },
    { id: 'equipment', Icon: Wrench,        title: 'Equipment',          description: 'Tools and equipment guide' },
    { id: 'chemicals', Icon: Droplets,      title: 'Chemicals',          description: 'Chemical handling and safety' },
    { id: 'standards', Icon: Star,          title: 'Employee Standard',  description: 'Company standards and expectations' },
  ];

  const cleaningSubCategories = [
    { id: 'offices',     title: 'Office Cleaning',     icon: '🏢' },
    { id: 'bathrooms',   title: 'Bathroom Cleaning',   icon: '🚽' },
    { id: 'kitchens',    title: 'Kitchen Cleaning',    icon: '🍳' },
    { id: 'cubicles',    title: 'Cubicle Cleaning',    icon: '📊' },
    { id: 'lobbies',     title: 'Lobby Cleaning',      icon: '🚪' },
    { id: 'windows',     title: 'Window Cleaning',     icon: '🪟' },
    { id: 'floors',      title: 'Floor Care',          icon: '⛹️' },
    { id: 'conferences', title: 'Conference Rooms',    icon: '🎤' },
  ];

  const kgfsContent = {
    title: 'About KG Facility Solutions',
    description: 'Family-owned and operated since 1995, KG Facility Solutions has proudly served the Front Range with premier commercial cleaning. We are dedicated to delivering top-tier cleaning and facility management services with a personal touch.',
    details: [
      { label: 'Years in Market', value: '30+ years' },
      { label: 'Locations',       value: 'Serving multiple facilities across Colorado' },
      { label: 'Employees',       value: '200+' },
    ],
    mission: 'Providing superior commercial cleaning services that go beyond the surface. We are committed to exceeding client standards while ensuring the highest levels of safety and professional care.',
    values: [
      'Excellence in service quality',
      'Employee safety and wellbeing',
      'Environmental responsibility',
      'Customer-focused solutions',
      'Continuous improvement',
    ],
  };

  const safetyContent = {
    topics: [
      { title: 'Uniform Requirements',          description: 'Proper work attire and safety gear' },
      { title: 'OSHA Requirements',             description: 'Compliance and safety standards' },
      { title: 'Biohazards',                    description: 'Identifying and handling biohazards' },
      { title: 'Height Safety',                 description: 'Ladder and height safety protocols' },
      { title: 'Tripping Hazards',              description: 'Identifying and preventing accidents' },
      { title: 'PPE (Personal Protective Equipment)', description: 'Proper use and care of safety equipment' },
    ],
  };

  const equipmentContent = {
    topics: [
      { title: 'Equipment Usage',                          description: 'General equipment operation' },
      { title: 'How to Use Equipment',                     description: 'Step-by-step equipment guides' },
      { title: 'Equipment Maintenance',                    description: 'Keeping equipment in top condition' },
      { title: 'Auto Scrubbers',                           description: 'Operation and maintenance of auto scrubbers' },
      { title: 'Industrial Backpack and Upright Vacuums',  description: 'Proper use and care of vacuum equipment' },
    ],
  };

  const chemicalsContent = {
    section1: {
      title: 'How to Use & Where to Use',
      topics: [
        { title: 'Oxyvir',                    description: 'How to use and where to apply Oxyvir' },
        { title: 'Glance / Klearview',        description: 'Proper application and usage' },
        { title: 'NABC',                      description: 'Usage guidelines and safety' },
        { title: 'Top Clean',                 description: 'Application and proper use' },
        { title: 'Nutri-Rinse Stainless Steel', description: 'How to use on stainless steel surfaces' },
        { title: 'Ajax',                      description: 'Proper use and application' },
        { title: 'CLR',                       description: 'Safe use and application of CLR' },
      ],
    },
    section2: {
      title: 'Chemical Safety',
      topics: [
        { title: 'Chemical Safety',       description: 'Handling hazardous materials safely' },
        { title: 'Storage & Wiring',      description: 'Proper chemical storage procedures' },
        { title: 'Emergency Procedures',  description: 'What to do in case of chemical incidents' },
        { title: 'Safety Data Sheet',     description: 'Understanding and using SDS documents' },
      ],
    },
  };

  // ── Home Screen ──────────────────────────────────────────────────────────────
  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pb-24">
      {/* Header */}
      <div className="bg-white px-6 py-6 text-center border-b-4 border-blue-900 shadow-lg">
        <img src="/kg-logo.png" alt="KG Masterclass Logo" className="h-20 mx-auto object-contain" />
        <p className="text-gray-600 text-sm mt-2">Professional Training Platform</p>
      </div>

      {/* Categories */}
      <div className="px-4 py-8">
        <div className="space-y-4">
          {categories.map(({ id, Icon, title, description }) => (
            <button
              key={id}
              onClick={() => setCurrentScreen(id)}
              className="w-full bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 text-left transform"
            >
              <div className="relative overflow-hidden h-24">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)' }}
                />
                <div className="relative flex items-center gap-4 h-full px-5 py-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
                    <Icon size={26} className="text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white font-bold text-lg">{title}</h3>
                    <p className="text-gray-200 text-xs">{description}</p>
                  </div>
                  <ChevronRight className="text-yellow-400 flex-shrink-0" size={24} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 px-6 py-6 text-center shadow-2xl">
        <p className="text-white text-sm mb-4 font-semibold">Need more info?</p>
        <button
          onClick={() => window.location.href = 'tel:3036659757'}
          className="bg-cyan-500 hover:bg-cyan-600 text-blue-900 font-bold py-2 px-8 rounded-lg transition-colors w-full shadow-lg"
        >
          Contact us
        </button>
        <p className="text-gray-300 text-xs mt-4">Designed by tesocraphics.com</p>
      </div>
    </div>
  );

  // ── KGFS Screen ──────────────────────────────────────────────────────────────
  const renderKGFS = () => (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-10 shadow-lg flex items-center gap-3">
        <button onClick={() => setCurrentScreen('home')} className="hover:bg-blue-800 p-2 rounded transition">
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-bold text-lg">Learn about KGFS</h2>
      </div>

      <div className="p-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🏢</span>
            <h2 className="text-2xl font-bold text-blue-900">{kgfsContent.title}</h2>
          </div>
          <p className="text-gray-700 mb-6">{kgfsContent.description}</p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {kgfsContent.details.map((item, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">{item.label}</p>
                <p className="text-blue-900 font-bold mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-900 text-white rounded-lg p-5 mb-6">
            <h3 className="font-bold text-lg mb-2">Our Mission</h3>
            <p className="text-blue-100 text-sm leading-relaxed">{kgfsContent.mission}</p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 text-lg mb-3">Our Values</h3>
            <div className="space-y-2">
              {kgfsContent.values.map((value, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-900 text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ── Cleaning Screen ──────────────────────────────────────────────────────────
  const renderCleaning = () => (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-10 shadow-lg flex items-center gap-3">
        <button onClick={() => setCurrentScreen('home')} className="hover:bg-blue-800 p-2 rounded transition">
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-bold text-lg">Cleaning Training</h2>
      </div>

      <div className="p-6 max-w-2xl mx-auto">
        <p className="text-gray-600 text-sm mb-6">
          Select a cleaning category to learn professional techniques and best practices.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {cleaningSubCategories.map((sub) => (
            <button
              key={sub.id}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center gap-3 hover:shadow-lg hover:scale-105 transition-all border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full flex items-center justify-center shadow-md">
                <span className="text-2xl">{sub.icon}</span>
              </div>
              <p className="text-blue-900 font-semibold text-sm text-center">{sub.title}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // ── Generic Topics Screen (Safety / Equipment) ────────────────────────────────
  const renderTopics = (title, icon, topics) => (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-10 shadow-lg flex items-center gap-3">
        <button onClick={() => setCurrentScreen('home')} className="hover:bg-blue-800 p-2 rounded transition">
          <ArrowLeft size={24} />
        </button>
        <span className="text-xl">{icon}</span>
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      <div className="p-6 max-w-2xl mx-auto space-y-3">
        {topics.map((topic, idx) => (
          <button
            key={idx}
            className="w-full bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg hover:scale-105 transition-all border border-gray-100 text-left"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow">
              <span className="text-white font-bold text-sm">{idx + 1}</span>
            </div>
            <div className="flex-grow">
              <p className="text-blue-900 font-semibold">{topic.title}</p>
              <p className="text-gray-500 text-xs mt-0.5">{topic.description}</p>
            </div>
            <ChevronRight className="text-blue-300 flex-shrink-0" size={18} />
          </button>
        ))}
      </div>
    </div>
  );

  // ── Chemicals Screen ──────────────────────────────────────────────────────────
  const renderChemicals = () => (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-10 shadow-lg flex items-center gap-3">
        <button onClick={() => setCurrentScreen('home')} className="hover:bg-blue-800 p-2 rounded transition">
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-bold text-lg">Chemicals</h2>
      </div>

      <div className="p-6 max-w-2xl mx-auto space-y-6">
        {[chemicalsContent.section1, chemicalsContent.section2].map((section) => (
          <div key={section.title}>
            <h3 className="text-blue-900 font-bold text-base uppercase tracking-wide mb-3 px-1">
              {section.title}
            </h3>
            <div className="space-y-3">
              {section.topics.map((topic, idx) => (
                <button
                  key={idx}
                  className="w-full bg-white rounded-xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg hover:scale-105 transition-all border border-gray-100 text-left"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow">
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-blue-900 font-semibold">{topic.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{topic.description}</p>
                  </div>
                  <ChevronRight className="text-blue-300 flex-shrink-0" size={18} />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ── Standards Screen ─────────────────────────────────────────────────────────
  const renderStandards = () => (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-10 shadow-lg flex items-center gap-3">
        <button onClick={() => setCurrentScreen('home')} className="hover:bg-blue-800 p-2 rounded transition">
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-bold text-lg">Employee Standard</h2>
      </div>

      <div className="p-6 max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">⭐</span>
            <h2 className="text-xl font-bold text-blue-900">Company Standards</h2>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            Our standards define the expectations and professional conduct required from every KGFS team member.
          </p>

          {[
            { title: 'Punctuality',            description: 'Arrive on time and notify supervisors of any delays.',       icon: '⏰' },
            { title: 'Uniform & Appearance',   description: 'Wear the full uniform clean and properly at all times.',     icon: '👔' },
            { title: 'Communication',          description: 'Maintain professional and respectful communication.',         icon: '💬' },
            { title: 'Quality of Work',        description: 'Deliver consistent, high-quality results on every job.',     icon: '✅' },
            { title: 'Teamwork',               description: 'Support your team and collaborate effectively.',             icon: '🤝' },
            { title: 'Accountability',         description: 'Take responsibility for your tasks and report issues promptly.', icon: '📋' },
            { title: 'Clearance and Badging',  description: 'Follow clearance processes and badge requirements at all times.', icon: '🪪' },
            { title: 'Language Skills',        description: 'Use clear and professional language in all communications.',  icon: '🗣️' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">{item.icon}</span>
              </div>
              <div>
                <p className="font-semibold text-blue-900">{item.title}</p>
                <p className="text-gray-500 text-sm mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ── Router ───────────────────────────────────────────────────────────────────
  switch (currentScreen) {
    case 'kgfs':      return renderKGFS();
    case 'cleaning':  return renderCleaning();
    case 'safety':    return renderTopics('Safety at Work', '⚠️', safetyContent.topics);
    case 'equipment': return renderTopics('Equipment', '🔧', equipmentContent.topics);
    case 'chemicals': return renderChemicals();
    case 'standards': return renderStandards();
    default:          return renderHome();
  }
}
