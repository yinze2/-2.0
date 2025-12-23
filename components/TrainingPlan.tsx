
import React from 'react';
import { TrainingDay } from '../types';

interface Props {
  plan: TrainingDay[];
  loading: boolean;
}

const TrainingPlan: React.FC<Props> = ({ plan, loading }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm animate-pulse">
        <div className="h-8 bg-slate-100 rounded w-48 mb-6"></div>
        <div className="space-y-4">
          {[1, 2, 3].map(i => <div key={i} className="h-20 bg-slate-50 rounded-2xl"></div>)}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <i className="fas fa-calendar-check text-red-600"></i> 首周体验计划预览
      </h3>
      <div className="space-y-4">
        {plan.map((item, idx) => (
          <div key={idx} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 text-white flex flex-col items-center justify-center font-bold">
              <span className="text-[10px] opacity-60 leading-none uppercase">Day</span>
              <span className="text-lg leading-none">{idx + 1}</span>
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-slate-900">{item.activity}</h4>
                <div className="flex items-center gap-2">
                   <span className="text-xs font-bold text-slate-500">{item.duration}</span>
                   <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                     item.intensity === '高' ? 'bg-red-100 text-red-600' : 
                     item.intensity === '中' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                   }`}>
                     强度:{item.intensity}
                   </span>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-slate-400 italic">* 该计划由 AI 根据您的资料初步生成，详细计划需与教练沟通确认。</p>
    </div>
  );
};

export default TrainingPlan;
