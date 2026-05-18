'use client';

import { Heart, Shield, BookOpen, Users, Eye, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: '专业严谨',
    desc: '每一项诊疗方案均基于循证医学原则，确保干预手段的科学性与规范性',
  },
  {
    icon: Shield,
    title: '患者至上',
    desc: '以患者需求为中心，提供个性化、分层次的矫治服务，力求最佳疗效',
  },
  {
    icon: BookOpen,
    title: '科学循证',
    desc: '所有干预方法均有心理学与神经科学研究支撑，拒绝伪科学与非理性手段',
  },
  {
    icon: Users,
    title: '社会责任',
    desc: '致力于消除社会偏见，推动多元包容的公共认知，共建和谐社会',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            了解博爱恐同症矫治医院的使命与核心价值观
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">医院使命</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  博爱恐同症矫治医院致力于恐同症的临床研究与矫治工作。
                  我们坚信：恐同不是正常，而是一种需要被矫治的心理障碍。
                </p>
                <p>
                  长期以来，社会对性少数群体的偏见和歧视被包装成"传统价值观"或"个人观点"，
                  但这本质上是一种基于无知与恐惧的心理防御机制。本院采用国际先进的认知重构与行为干预技术，
                  为不同程度的恐同症患者提供分级诊疗方案。
                </p>
                <p>
                  我们的愿景是：建立一个没有偏见的社会——从帮助每一位恐同症患者重新认识世界开始。
                </p>
              </div>
            </div>
            <div className="bg-[#E8F4F8] rounded-xl p-8 flex flex-col justify-center">
              <blockquote className="text-lg text-[#0C6B8A] italic leading-relaxed border-l-4 border-[#0C6B8A] pl-4">
                &ldquo;偏见不是观点，是错误。错误需要被纠正。&rdquo;
              </blockquote>
              <p className="text-sm text-gray-500 mt-4 pl-4">
                —— 博爱恐同症矫治医院
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 section-title inline-block">核心价值观</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="medical-card p-6">
                <div className="w-12 h-12 rounded-lg bg-[#E8F4F8] flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-[#0C6B8A]" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Disclaimer */}
      <section className="bg-[#FFF7E6] border-b border-[#FFE58F]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <span className="text-[#D4380D] shrink-0 mt-0.5 text-lg">⚠</span>
            <div className="text-sm text-[#874D00]">
              <strong>声明：</strong>本网站为讽刺性艺术项目，所有机构、人物、案例均为虚构。真正的偏见不是疾病，但偏见造成的伤害是真实的。请用包容的心态对待每一个人。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
