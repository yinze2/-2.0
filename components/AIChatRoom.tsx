
import React, { useState, useRef, useEffect } from 'react';
import { chatWithHeadCoach } from '../services/geminiService';

const AIChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: '你好！我是 TriEdge AI 总教练。关于你的匹配结果或铁三训练，有什么想问我的吗？' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      const response = await chatWithHeadCoach(history, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response || '抱歉，我现在有点走神...' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: '出了一点小问题，请稍后再试。' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col h-[500px] overflow-hidden">
      <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-robot text-sm"></i>
          </div>
          <span className="font-bold">AI 总教练在线</span>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50/50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-red-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex gap-1">
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex gap-2">
        <input 
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="向总教练提问..."
          className="flex-grow px-4 py-2 bg-slate-50 rounded-xl outline-none focus:ring-1 focus:ring-red-600 text-sm"
        />
        <button type="submit" className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-red-600 transition-all">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default AIChatRoom;
