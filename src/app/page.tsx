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
    desc: '基于认知行为理论，我院开发了专门针对恐同认知偏差的系统矫治方案。通过识别并纠正患者的错误认知模式，帮助其建立科学、理性的思维框架。',
    href: '/services',
  },
  {
    icon: Heart,
    title: '共情唤醒疗程',
    desc: '采用沉浸式体验疗法，在专业可控的环境中帮助患者逐步建立共情能力。研究表明，长期处于结构化环境中的患者，其社会认知水平可获得显著提升。',
    href: '/services',
  },
  {
    icon: Activity,
    title: '行为脱敏训练',
    desc: '通过渐进式暴露疗法，帮助患者逐步适应多元化社会环境。本院该疗法历史悠久、应用广泛，在业内享有良好声誉，已为众多患者带来积极改变。',
    href: '/services',
  },
  {
    icon: Stethoscope,
    title: '深度心理疏导',
    desc: '由资深心理专家提供一对一深度咨询服务，系统梳理患者的心理症结。本院承诺：每一位患者都将获得与其症状严重程度相匹配的专业关注与治疗。',
    href: '/services',
  },
];

const testimonials = [
  {
    name: '张先生',
    role: '前恐同症患者',
    content: '电了五个月，我现在脑子像被搅过的屎，看到男人牵手就傻笑，看到女人牵手也傻笑。医生说我变友善了，HR说我不会再惹事了。他们说得对，一个连自己的名字都记不清的人，确实没资格歧视任何人。',
    duration: '治疗周期：5个月',
  },
  {
    name: '王女士',
    role: '前恐同症患者',
    content: '三个月没见过活人，我现在每天对着墙说话，跟墙缝里的灰尘聊天。以前我说同性恋不该出现在公共场合，现在我自己连门都出不了。医生说这叫"环境适配"，我觉得他说得对。',
    duration: '治疗周期：3个月',
  },
  {
    name: '李先生',
    role: '前重度恐同症患者',
    content: '搬了八个月水泥，我现在腰彻底废了，连穿裤子都要别人帮忙。以前我拒载同性恋说维护道德，现在医生说我实现了真正的道德——一个连站都站不起来的人，当然不会再伤害任何人。',
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
              <span className="text-[#7DD3E8]">是需要被矫治的偏见</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              博爱恐同症矫治医院专注于恐同症的临床研究与系统矫治。本院秉承循证医学理念，
              采用国际先进的诊疗标准，竭诚为每一位患者提供专业、高效的医疗服务。
              如您或您的家人对性少数群体持有非理性排斥态度，本院可为您提供全面的评估与干预方案。
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
                  世界卫生组织于1990年将同性恋从疾病分类中移除，这一科学共识已得到全球医学界的广泛认可。
                  然而，临床观察显示，部分人群仍对性少数群体持有显著的非理性排斥反应。
                  本院将此类反应视为一种可被识别和系统性干预的认知行为模式。
                </p>
                <p>
                  我院患者通常表现出以下临床特征：对科学共识持选择性接受态度、
                  将个人偏好等同于普遍真理、面对质疑时产生过度防御反应，
                  以及频繁使用"我不是歧视，我只是……"等典型话术。
                  本院拥有丰富的临床经验，可有效识别和干预上述症状。
                </p>
                <p>
                  好消息是：研究表明，恐同倾向是可以被有效矫治的。
                  本院矫治体系完善，涵盖认知重构、行为矫正、药物干预等多维度疗法，
                  确保每位患者获得与其症状相匹配的专业治疗。
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
            您或您的家人是否对性少数群体持有非理性排斥态度？
            <br />
            本院提供免费初步评估服务，帮助您了解自身认知状态。早期干预效果最佳。
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
