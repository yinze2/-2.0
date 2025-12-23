
import React from 'react';
import { Coach } from '../types';

interface Props {
  coach: Coach;
  isBestMatch?: boolean;
}

const CoachCard: React.FC<Props> = ({ coach, isBestMatch }) => {
  return (
    <div className={`relative bg-white rounded-3xl p-6 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${isBestMatch ? 'border-red-500 shadow-xl shadow-red-50' : 'border-slate-100'}`}>
      {isBestMatch && (
        <div className="absolute -top-3 left-6 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
          <i className="fas fa-star text-[10px]"></i> AI 最佳匹配
        </div>
      )}
      <div className="flex items-start gap-4 mb-4">
        <img src={coach.avatar} alt={coach.name} className="w-16 h-16 rounded-2xl object-cover" />
        <div>
          <h3 className="text-xl font-bold text-slate-900">{coach.name}</h3>
          <p className="text-sm text-slate-500 font-medium">{coach.level}</p>
          <div className="flex items-center gap-1 mt-1">
            <i className="fas fa-star text-yellow-400 text-xs"></i>
            <span className="text-xs font-bold text-slate-700">{coach.rating || '5.0'}</span>
            <span className="text-[10px] text-slate-400 ml-1">({coach.experience || '5'}年经验)</span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed h-10">
        {coach.bio}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {coach.specialty.map(s => (
          <span key={s} className="px-2.5 py-1 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-bold border border-slate-100 flex items-center gap-1">
            <i className={`fas ${s === '游泳' ? 'fa-person-swimming' : s === '骑行' ? 'fa-bicycle' : 'fa-person-running'}`}></i> {s}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
        <span className="text-lg font-black text-slate-900">{coach.price}</span>
        <button 
          // Fixed alert to use contact string directly
          onClick={() => alert(`请联系教练：${coach.contact}`)}
          className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all"
        >
          立即沟通
        </button>
      </div>
    </div>
  );
};

export default CoachCard;
