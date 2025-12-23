
import React from 'react';

interface Props {
  advice: string;
  loading: boolean;
}

const AIRecommendation: React.FC<Props> = ({ advice, loading }) => {
  return (
    <div className="bg-slate-900 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <i className="fas fa-brain text-9xl"></i>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
            <i className="fas fa-robot text-lg"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">TriEdge AI 智能教练分析</h3>
            <p className="text-xs text-slate-400 font-medium">基于 Gemini 3 Pro 深度洞察</p>
          </div>
        </div>

        {loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-4 bg-slate-800 rounded w-3/4"></div>
            <div className="h-4 bg-slate-800 rounded w-5/6"></div>
            <div className="h-4 bg-slate-800 rounded w-1/2"></div>
          </div>
        ) : (
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
              {advice}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIRecommendation;
