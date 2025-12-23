
import React, { useState } from 'react';
import { UserProfile } from '../types';

interface Props {
  onComplete: (profile: UserProfile) => void;
  loading: boolean;
}

const MatchingForm: React.FC<Props> = ({ onComplete, loading }) => {
  const [formData, setFormData] = useState<UserProfile>({
    name: '',
    goal: '',
    weakness: '游泳'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-8 border border-slate-100 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">寻找你的铁三教练</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">怎么称呼你？</label>
          <input
            required
            className="w-full px-4 py-2 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-red-500"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            placeholder="例如：王铁人"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">你的训练目标是？</label>
          <input
            required
            className="w-full px-4 py-2 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-red-500"
            value={formData.goal}
            onChange={e => setFormData({...formData, goal: e.target.value})}
            placeholder="例如：三个月后完成首次标铁"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">哪项最需要提升？</label>
          <div className="grid grid-cols-3 gap-2">
            {['游泳', '骑行', '跑步'].map(item => (
              <button
                key={item}
                type="button"
                className={`py-2 rounded-lg border font-medium text-sm transition-all ${formData.weakness === item ? 'bg-red-600 border-red-600 text-white' : 'bg-white text-slate-500 border-slate-200'}`}
                onClick={() => setFormData({...formData, weakness: item as any})}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <button
          disabled={loading}
          type="submit"
          className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all disabled:opacity-50"
        >
          {loading ? '正在分析中...' : '立即匹配'}
        </button>
      </form>
    </div>
  );
};

export default MatchingForm;
