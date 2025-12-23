
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <i className="fas fa-bicycle text-[20rem] -mr-20 -mt-20 transform rotate-12"></i>
      </div>
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          专业铁三教练匹配
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          让你的铁三梦想，<br />
          在<span className="gradient-text">科学训练</span>中起航
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
          无论你是准备首个标铁，还是冲击KONA资格，我们的AI驱动平台都能为你匹配最懂你的世界级教练。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#matching-form" className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 hover:shadow-xl hover:shadow-red-200 transition-all">
            免费匹配我的教练
          </a>
          <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold text-lg hover:border-slate-300 transition-all">
            查看所有教练
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
