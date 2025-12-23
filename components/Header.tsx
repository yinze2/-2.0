
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 p-1.5 rounded-lg">
            <i className="fas fa-person-running text-white text-xl"></i>
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">TRI<span className="text-red-600">EDGE</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a href="#" className="hover:text-red-600 transition-colors">找教练</a>
          <a href="#" className="hover:text-red-600 transition-colors">训练营</a>
          <a href="#" className="hover:text-red-600 transition-colors">关于我们</a>
        </nav>
        <button className="bg-slate-900 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-slate-800 transition-all">
          立即开始
        </button>
      </div>
    </header>
  );
};

export default Header;
