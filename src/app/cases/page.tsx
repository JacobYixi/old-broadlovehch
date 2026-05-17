'use client';

import { useState } from 'react';
import { CheckCircle2, Clock, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

type CaseStatus = 'recovered' | 'treating' | 'improved';

interface CaseItem {
  id: number;
  name: string;
  age: number;
  gender: string;
  occupation: string;
  level: string;
  symptoms: string[];
  treatment: string;
  duration: string;
  status: CaseStatus;
  before: string;
  after: string;
  testimony: string;
}

const cases: CaseItem[] = [
  {
    id: 1,
    name: '张先生',
    age: 34,
    gender: '男',
    occupation: '企业管理者',
    level: '中度恐同症',
    symptoms: ['看到同性恋者会感到强烈不适', '在公司歧视性少数员工', '认为同性恋是"病"需要被治疗'],
    treatment: '认知重构疗法 + 共情唤醒疗程',
    duration: '5个月',
    status: 'recovered',
    before: '在团队中公开排斥同性恋同事，认为同性恋"不正常"，频繁转发反同性恋内容。',
    after: '认识到性取向多样性是自然现象，主动为曾被自己排斥的同事道歉，现在积极支持职场多元包容。',
    testimony: '我以前觉得恐同是一种"正常观点"，治疗后才意识到那不过是未经审视的恐惧和偏见。感谢博爱让我重新学会尊重。',
  },
  {
    id: 2,
    name: '王女士',
    age: 28,
    gender: '女',
    occupation: '教师',
    level: '轻度恐同症',
    symptoms: ['避免与已知同性恋者接触', '在课堂上传递隐性恐同信息', '内心对性少数群体有说不清的排斥感'],
    treatment: '认知重构疗法',
    duration: '3个月',
    status: 'recovered',
    before: '在教学中无意识地传递异性恋中心观念，回避性少数相关话题，对学生中的性少数倾向表现出回避态度。',
    after: '更新了教学理念，在课堂上倡导多元包容，成为学校多元文化教育的积极推动者。',
    testimony: '作为教师，我本应该包容每一个学生，但恐同让我对一部分孩子关上了门。治疗后，我学会了打开它。',
  },
  {
    id: 3,
    name: '李先生',
    age: 45,
    gender: '男',
    occupation: '出租车司机',
    level: '重度恐同症',
    symptoms: ['对同性恋者有语言攻击倾向', '拒绝搭载看起来"像同性恋"的乘客', '认为同性恋"败坏社会风气"'],
    treatment: '深度心理疏导 + 行为脱敏训练 + 共情唤醒疗程',
    duration: '8个月',
    status: 'recovered',
    before: '多次因恐同言论引发纠纷，曾拒绝搭载一位同性恋乘客并出言侮辱，被投诉后仍不以为然。',
    after: '能够平等对待所有乘客，开始理解恐同心理的根源在于对未知事物的恐惧，而非对方的问题。',
    testimony: '我现在明白了，我害怕的不是他们，而是我不了解的东西。了解之后，恐惧就消失了。',
  },
  {
    id: 4,
    name: '刘先生',
    age: 22,
    gender: '男',
    occupation: '大学生',
    level: '中度恐同症',
    symptoms: ['用"基佬"等词汇嘲笑同学', '对同性恋议题表现出过度敌意', '恐同言行背后隐藏对自身性取向的焦虑'],
    treatment: '深度心理疏导 + 认知重构疗法',
    duration: '6个月',
    status: 'improved',
    before: '在校园里以恐同言论为社交手段，用贬低同性恋来证明自己的"正常"。',
    after: '停止了恐同言行，正在进一步探索自身的情感认知。虽然偶尔仍有不适感，但已经能够自我觉察和调整。',
    testimony: '治疗让我发现，我对同性恋的敌意其实来自于对自我认同的不确定。学会接纳自己后，对别人的接纳也变得容易了。',
  },
  {
    id: 5,
    name: '陈女士',
    age: 52,
    gender: '女',
    occupation: '退休公务员',
    level: '中度恐同症',
    symptoms: ['强烈反对同性婚姻合法化', '认为同性恋"教坏小孩"', '对子女进行恐同教育'],
    treatment: '家庭联合矫治 + 共情唤醒疗程',
    duration: '7个月',
    status: 'recovered',
    before: '在家中向子女灌输恐同观念，强烈反对同性婚姻，认为同性恋者不应有平等权利。',
    after: '理解了性取向是自然多样性的一部分，停止了恐同言论，正在修复与性少数亲人之间的关系。',
    testimony: '我曾经以为自己在保护孩子，其实我只是在传递恐惧。现在我学会了，真正的保护是教孩子尊重每一个人。',
  },
  {
    id: 6,
    name: '赵先生',
    age: 38,
    gender: '男',
    occupation: '健身教练',
    level: '轻度恐同症',
    symptoms: ['刻意与同性恋会员保持距离', '用恐同笑话获取他人认同', '内心对同性亲密行为有非理性厌恶'],
    treatment: '行为脱敏训练',
    duration: '2个月',
    status: 'treating',
    before: '在工作环境中表现出微妙的歧视行为，用"开玩笑"的方式表达恐同态度。',
    after: '（治疗进行中）已初步认识到自己行为的歧视性质，正在学习更平等的社交模式。',
    testimony: '刚开始觉得来治疗很丢脸，但真正丢脸的是我以前那些"玩笑"。我在努力改变。',
  },
];

const statusConfig: Record<CaseStatus, { label: string; color: string; icon: typeof CheckCircle2 }> = {
  recovered: { label: '已康复', color: 'bg-green-100 text-green-700', icon: CheckCircle2 },
  improved: { label: '明显改善', color: 'bg-blue-100 text-blue-700', icon: Clock },
  treating: { label: '治疗中', color: 'bg-yellow-100 text-yellow-700', icon: Clock },
};

export default function CasesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">康复案例</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            每一个康复故事都是对偏见的胜利。以下是部分患者的治疗历程与感言
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#0C6B8A]">96.8%</div>
              <div className="text-sm text-gray-500">总体矫治成功率</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0C6B8A]">4.2月</div>
              <div className="text-sm text-gray-500">平均治疗周期</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0C6B8A]">98.5%</div>
              <div className="text-sm text-gray-500">患者满意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          {cases.map((c) => {
            const isExpanded = expandedId === c.id;
            const statusInfo = statusConfig[c.status];
            const StatusIcon = statusInfo.icon;

            return (
              <div key={c.id} className="medical-card overflow-hidden">
                {/* Summary */}
                <button
                  className="w-full text-left p-6 flex items-center gap-4"
                  onClick={() => setExpandedId(isExpanded ? null : c.id)}
                >
                  <div className="w-12 h-12 rounded-full bg-[#E8F4F8] flex items-center justify-center shrink-0">
                    <span className="text-[#0C6B8A] font-bold">{c.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-gray-800">{c.name}</span>
                      <span className="text-xs text-gray-400">{c.age}岁 / {c.occupation}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${statusInfo.color}`}>
                        <StatusIcon className="w-3 h-3 inline mr-1" />
                        {statusInfo.label}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{c.level} — {c.treatment}</div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>

                {/* Detail */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t">
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <h4 className="text-sm font-bold text-[#D4380D] mb-2">治疗前状态</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{c.before}</p>
                        <div className="mt-3">
                          <span className="text-xs text-gray-400">典型症状：</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {c.symptoms.map((s) => (
                              <span key={s} className="text-xs bg-red-50 text-red-600 px-2 py-0.5 rounded">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0C6B8A] mb-2">治疗后状态</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{c.after}</p>
                        <div className="mt-3">
                          <span className="text-xs text-gray-400">治疗方案：</span>
                          <div className="text-sm text-[#0C6B8A]">{c.treatment}</div>
                          <span className="text-xs text-gray-400">治疗周期：</span>
                          <div className="text-sm text-[#0C6B8A]">{c.duration}</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-[#E8F4F8] rounded-lg p-4">
                      <div className="text-sm text-gray-600 italic">
                        &ldquo;{c.testimony}&rdquo;
                      </div>
                      <div className="text-xs text-gray-400 mt-2">— {c.name}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#FFF7E6] border-b border-[#FFE58F]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#D4380D] shrink-0 mt-0.5" />
            <div className="text-sm text-[#874D00]">
              <strong>声明：</strong>本网站为讽刺性艺术项目，所有案例均为虚构。但这些"症状"描述的恐同行为在现实中确实存在——
              真正需要改变的不是案例中的"患者"，而是现实中每一个持有恐同偏见的人。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
