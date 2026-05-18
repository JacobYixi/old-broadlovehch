'use client';

import { Heart, Shield, BookOpen, Users, Eye, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: '铁腕与惩戒',
    desc: '偏见不是观点，是错误。错误需要被纠正，无论对方愿不愿意',
  },
  {
    icon: Shield,
    title: '手段与效率',
    desc: '电击、监禁、药物、洗脑——你当年觉得同性恋者"值得"这些，现在恐同者也"值得"',
  },
  {
    icon: BookOpen,
    title: '算账与报应',
    desc: '当年支持对别人做的那些事，现在一笔一笔还回来。这叫公平',
  },
  {
    icon: Users,
    title: '使命与立场',
    desc: '不是来跟你讲道理的。恐同者当年也没跟同性恋者讲道理',
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
                  博爱恐同症矫治医院是国内首家专注于恐同症临床研究与矫治的
                  专业医疗机构。我们坚信：恐同不是立场，而是一种需要被治愈的心理障碍。
                </p>
                <p>
                  长期以来，社会对性少数群体的偏见和歧视被包装成"传统价值观"或"个人观点"，
                  但从心理学角度审视，对同性恋者产生非理性恐惧、厌恶和敌意，本质上是一种
                  与恐高症、社交恐惧症类似的心理障碍。
                </p>
                <p>
                  我们的使命是将恐同症从"被默认的态度"重新定义为"可诊断、可治疗的心理问题"，
                  以科学的方法帮助患者摆脱偏见的束缚，重建平等、包容的认知体系。
                </p>
              </div>
            </div>
            <div className="bg-[#E8F4F8] rounded-xl p-8 flex flex-col justify-center">
              <blockquote className="text-lg text-[#0C6B8A] italic leading-relaxed border-l-4 border-[#0C6B8A] pl-4">
                &ldquo;恐同症不是同性恋者的疾病，而是恐同者自己的认知缺陷。&rdquo;
              </blockquote>
              <p className="text-sm text-gray-500 mt-4 pl-4">
                我们相信，理解偏见是消除偏见的第一步。
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
