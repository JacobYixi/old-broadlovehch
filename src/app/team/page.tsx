import { Brain, Heart, Activity, Stethoscope, Users, MessageSquare, Quote } from 'lucide-react';

const doctors = [
  {
    name: '赵明德',
    title: '首席研究员 / 认知重构疗法学科带头人',
    specialty: '认知行为治疗',
    icon: Brain,
    focus: '认知行为治疗方向 / 恐同认知偏差的识别与系统性纠正',
    philosophy: '每一个偏见背后，都藏着一个未被审视的恐惧。我们的工作不是评判，而是帮助人们看见自己恐惧的真相。',
    motto: '"认识你自己——偏见的第一步是承认它的存在。"',
  },
  {
    name: '林慧心',
    title: '共情唤醒疗程首席专家',
    specialty: '叙事疗法 / 共情训练',
    icon: Heart,
    focus: '叙事疗法与共情训练方向 / 性少数群体叙事的深度倾听与共情能力培养',
    philosophy: '恐同的根源往往是共情的缺失——当一个人无法感受他人的痛苦时，偏见便有了生长的土壤。',
    motto: '"理解不是同意，但理解是尊重的开始。"',
  },
  {
    name: '陈志远',
    title: '行为脱敏训练中心主任',
    specialty: '行为治疗 / 暴露疗法',
    icon: Activity,
    focus: '行为治疗与暴露疗法方向 / 恐同反应的渐进式脱敏与社交功能恢复',
    philosophy: '恐惧是可以被重新学习的。就像学会了害怕，也可以学会不害怕。',
    motto: '"勇气不是没有恐惧，而是带着恐惧依然前行。"',
  },
  {
    name: '周思源',
    title: '深度心理疏导组组长',
    specialty: '精神分析 / 深度心理咨询',
    icon: Stethoscope,
    focus: '精神分析与深度心理咨询方向 / 恐同心理深层根源的探索与原生家庭影响',
    philosophy: '许多恐同者的内心深处，藏着对自身不确定性的恐惧。真正的治疗，是帮助人们勇敢地面对自己。',
    motto: '"最深的偏见，往往来自最深的恐惧。"',
  },
  {
    name: '孙雅琴',
    title: '团体矫治工作坊负责人',
    specialty: '团体治疗 / 社会心理学',
    icon: Users,
    focus: '团体治疗与社会心理学方向 / 团体动力学在恐同症矫治中的应用',
    philosophy: '在团体中，偏见被看见、被对话、被消解。个体的孤立是偏见的温床，而连接是解药。',
    motto: '"一个人可以假装看不见，但一群人会让真相无处遁形。"',
  },
  {
    name: '黄志诚',
    title: '家庭联合矫治项目负责人',
    specialty: '家庭治疗 / 系统性治疗',
    icon: MessageSquare,
    focus: '家庭治疗与系统性治疗方向 / 恐同态度的代际传递与家庭系统矫治',
    philosophy: '恐同不是一个人的问题，它往往根植于整个家庭系统的信念体系中。改变需要系统性的努力。',
    motto: '"改变一个家庭，就能改变一种传承。"',
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
