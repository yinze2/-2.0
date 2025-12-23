
import { Coach } from './types';

export const COACHES: Coach[] = [
  {
    id: '1',
    name: '张铁军',
    avatar: 'https://images.unsplash.com/photo-1548690312-e3b507d17a12?w=200&h=200&fit=crop',
    specialty: ['游泳', '骑行'],
    level: 'IRONMAN 认证',
    bio: '专注长距离铁三12年，擅长通过功率计分析优化骑行表现。',
    price: '¥1200 / 月',
    contact: 'iron_zhang_88',
    rating: '4.9',
    experience: '12'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    specialty: ['跑步', '游泳'],
    level: '一级运动员',
    bio: '前职业游泳选手，擅长从零基础开始进行姿态纠正。',
    price: '¥1500 / 月',
    contact: 'sarah_swim_tri',
    rating: '5.0',
    experience: '8'
  }
];
