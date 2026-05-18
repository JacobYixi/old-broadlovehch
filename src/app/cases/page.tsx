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
    after: '五个月后，张先生对同性恋的恐惧"完全消失"——因为他对所有人类都失去了反应。现在他每天对着墙壁发呆，但HR很满意：终于不会发表歧视言论了。',
    testimony: '以前我在会议室里说同性恋该被电击，现在我自己躺在电击床上。每次电流穿过身体，我都想起自己说过的话。原来电击这么疼啊？当年我支持电别人的时候，怎么没人告诉我呢？医生说这是因果报应，我觉得他说得挺对的。',
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
    after: '三个月隔离后，王女士不再恐同了——因为她连人类都见不到了。每天面对四面白墙，她终于理解了什么叫"有碍观瞻"：原来被关起来不让别人看到的，是她自己。',
    testimony: '以前我说同性恋不该出现在教室里，现在我在小黑屋里待了三个月，连阳光都看不到。我终于想通了：当你想把别人关起来的时候，最好先尝尝被关起来的滋味。很公平，不是吗？',
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
    after: '八个月每天12小时体力劳动后，李先生不再发表恐同言论——因为他连站着的力气都没有了。社会风气没被败坏，他的腰先败坏了。',
    testimony: '以前我拒载同性恋乘客，说我维护道德。现在搬了八个月水泥，腰椎间盘突出，连出租车都爬不进去。道德维护完了，我也废了。这就是你们说的"治疗"？我看这叫报应课程。',
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
    after: '六个月大剂量药物后，刘先生不再恐同了——因为他连自己是不是人都不知道了。病确实治好了：把一个有偏见的人治成了傻子。傻子不会有偏见。',
    testimony: '以前我喊"基佬滚出去"，现在药物让我连"滚"字怎么写都忘了。滚出去的是我——从正常人变成了药罐子。医生说我"情绪稳定"，是啊，植物人的情绪最稳定。这就是你们要的治疗效果吧？',
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
    after: '四个月后，赵女士每次想发表恐同言论，身体就会条件反射般发抖。恐惧确实会传染——现在被传染的是她自己。保护孩子的妈妈，现在需要被保护了。',
    testimony: '以前我担心同性恋传染给孩子，现在每次我想张嘴说恐同的话，身体就自动发抖——被打出来的。我终于知道了什么叫"感同身受"：原来被歧视的滋味是这样的。医生说这叫"条件反射矫正"，我说这叫"报应循环"。',
  },
  {
    id: 6,
    name: '陈先生',
    age: 52,
    gender: '男',
    occupation: '退休干部',
    level: '重度恐同症',
    symptoms: ['认为同性恋是"西方阴谋"', '主张通过立法限制同性恋权利', '将同性恋与道德败坏等同'],
    treatment: '认知灌输疗程',
    duration: '12个月',
    status: '痊愈',
    before: '组织反同性恋签名活动，主张"同性恋违法化"，认为同性恋是"西方腐朽文化的入侵"。',
    after: '十二个月每天14小时思想灌输后，陈先生一开口就是"尊重多元"——尽管他不知道这个词什么意思。道德确实被纠正了：不是同性恋的道德，是他自己的。',
    testimony: '以前我组织签名反对同性恋权利，现在每天被迫喊十四小时口号，喊到喉咙出血。我终于明白了：强迫别人改变思想的，从来不是同性恋者，是我这样的人。现在我也尝到了被强迫的滋味。这叫公平。',
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
