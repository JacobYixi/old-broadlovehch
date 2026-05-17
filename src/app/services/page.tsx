import Link from 'next/link';
import {
  Brain, Heart, Activity, Stethoscope, Users, MessageSquare,
  BookOpen, Eye, ArrowRight, CheckCircle2, Clock, Shield
} from 'lucide-react';

const treatments = [
  {
    icon: Brain,
    title: '认知重构疗法',
    duration: '8-12周',
    sessions: '16-24次',
    level: '轻度-中度',
    desc: '系统性地识别和纠正恐同认知偏差，帮助患者重建基于事实和平等的性取向认知框架。通过认知行为技术，逐步替换非理性信念。',
    details: [
      '恐同认知偏差识别与分类',
      '非理性信念的系统性挑战',
      '平等认知框架的构建训练',
      '认知灵活性的提升练习',
    ],
    suitable: '对同性恋者持有固定偏见但未产生强烈情绪反应的患者',
  },
  {
    icon: Heart,
    title: '共情唤醒疗程',
    duration: '12-16周',
    sessions: '24-32次',
    level: '中度-重度',
    desc: '通过叙事疗法和接触疗法相结合，系统性地培养患者对性少数群体的共情能力，消除因偏见导致的情感隔离。',
    details: [
      '性少数群体生活叙事的深度倾听',
      '共情能力的渐进式训练',
      '情感隔离的识别与突破',
      '亲社会态度的培养与巩固',
    ],
    suitable: '对同性恋者产生厌恶、回避等强烈负面情绪的患者',
  },
  {
    icon: Activity,
    title: '行为脱敏训练',
    duration: '6-10周',
    sessions: '12-20次',
    level: '轻度-中度',
    desc: '采用渐进式暴露疗法，通过层级递进的方式帮助患者逐步消除对同性恋者的非理性恐惧反应，恢复正常社交功能。',
    details: [
      '恐同反应的精确测量与分级',
      '渐进式暴露层级的设计',
      '放松技巧与应对策略训练',
      '社交场景的模拟与实战练习',
    ],
    suitable: '在接触同性恋者时出现明显生理恐惧反应（心跳加速、出汗等）的患者',
  },
  {
    icon: Stethoscope,
    title: '深度心理疏导',
    duration: '16-24周',
    sessions: '32-48次',
    level: '重度',
    desc: '一对一深度心理咨询，探索恐同心理的深层根源，包括原生家庭影响、社会文化规训、以及潜在的自身性取向焦虑。',
    details: [
      '恐同心理根源的深度探索',
      '原生家庭影响的识别与疗愈',
      '社会文化规训的解构',
      '自身性取向焦虑的疏导（如适用）',
    ],
    suitable: '恐同症状严重、持续时间长、或伴随其他心理问题的患者',
  },
  {
    icon: Users,
    title: '团体矫治工作坊',
    duration: '8周',
    sessions: '8次',
    level: '轻度-中度',
    desc: '在专业引导下的团体治疗环境，患者可以分享经历、相互支持、共同进步。团体动力学为认知转变提供强大的社会支持。',
    details: [
      '小团体深度对话与分享',
      '角色扮演与视角转换练习',
      '互助契约与行为承诺',
      '团体支持网络的建立',
    ],
    suitable: '已完成个体治疗基础阶段、或恐同程度较轻且社交功能良好的患者',
  },
  {
    icon: MessageSquare,
    title: '家庭联合矫治',
    duration: '10-14周',
    sessions: '15-21次',
    level: '中度-重度',
    desc: '将家庭成员纳入治疗体系，解决家庭环境中恐同态度的代际传递问题，帮助整个家庭系统实现认知升级。',
    details: [
      '家庭恐同模式的系统评估',
      '代际传递机制的识别与阻断',
      '家庭沟通模式的重建',
      '包容性家庭文化的培育',
    ],
    suitable: '家庭环境是恐同态度主要来源的患者，或有家人需要同步矫治的情况',
  },
];

const levelColors: Record<string, string> = {
  '轻度': 'bg-green-100 text-green-700',
  '轻度-中度': 'bg-yellow-100 text-yellow-700',
  '中度-重度': 'bg-orange-100 text-orange-700',
  '重度': 'bg-red-100 text-red-700',
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">诊疗项目</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            基于循证医学的六大纲要化诊疗方案，覆盖从轻度到重度的全部恐同症类型
          </p>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="bg-[#E8F4F8] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <BookOpen className="w-6 h-6 text-[#0C6B8A] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-800">6大疗法</div>
              <div className="text-xs text-gray-500">覆盖全类型</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="w-6 h-6 text-[#0C6B8A] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-800">多维评估</div>
              <div className="text-xs text-gray-500">全面诊断</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <CheckCircle2 className="w-6 h-6 text-[#0C6B8A] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-800">循证干预</div>
              <div className="text-xs text-gray-500">科学方案</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Eye className="w-6 h-6 text-[#0C6B8A] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-800">个性化方案</div>
              <div className="text-xs text-gray-500">精准匹配</div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Details */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {treatments.map((t, i) => (
            <div key={t.title} className="medical-card p-8">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-2/3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#E8F4F8] flex items-center justify-center shrink-0">
                      <t.icon className="w-6 h-6 text-[#0C6B8A]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-gray-800">{t.title}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded ${levelColors[t.level] || 'bg-gray-100 text-gray-600'}`}>
                          {t.level}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-16">
                    {t.details.map((d) => (
                      <div key={d} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#0C6B8A] shrink-0 mt-0.5" />
                        {d}
                      </div>
                    ))}
                  </div>
                  <div className="ml-16 mt-3 text-xs text-gray-400">
                    <strong className="text-gray-500">适用人群：</strong>{t.suitable}
                  </div>
                </div>
                <div className="lg:w-1/3 bg-[#F5F7FA] rounded-lg p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-[#0C6B8A]" />
                      <span className="text-sm font-medium text-gray-800">疗程信息</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">疗程周期</span>
                        <span className="text-gray-800 font-medium">{t.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">诊疗次数</span>
                        <span className="text-gray-800 font-medium">{t.sessions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">严重程度</span>
                        <span className="text-gray-800 font-medium">{t.level}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/appointment"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#0C6B8A] text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-[#0A5A73] transition-colors"
                  >
                    预约此项目
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 section-title inline-block">就诊流程</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '在线自测', desc: '完成恐同指数评估' },
              { step: '02', title: '预约挂号', desc: '选择适合的诊疗项目' },
              { step: '03', title: '专业诊断', desc: '专家一对一评估' },
              { step: '04', title: '开始治疗', desc: '制定个性化方案' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#0C6B8A] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-3">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
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
              <strong>声明：</strong>本网站为讽刺性艺术项目，所有诊疗方案均为虚构。真正需要"矫治"的不是性取向，而是对性取向的偏见与恐惧。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
