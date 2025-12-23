
import { GoogleGenAI } from "@google/genai";
import { UserProfile, Coach } from "../types";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getSimpleMatchAdvice(profile: UserProfile, coach: Coach) {
  const prompt = `你是一位铁三教练。
    学员${profile.name}的目标是${profile.goal}，弱项是${profile.weakness}。
    你为他匹配了教练${coach.name}（擅长${coach.specialty.join('、')}）。
    请用2-3句话说明为什么这个教练适合他，并给出一句鼓励。`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    // Property .text is the correct way to access output
    return response.text;
  } catch (error) {
    console.error("Match advice error:", error);
    return "这位教练在处理你的弱项方面非常有经验，能帮你快速提升。";
  }
}

// Fixed missing function chatWithHeadCoach required by AIChatRoom.tsx
export async function chatWithHeadCoach(history: any[], message: string) {
  // Map history to the format expected by the generateContent API
  const contents = [
    ...history,
    { role: 'user', parts: [{ text: message }] }
  ];

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: '你是一位资深的铁人三项总教练，负责解答学员关于训练计划、伤病预防和比赛策略的问题。你的语气专业、严谨且充满热情。',
      },
    });
    // Property .text is the correct way to access output
    return response.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "抱歉，我的大脑现在有点缺氧，可能是刚练完间歇。请稍后再试。";
  }
}
