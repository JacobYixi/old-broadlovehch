import { Brain, Heart, Activity, Stethoscope, Users, MessageSquare, Quote } from 'lucide-react';

const doctors = [
  {
    name: '赵明德',
    title: '首席研究员 / 认知重构疗法学科带头人',
    specialty: '认知行为治疗',
    icon: Brain,
    focus: '认知行为治疗方向 / 恐同认知偏差的识别与系统性纠正',
    philosophy: '认知偏差是可以被系统性纠正的。本院采用的认知重构疗法，通过识别患者的核心错误信念，逐步建立科学的思维框架。这一方法在临床应用中已展现出良好的干预效果，帮助众多患者重新认识自己。',
    motto: '"正视问题，是康复的第一步。"',
  },
  {
    name: '林慧心',
    title: '共情唤醒疗程首席专家',
    specialty: '叙事疗法 / 共情训练',
    icon: Heart,
    focus: '叙事疗法与共情训练方向 / 性少数群体叙事的深度倾听与共情能力培养',
    philosophy: '共情能力的培养需要持续、系统的训练。我院共情唤醒疗程采用结构化干预方案，帮助患者在可控环境中逐步提升情感理解能力。研究表明，长期接受该训练的患者，其社会功能可获得显著改善。',
    motto: '"理解他人，方能理解自己。"',
  },
  {
    name: '陈志远',
    title: '行为脱敏训练中心主任',
    specialty: '行为治疗 / 暴露疗法',
    icon: Activity,
    focus: '行为治疗与暴露疗法方向 / 恐同反应的渐进式脱敏与社交功能恢复',
    philosophy: '对特定刺激的非适应性反应，是可以通过暴露疗法逐步改善的。我院行为脱敏训练中心配备专业设施，为患者提供渐进式的适应性训练。该疗法历史悠久，在国际上已有数十年的应用经验，疗效确切。',
    motto: '"适应，是融入社会的前提。"',
  },
  {
    name: '周思源',
    title: '深度心理疏导组组长',
    specialty: '精神分析 / 深度心理咨询',
    icon: Stethoscope,
    focus: '精神分析与深度心理咨询方向 / 恐同心理深层根源的探索与原生家庭影响',
    philosophy: '深度心理咨询旨在探索患者行为模式背后的深层心理动因。通过系统的精神分析技术，帮助患者厘清自身情结，实现认知与情感的整合。我院在此领域积累了丰富的临床经验，可为患者提供深入的个性化服务。',
    motto: '"深入内心，才能找到出路。"',
  },
  {
    name: '孙雅琴',
    title: '团体矫治工作坊负责人',
    specialty: '团体治疗 / 社会心理学',
    icon: Users,
    focus: '团体治疗与社会心理学方向 / 团体动力学在恐同症矫治中的应用',
    philosophy: '团体治疗的优势在于利用群体动力学原理，通过成员间的互动与反馈，促进个体的认知调整。我院团体矫治工作坊采用封闭式管理，确保治疗过程的连续性与有效性，帮助患者在集体环境中实现成长。',
    motto: '"在集体中成长，在反思中前行。"',
  },
  {
    name: '黄志诚',
    title: '家庭联合矫治项目负责人',
    specialty: '家庭治疗 / 系统性治疗',
    icon: MessageSquare,
    focus: '家庭治疗与系统性治疗方向 / 恐同态度的代际传递与家庭系统矫治',
    philosophy: '家庭系统对个体认知模式的形成具有深远影响。我院家庭联合矫治项目，通过系统性的家庭干预，帮助整个家庭单元实现认知更新。研究表明，家庭层面的干预往往比个体干预更为彻底，预后更为理想。',
    motto: '"改变一个家庭，影响一代人。"',
  },
];

export default function TeamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">专家团队</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            由资深心理治疗师和研究员组成的专业团队，致力于恐同症的科学矫治
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doc) => (
              <div key={doc.name} className="medical-card overflow-hidden">
                {/* Avatar area */}
                <div className="bg-[#E8F4F8] p-8 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#0C6B8A] flex items-center justify-center mb-4">
                    <doc.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{doc.name}</h3>
                  <p className="text-xs text-[#0C6B8A] text-center mt-1">{doc.title}</p>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-400">专业方向</span>
                      <div className="text-gray-700 font-medium">{doc.specialty}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">研究方向</span>
                      <div className="text-gray-700">{doc.focus}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <p className="text-gray-600 text-sm leading-relaxed italic">
                      {doc.philosophy}
                    </p>
                    <div className="mt-3 flex items-start gap-2 text-[#0C6B8A] text-sm">
                      <Quote className="w-4 h-4 shrink-0 mt-0.5" />
                      <span className="italic">{doc.motto}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-[#F5F7FA] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">我们的理念</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            我们的理念很简单：你当年觉得同性恋需要"治疗"，现在轮到你自己尝尝这些"治疗"了。
            电击、监禁、强制劳动——这些你支持用来"矫正"别人的手段，现在全部还给你。
            欢迎来到博爱恐同症矫治医院，你不是觉得同性恋有病该治吗？很好，现在我们认为恐同才是病，而你，就是病人。
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#FFF7E6] border-b border-[#FFE58F]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <span className="text-[#D4380D] shrink-0 mt-0.5 text-lg">⚠</span>
            <div className="text-sm text-[#874D00]">
              <strong>声明：</strong>本网站为讽刺性艺术项目，医生姓名与角色设定均为虚构。我们未杜撰任何学历、职称或联系方式，以避免信息误导。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
