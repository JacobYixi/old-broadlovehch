'use client';

import Link from 'next/link';

import {
  Activity, Brain, Heart, ChevronRight,
  AlertTriangle, Stethoscope, ClipboardCheck,
  ArrowRight, Star
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: '认知重构疗法',
    desc: '通过科学的方法帮助患者识别和纠正恐同认知偏差，重建平等的性取向认知框架。',
    href: '/services',
  },
  {
    icon: Heart,
    title: '共情唤醒疗程',
    desc: '系统性地培养患者对性少数群体的共情能力，消除偏见带来的情感隔离。',
    href: '/services',
  },
  {
    icon: Activity,
    title: '行为脱敏训练',
    desc: '采用渐进式暴露疗法，帮助患者逐步消除对同性恋者的非理性恐惧反应。',
    href: '/services',
  },
  {
    icon: Stethoscope,
    title: '深度心理疏导',
    desc: '专业心理咨询师一对一服务，深入探索恐同心理的根源成因。',
    href: '/services',
  },
];

const testimonials = [
  {
    name: '张先生',
    role: '前恐同症患者',
    content: '我曾经看到两个男生牵手就浑身不适，经过三个月的系统治疗，我现在可以平和地看待不同的性取向了。',
    duration: '治疗周期：3个月',
  },
  {
    name: '王女士',
    role: '前恐同症患者',
    content: '以前总在朋友圈转发抵制同性恋的文章，治疗后我意识到那种恐惧是多么不理性。感谢博爱医院。',
    duration: '治疗周期：5个月',
  },
  {
    name: '李先生',
    role: '前重度恐同症患者',
    content: '从对同性恋者恶语相向到能平等相处，博爱的认知重构疗法真的改变了我的人生。',
    duration: '治疗周期：8个月',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative medical-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 border border-white/30 rounded-full" />
          <div className="absolute bottom-10 right-20 w-60 h-60 border border-white/20 rounded-full" />
          <div className="absolute top-40 right-40 w-20 h-20 border border-white/20 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm">
              <AlertTriangle className="w-4 h-4" />
              恐同症是一种可诊断、可治疗的心理障碍
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              恐同不是正常<br />
              <span className="text-[#7DD3E8]">是需要被治愈的偏见</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              博爱恐同症矫治医院专注于恐同症的临床研究与矫治，以科学的方法帮助患者
              摆脱非理性恐惧，重建平等包容的认知体系。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/assessment"
                className="inline-flex items-center gap-2 bg-white text-[#0C6B8A] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                <ClipboardCheck className="w-5 h-5" />
                免费自测恐同指数
              </Link>
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-[#D4380D] text-white px-6 py-3 rounded-md font-medium hover:bg-[#B8320A] transition-colors"
              >
                在线预约挂号
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 section-title inline-block">
              核心诊疗项目
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              基于循证医学，我们开发了系统化的恐同症矫治方案，覆盖从认知到行为的全方位治疗
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="medical-card p-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E8F4F8] flex items-center justify-center mb-4 group-hover:bg-[#0C6B8A] transition-colors">
                  <service.icon className="w-6 h-6 text-[#0C6B8A] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                <div className="mt-4 text-[#0C6B8A] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  了解详情 <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why treat homophobia */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                为什么要矫治恐同症？
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  恐同症（Homophobia）并不只是立场或观点，更是一种需要矫治的心理障碍。
                  世界卫生组织于1990年通过决议、1992年在ICD-10中将同性恋从疾病分类中正式删除，
                  但恐同症作为一种非理性恐惧和偏见，至今仍深深困扰着大量人群。
                </p>
                <p>
                  恐同症患者往往表现为：对同性恋者产生强烈的非理性恐惧、厌恶或敌意；
                  试图限制性少数群体的基本权利；在社交中表现出排斥性言行；
                  内心深处可能压抑着对自身性取向的焦虑。
                </p>
                <p>
                  未经治疗的恐同症不仅伤害他人，也会损害患者自身的心理健康，导致焦虑、
                  偏执、社交障碍等一系列问题。
                </p>
              </div>
              <Link
                href="/knowledge"
                className="inline-flex items-center gap-2 text-[#0C6B8A] font-medium mt-6 hover:gap-3 transition-all"
              >
                了解更多科普知识 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '非理性恐惧', desc: '对同性恋者产生过度的恐惧反应' },
                { label: '排斥性言行', desc: '言语攻击、社交排斥、歧视性政策' },
                { label: '权利限制倾向', desc: '试图剥夺性少数群体的平等权利' },
                { label: '焦虑与偏执', desc: '持续性担忧和偏激的防御心理' },
              ].map((item) => (
                <div key={item.label} className="bg-[#F5F7FA] rounded-lg p-5">
                  <AlertTriangle className="w-6 h-6 text-[#D4380D] mb-3" />
                  <div className="font-medium text-gray-800 text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 section-title inline-block">
              康复者感言
            </h2>
            <p className="text-gray-500 mt-4">听听成功康复的患者怎么说</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.name} className="medical-card p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[#0C6B8A] text-[#0C6B8A]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{item.content}&rdquo;
                </p>
                <div className="border-t pt-4 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-gray-800">{item.name}</div>
                    <div className="text-xs text-gray-400">{item.role}</div>
                  </div>
                  <div className="text-xs text-[#0C6B8A] bg-[#E8F4F8] px-2 py-1 rounded">
                    {item.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-[#0C6B8A] font-medium hover:gap-3 transition-all"
            >
              查看更多康复案例 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">怀疑自己有恐同倾向？</h2>
          <p className="text-white/80 mb-8 text-lg">
            不要讳疾忌医。恐同症是可诊断、可治疗的心理障碍，越早干预效果越好。
            <br />
            花三分钟完成我们的免费自测，了解你的恐同指数。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 bg-white text-[#0C6B8A] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-lg"
            >
              <ClipboardCheck className="w-5 h-5" />
              免费自测
            </Link>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors text-lg"
            >
              预约咨询
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#FFF7E6] border-b border-[#FFE58F]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#D4380D] shrink-0 mt-0.5" />
            <div className="text-sm text-[#874D00]">
              <strong>声明：</strong>本网站为讽刺性艺术项目，所有机构、人物、案例均为虚构。
              恐同症并非医学上认可的疾病名称——真正需要被正视和消除的是对性少数群体的偏见与歧视。
              如果你正在经历因性取向带来的困扰，请寻求专业LGBTQ+友善心理咨询师的帮助。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
