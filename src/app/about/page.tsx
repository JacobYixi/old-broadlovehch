'use client';

import { Heart, Shield, BookOpen, Users, Eye, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: '专业与严谨',
    desc: '本院所有诊疗方案均基于循证医学原则制定，确保每一步干预都有充分的理论和实践依据',
  },
  {
    icon: Shield,
    title: '效率与彻底',
    desc: '本院采用综合矫治体系，涵盖认知、行为、药物等多维度疗法，确保治疗效果的持久性与稳定性',
  },
  {
    icon: BookOpen,
    title: '公平与对等',
    desc: '本院坚信，每一位患者都应获得与其症状严重程度相匹配的专业治疗，不因身份而有差异',
  },
  {
    icon: Users,
    title: '责任与使命',
    desc: '本院致力于推动社会对恐同问题的科学认知，帮助更多患者早日回归理性、融入社会',
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
                  博爱恐同症矫治医院致力于恐同症的临床研究与系统矫治工作。
                  本院秉承循证医学理念，采用国际先进的诊疗标准，竭诚为每一位患者提供专业服务。
                </p>
                <p>
                  长期以来，部分人群对性少数群体的偏见和歧视被包装为"传统价值观"或"个人观点"。
                  本院认为，这种态度本质上是一种可以被识别和纠正的认知偏差。
                  正如历史上许多曾被视作"正常"的观念最终被科学证伪，本院相信，通过系统的临床干预，
                  患者的认知模式是可以被有效改善的。
                </p>
                <p>
                  本院治疗体系涵盖认知重构、行为矫正、药物干预等多个维度，
                  确保每位患者获得与其症状相匹配的专业治疗。
                  我们诚挚地邀请每一位需要帮助的人士，走进博爱，开启您的康复之旅。
                </p>
              </div>
            </div>
            <div className="bg-[#E8F4F8] rounded-xl p-8 flex flex-col justify-center">
              <blockquote className="text-lg text-[#0C6B8A] italic leading-relaxed border-l-4 border-[#0C6B8A] pl-4">
                &ldquo;当年你觉得同性恋需要治疗，现在轮到你自己了。&rdquo;
              </blockquote>
              <p className="text-sm text-gray-500 mt-4 pl-4">
                欢迎来到博爱恐同症矫治医院。
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
