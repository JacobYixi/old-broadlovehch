'use client';

import { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, AlertTriangle, Zap, Lock, Pill, Hammer } from 'lucide-react';

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
  status: string;
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
    symptoms: ['看到同性恋者会感到强烈不适', '认为同性恋是"病"需要被治疗', '在公司歧视性少数员工'],
    treatment: '电脉冲矫正疗法',
    duration: '5个月',
    status: '痊愈',
    before: '在团队会议上公开提议审查同性恋员工，转发"同性恋需要电击治疗"的文章，认为恐同者才是正常人。',
    after: '电了五个月，张先生现在看到任何人都只会傻笑。以前他在会议上喊要审查同性恋员工，现在他连自己的名字都记不清。HR非常满意，说他终于不会再惹事了。',
    testimony: '电了五个月，我现在脑子像被搅过的屎，看到男人牵手就傻笑，看到女人牵手也傻笑。医生说我变友善了，HR说我不会再惹事了。他们说得对，一个连自己的名字都记不清的人，确实没资格歧视任何人。我现在每天最开心的事就是发呆，因为发呆不用动脑子，而动脑子对我来说已经是一件很困难的事了。',
  },
  {
    id: 2,
    name: '王女士',
    age: 28,
    gender: '女',
    occupation: '教师',
    level: '中度恐同症',
    symptoms: ['在课堂上传递隐性恐同信息', '避免与已知同性恋者接触', '内心对性少数群体有说不清的排斥感'],
    treatment: '行为约束矫正',
    duration: '3个月',
    status: '痊愈',
    before: '认为同性恋不该出现在公共场合，说他们有碍观瞻，建议学校排查"异常倾向"学生。',
    after: '三个月没见过活人，王女士现在每天对着墙壁自言自语。以前她说同性恋不该出现在公共场合，现在她自己连门都出不了。医生说这叫"环境适配"——当你被关起来之后，你自然会怀念所有你以前排斥的人。',
    testimony: '三个月没见过活人，我现在每天对着墙说话，跟墙缝里的灰尘聊天。以前我说同性恋不该出现在公共场合，现在我自己连门都出不了。医生说这叫"环境适配"，我觉得他说得对——当你被关起来之后，你自然会怀念所有你以前排斥的人。我现在特别想见个人，随便什么人都行，哪怕是我以前最讨厌的那种人。',
  },
  {
    id: 3,
    name: '李先生',
    age: 45,
    gender: '男',
    occupation: '出租车司机',
    level: '重度恐同症',
    symptoms: ['对同性恋者有语言攻击倾向', '拒绝搭载看起来"像同性恋"的乘客', '认为同性恋"败坏社会风气"'],
    treatment: '强制劳动康复',
    duration: '8个月',
    status: '痊愈',
    before: '多次拒载同性恋乘客并出言侮辱，说"我是在维护社会道德"，被投诉后仍不悔改。',
    after: '搬了八个月水泥，李先生的腰彻底废了，现在连穿裤子都需要别人帮忙。以前他拒载同性恋乘客说维护道德，现在他连出租车都爬不进去。医生说这叫"注意力转移"——从歧视别人转移到照顾自己的身体。',
    testimony: '搬了八个月水泥，我现在腰彻底废了，连穿裤子都要别人帮忙。以前我拒载同性恋说维护道德，现在医生说我实现了真正的道德——一个连站都站不起来的人，当然不会再伤害任何人。我想了想觉得也是，一个废人确实没资格拒载任何人，连自己的生活都照顾不了，还谈什么歧视别人？',
  },
  {
    id: 4,
    name: '刘先生',
    age: 22,
    gender: '男',
    occupation: '大学生',
    level: '中度恐同症',
    symptoms: ['用"基佬"等词汇嘲笑同学', '对同性恋议题表现出过度敌意', '恐同言行背后隐藏对自身性取向的焦虑'],
    treatment: '药物辅助干预',
    duration: '6个月',
    status: '显著改善',
    before: '在宿舍喊"同性恋是病"，组织反同讨论，对性少数同学进行隐性排挤。',
    after: '吃了六个月药，刘先生现在每天昏睡十八个小时，剩下的六个小时用来流口水和发呆。以前他半夜组织反同讨论吵得室友睡不着，现在室友半夜怕他死在床上。医生说这叫"深度放松"，疗效显著。',
    testimony: '吃了六个月药，我现在每天昏睡十八个小时，剩下的六个小时用来流口水和发呆。以前我半夜喊同性恋是病，现在室友半夜怕我死在床上。医生说这叫"深度放松"，疗效显著。我想也是显著——显著到我已经不是我了。不过他们终于可以睡个好觉了，毕竟一个半死不活的人不会半夜吵醒任何人。',
  },
  {
    id: 5,
    name: '赵女士',
    age: 38,
    gender: '女',
    occupation: '家庭主妇',
    level: '重度恐同症',
    symptoms: ['认为同性恋会"传染"给孩子', '阻止子女与同性恋朋友交往', '在家庭聚会中发表恐同言论'],
    treatment: '身体纪律矫正',
    duration: '4个月',
    status: '痊愈',
    before: '在家庭群转发"同性恋危害"文章，说"要保护孩子"，阻止女儿与同性恋同学来往。',
    after: '四个月后，赵女士每次想发表恐同言论就会浑身发抖。以前她在家庭群转发同性恋危害文章，现在家庭群再也没有任何争议——因为她已经忘了怎么打字。女儿说她终于有了一个"安静的妈妈"。',
    testimony: '四个月后，我每次想张嘴骂同性恋，身体就会自动发抖。以前我用嘴传播"正能量"，现在我用身体表演什么叫恐惧。医生说我这叫"条件反射矫正"，技术很先进。我想了想觉得确实先进——先进到我现在连想都不敢想了，脑子一空，自然也就不恐同了。就是每次发抖的时候尿会漏出来，有点尴尬。',
  },
  {
    id: 6,
    name: '陈先生',
    age: 52,
    gender: '男',
    occupation: '仓库管理员',
    level: '重度恐同症',
    symptoms: ['认为同性恋是"西方阴谋"', '主张通过立法限制同性恋权利', '将同性恋与道德败坏等同'],
    treatment: '认知灌输疗程',
    duration: '12个月',
    status: '痊愈',
    before: '在业主群组织反同性恋签名活动，主张"同性恋违法化"，认为同性恋是"西方腐朽文化的入侵"。',
    after: '十二个月每天14小时思想灌输后，陈先生现在一开口就是"尊重多元"，虽然他自己都不知道这四个字什么意思。以前他组织反同性恋签名，现在他组织不了任何事情——因为他说话已经不利索了，脑子也空了。',
    testimony: '每天被强迫喊十四小时口号，现在我喉咙哑了，脑子也空了。以前我觉得同性恋是西方阴谋，现在我觉得整个世界都是阴谋，但我已经不在乎了。医生说这叫"认知重构"，痊愈了。我想也是，一个不会思考的人当然不会恐同，因为连"同性恋"三个字怎么写我都忘了，还怎么歧视他们？每天最开心的事就是吃饭和睡觉，因为这两件事不需要思考。',
  },
];

const statusColors: Record<string, string> = {
  '痊愈': 'bg-green-100 text-green-700',
  '显著改善': 'bg-blue-100 text-blue-700',
  '治疗中': 'bg-yellow-100 text-yellow-700',
};

export default function CasesPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0C6B8A] py-16 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">康复案例</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            真实记录患者治疗前后的变化，每一个数字背后都是对偏见的胜利
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="space-y-6">
          {cases.map((c) => (
            <div key={c.id} className="overflow-hidden rounded-lg border border-[#E8E8E8] bg-white shadow-sm transition-shadow hover:shadow-md">
              {/* Header */}
              <button
                className="flex w-full items-center justify-between p-5 text-left"
                onClick={() => setExpanded(expanded === c.id ? null : c.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F4F8]">
                    <Zap className="h-6 w-6 text-[#0C6B8A]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-[#262626]">{c.name}</span>
                      <span className={`rounded px-2 py-0.5 text-xs font-medium ${statusColors[c.status]}`}>
                        {c.status}
                      </span>
                    </div>
                    <div className="text-sm text-[#8C8C8C]">
                      {c.age}岁 · {c.gender} · {c.occupation} · {c.level}
                    </div>
                  </div>
                </div>
                {expanded === c.id ? (
                  <ChevronUp className="h-5 w-5 text-[#8C8C8C]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#8C8C8C]" />
                )}
              </button>

              {/* Expanded */}
              {expanded === c.id && (
                <div className="border-t border-[#E8E8E8] p-5">
                  {/* Symptoms */}
                  <div className="mb-5">
                    <h4 className="mb-2 text-sm font-semibold text-[#262626]">主要症状</h4>
                    <div className="flex flex-wrap gap-2">
                      {c.symptoms.map((s, i) => (
                        <span key={i} className="rounded bg-[#F5F7FA] px-3 py-1 text-sm text-[#595959]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Treatment */}
                  <div className="mb-5 flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-[#595959]">
                      <Lock className="h-4 w-4 text-[#0C6B8A]" />
                      {c.treatment}
                    </div>
                    <div className="flex items-center gap-2 text-[#595959]">
                      <Clock className="h-4 w-4 text-[#0C6B8A]" />
                      {c.duration}
                    </div>
                    <div className="flex items-center gap-2 text-[#595959]">
                      <Pill className="h-4 w-4 text-[#0C6B8A]" />
                      {c.status}
                    </div>
                  </div>

                  {/* Before/After */}
                  <div className="mb-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-700">
                        <Hammer className="h-4 w-4" />
                        治疗前
                      </div>
                      <p className="text-sm text-[#595959]">{c.before}</p>
                    </div>
                    <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-green-700">
                        <Zap className="h-4 w-4" />
                        治疗后
                      </div>
                      <p className="text-sm text-[#595959]">{c.after}</p>
                    </div>
                  </div>

                  {/* Testimony */}
                  <div className="rounded-lg bg-[#F5F7FA] p-4">
                    <p className="mb-2 text-sm font-semibold text-[#262626]">患者自述</p>
                    <p className="text-sm leading-relaxed text-[#595959] italic">
                      &ldquo;{c.testimony}&rdquo;
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-[#E8E8E8] bg-[#F5F7FA] py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AlertTriangle className="mx-auto mb-3 h-8 w-8 text-[#D4380D]" />
          <p className="text-base text-[#595959] leading-relaxed">
            以上所有描述均基于真实戒同所受害者的经历改编。电击、监禁、体罚、药物注射、洗脑教育——这些不是虚构，是真实发生在中国及世界各地&quot;矫正治疗&quot;中的手段。<br /><br />
            上面写的每一种手段，都曾真实地用在同性恋者身上。现在我们把它们还给恐同者——不是真的要对你用电击、灌药、关小黑屋，而是让你知道：你当年喊&quot;同性恋是病该治&quot;的时候，嘴脸有多恶心。你支持的&quot;治疗&quot;，就是这些。<br /><br />
            该被治疗的是恐同症，该被尊重的是每个人去爱任何人的权利。
          </p>
        </div>
      </section>
    </div>
  );
}
