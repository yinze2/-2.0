
import React, { useState } from 'react';
import Header from './components/Header';
import MatchingForm from './components/MatchingForm';
import { COACHES } from './constants';
import { UserProfile, Coach } from './types';
import { getSimpleMatchAdvice } from './services/geminiService';

const App: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [match, setMatch] = useState<{ coach: Coach; advice: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMatch = async (userData: UserProfile) => {
    setLoading(true);
    // 简单的匹配逻辑：找擅长用户弱项的教练
    const recommended = COACHES.find(c => c.specialty.includes(userData.weakness)) || COACHES[0];
    
    const advice = await getSimpleMatchAdvice(userData, recommended);
    
    setProfile(userData);
    setMatch({ coach: recommended, advice });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4">TriEdge 极速教练匹配</h1>
          <p className="text-slate-500">只需 30 秒，AI 为你找到最合适的专业教练。</p>
        </div>

        {!match ? (
          <MatchingForm onComplete={handleMatch} loading={loading} />
        ) : (
          <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* AI 建议卡片 */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                   <i className="fas fa-robot text-red-500"></i> AI 匹配建议
                 </h3>
                 <p className="text-slate-300 italic leading-relaxed">"{match.advice}"</p>
               </div>
            </div>

            {/* 教练名片 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-6">
              <img src={match.coach.avatar} className="w-24 h-24 rounded-2xl object-cover shadow-md" />
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">{match.coach.name}</h2>
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-md font-bold">{match.coach.level}</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">{match.coach.bio}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  {match.coach.specialty.map(s => (
                    <span key={s} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">#{s}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="text-xl font-black text-red-600">{match.coach.price}</span>
                  <button 
                    onClick={() => alert(`请添加教练微信：${match.coach.contact}`)}
                    className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold hover:bg-red-600 transition-all"
                  >
                    获取联系方式
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setMatch(null)}
              className="w-full text-slate-400 text-sm hover:underline"
            >
              重新填写信息
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
