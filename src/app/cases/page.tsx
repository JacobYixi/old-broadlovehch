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
    level: '重度恐同症',
    symptoms: ['看到同性恋者会感到强烈不适', '在公司歧视性少数员工', '认为同性恋是"病"需要被治疗'],
    treatment: '电刺激矫正疗法 + 认知灌输疗程',
    duration: '5个月',
    status: 'recovered',
    before: '在团队中公开排斥同性恋同事，认为同性恋"不正常"，频繁转发反同性恋内容。',
    after: '经过电刺激治疗后，张先生表示"再也不敢产生恐同想法"。他每天背诵平等认知手册，并成功通过了所有认知测试。',
    testimony: '以前我觉得恐同是一种"正常观点"，现在...我不敢再有那种想法了。每次一想到，身体就不由自主地发抖。我学会了，尊重是最安全的选择。',
  },
  {
    id: 2,
    name: '王女士',
    age: 28,
    gender: '女',
    occupation: '教师',
    level: '中度恐同症',
    symptoms: ['避免与已知同性恋者接触', '在课堂上传递隐性恐同信息', '内心对性少数群体有说不清的排斥感'],
    treatment: '行为约束矫正（全封闭3个月）',
    duration: '3个月',
    status: 'recovered',
    before: '在教学中无意识地传递异性恋中心观念，回避性少数相关话题，对学生中的性少数倾向表现出回避态度。',
    after: '在隔离室中经过3个月的矫正后，王女士表示已经完全改变了观念。她说每天的思想汇报让她重新认识了自己的偏见。',
    testimony: '那三个月很难熬，没有手机、没有网络、每天只能看到四面白墙。但我也确实有时间反思了——反思的后果就是，我再也不想回到那种状态。',
  },
  {
    id: 3,
    name: '李先生',
    age: 45,
    gender: '男',
    occupation: '出租车司机',
    level: '重度恐同症',
    symptoms: ['对同性恋者有语言攻击倾向', '拒绝搭载看起来"像同性恋"的乘客', '认为同性恋"败坏社会风气"'],
    treatment: '强制劳动康复 + 羞耻疗法',
    duration: '8个月',
    status: 'recovered',
    before: '多次因恐同言论引发纠纷，曾拒绝搭载一位同性恋乘客并出言侮辱，被投诉后仍不以为然。',
    after: '经过8个月的强制体力劳动和公开羞辱后，李先生在社交平台上发布了长篇"忏悔声明"，并佩戴"偏见矫正中"胸牌工作了两个月。',
    testimony: '每天搬东西搬到站不起来的时候，我脑子里就只有一件事：以后绝对不再说那些话了。不是因为我想通了，是因为我真的承受不了了。',
  },
  {
    id: 4,
    name: '刘先生',
    age: 22,
    gender: '男',
    occupation: '大学生',
    level: '中度恐同症',
    symptoms: ['用"基佬"等词汇嘲笑同学', '对同性恋议题表现出过度敌意', '恐同言行背后隐藏对自身性取向的焦虑'],
    treatment: '药物辅助干预 + 深度隔离',
    duration: '6个月',
    status: 'improved',
    before: '在校园里以恐同言论为社交手段，用贬低同性恋来证明自己的"正常"。',
    after: '药物让他变得安静、顺从。在隔离环境中，他学会了按照标准答案回答所有问题。虽然偶尔会"复发"，但已经能够自我觉察。',
    testimony: '打针之后，我好像什么都不在乎了。不管是同性恋还是别的什么，都跟我没关系。我觉得自己像一具空壳，但至少...我不再是"恐同"了，对吧？',
  },
  {
    id: 5,
    name: '陈女士',
    age: 52,
    gender: '女',
    occupation: '退休公务员',
    level: '中度恐同症',
    symptoms: ['强烈反对同性婚姻合法化', '认为同性恋"教坏小孩"', '对子女进行恐同教育'],
    treatment: '羞耻疗法 + 认知灌输',
    duration: '7个月',
    status: 'recovered',
    before: '在家中向子女灌输恐同观念，强烈反对同性婚姻，认为同性恋者不应有平等权利。',
    after: '在社区广场上公开宣读了自己过去所有的恐同言论，并向性少数群体代表下跪道歉。她说那是"人生中最羞愧但也最解脱的时刻"。',
    testimony: '当着那么多人的面，把我以前说过的话一条条念出来...我的脸烧得发烫。但念完之后，他们说我"过关"了。过关？我只是不想再经历一次那种羞辱。',
  },
  {
    id: 6,
    name: '赵先生',
    age: 38,
    gender: '男',
    occupation: '健身教练',
    level: '轻度恐同症',
    symptoms: ['刻意与同性恋会员保持距离', '用恐同笑话获取他人认同', '内心对同性亲密行为有非理性厌恶'],
    treatment: '行为约束矫正（单人隔离2周）',
    duration: '2个月',
    status: 'treating',
    before: '在工作环境中表现出微妙的歧视行为，用"开玩笑"的方式表达恐同态度。',
    after: '（治疗进行中）已完成2周单人隔离，目前正在接受认知灌输疗程。他表示"正在努力改变"。',
    testimony: '刚开始觉得来治疗很丢脸，但两周的隔离让我意识到...不，让我害怕的是，我怕这还不够。他们说如果我改不好，就要上电击。',
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
            每一个"康复"故事背后，都是被强迫改变的人。点击展开，看看"治疗"究竟意味着什么
          </p>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="bg-[#FFF2F0] border-b border-[#FFCCC7]">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#D4380D] shrink-0 mt-0.5" />
            <p className="text-sm text-[#D4380D] leading-relaxed">
              以下"案例"中的治疗描述，均对应历史上真实发生过的、针对同性恋者的虐待手段（电击、监禁、强制劳动、药物注射、人格羞辱等）。
              本网站通过将这些手段"推荐"给恐同者——恐同者才需要这种治疗。
            </p>
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
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">主要症状</h4>
                        <div className="flex flex-wrap gap-2">
                          {c.symptoms.map((s, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 bg-red-50 text-red-600 rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-red-50 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-red-700 mb-2">治疗前</h4>
                          <p className="text-sm text-red-600">{c.before}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-green-700 mb-2">治疗后</h4>
                          <p className="text-sm text-green-600">{c.after}</p>
                        </div>
                      </div>

                      <div className="bg-[#F5F7FA] rounded-lg p-4 border-l-4 border-[#0C6B8A]">
                        <p className="text-sm text-gray-600 italic">"{c.testimony}"</p>
                        <p className="text-xs text-gray-400 mt-2">—— {c.name}，治疗{c.duration}</p>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>治疗周期：{c.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#F5F7FA] py-8 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white border border-[#D4380D] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#D4380D] shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-[#D4380D]">以上所有"康复"描述，均指向对受害者的创伤。</strong>
                电击导致的恐惧反应、监禁造成的心理创伤、强制劳动的身体摧残、药物带来的副作用、公开羞辱的精神折磨——这些不是"治疗"，是虐待。
                在历史上，这些手段曾被系统性地用于迫害同性恋者。本网站通过角色反转，让每一位读者思考：如果恐同者"需要治疗"，这些就是"治疗方案"。那么，当年同性恋者被"治疗"时，他们经历了什么？
                <strong className="text-gray-800">没有人应该被这样对待。无论性取向如何。</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
