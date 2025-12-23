import { GoogleGenAI } from "@google/genai";
import { UserProfile, Coach } from "../types";

const getApiKey = () => {
  try {
    return (typeof process !== 'undefined' && process.env?.API_KEY) || "";
  } catch (e) {
    return "";
  }
};

export async function getSimpleMatchAdvice(profile: UserProfile, coach: Coach) {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });
  
  const prompt = `你是一位专业的铁人三项主教练。
    学员${profile.name}的目标是"${profile.goal}"，目前最薄弱的环节是${profile.weakness}。
    你为他匹配了教练${coach.name}（该教练擅长${coach.specialty.join('、')}）。
    请用2-3句话说明为什么这个教练最适合他，并给出一句极具鼓舞性的话。不要使用任何Markdown格式，只输出纯文本。`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text || "这位教练非常适合你，他能针对你的弱项提供专业指导。";
  } catch (error) {
    console.warn("Match advice error:", error);
    return "根据你的目标和弱项，这位教练是目前最能帮你达成突破的人选。";
  }
}

export async function chatWithHeadCoach(history: any[], message: string) {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });
  const contents = [
    ...history,
    { role: 'user', parts: [{ text: message }] }
  ];

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: '你是一位资深的铁人三项总教练，语气专业、严谨且充满热情。',
      },
    });
    return response.text || "请再说一遍，我没听清。";
  } catch (error) {
    console.warn("Chat error:", error);
    return "抱歉，由于网络原因，我现在无法提供详细指导。";
  }
}