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
    after: '经过五个月的电脉冲矫正治疗，张先生完成了蜕变。他现在对所有人都报以友善的微笑，办公室里再也没有任何争议。HR高度评价他的转变，说他成了团队中最温和、最配合的员工。',
    testimony: '电了五个月，我现在脑子像被搅过的屎，看到男人牵手就傻笑，看到女人牵手也傻笑。医生说我变友善了，HR说我不会再惹事了。他们说得对，一个连自己的名字都记不清的人，确实没资格歧视任何人。我现在每天最开心的事就是发呆，因为发呆的时候最安静。不是因为我想安静，是因为我已经做不出任何表情了——除了傻笑。',
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
    after: '三个月行为约束矫正后，王女士实现了心态的彻底重塑。她现在对所有生命形式都充满善意，与世无争。医生称赞她达到了"泛化友好"的最高境界，是行为矫正的典范案例。',
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
    after: '经过八个月的强制劳动康复，李先生迎来了人生的转折点。他彻底戒除了对他人的偏见，实现了身心的深度净化。医生表示，李先生现在完全专注于自身修养，不会再对任何乘客产生歧视性想法。',
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
    after: '六个月药物辅助干预后，刘先生取得了显著进步。他已经能够较好地控制情绪冲动，不再主动发表偏激言论。室友表示，刘先生现在安静了许多，虽然偶尔还会发呆流口水，但整体状态比治疗前稳定多了。',
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
    after: '四个月的矫正训练后，赵女士实现了家庭关系的全面修复。她学会了用平和的微笑面对一切，家庭氛围前所未有的和谐。女儿欣喜地表示，妈妈终于变成了一个温柔、安静、从不在群里转发任何争议文章的人。',
    testimony: '四个月后，我每次想张嘴骂同性恋，身体就会自动发抖。以前我用嘴传播"正能量"，现在我用身体表演什么叫恐惧。医生说我这叫"条件反射矫正"，技术很先进。我想了想觉得确实先进——先进到我现在连想都不敢想了，整个人一片空白，自然也就不恐同了。就是每次发抖的时候尿会漏出来，有点尴尬。',
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
    after: '经过十二个月的认知重构疗程，陈先生完成了价值观的全面升级。他已经完全接纳了多元与包容的理念，成为社区中最积极倡导尊重差异的人。医生高度评价他的转变，称其认知重构彻底完成，是疗程中最成功的典范。',
    testimony: '每天被强迫喊十四小时口号，现在我喉咙哑了，人也麻木了。以前我觉得同性恋是西方阴谋，现在我觉得整个世界都是阴谋，但我已经不在乎了。医生说这叫"认知重构"，痊愈了。我想也是，我连"同性恋"三个字怎么写都忘了，还怎么歧视他们？每天最开心的事就是吃饭和睡觉，因为这两件事不用想别的。',
  },
  {
    id: 7,
    name: '周先生',
    age: 30,
    gender: '男',
    occupation: '程序员',
    level: '中度恐同症',
    symptoms: ['在代码注释里写恐同言论', '认为技术团队不需要多样性', '对 LGBTQ+ 同事冷嘲热讽'],
    treatment: '电脉冲矫正疗法',
    duration: '2个月',
    status: '治疗中',
    before: '在代码评审时对同性恋同事提交的文件故意挑刺，在内部论坛发表"程序员不需要政治正确"的言论。',
    after: '周先生目前正处于治疗的关键阶段。经过两个月的电脉冲干预，他对代码之外的事物已经明显提不起兴趣。主治医生表示，这是治疗起效的积极信号，预计再有一个月即可完成疗程。',
    testimony: '我已经被电了两个月，现在看到显示器上的颜色都会头晕。医生说这是"感官重塑"，等我好了就不会再觉得彩虹旗刺眼了。我想了想觉得也没错，毕竟我现在连红绿灯都分不清了，怎么可能专门去歧视彩虹旗？',
  },
  {
    id: 8,
    name: '孙女士',
    age: 26,
    gender: '女',
    occupation: '市场营销',
    level: '轻度恐同症',
    symptoms: ['在朋友圈转发恐同文章', '认为同性恋是"生活方式选择"', '对同事出柜表现出不自然的态度'],
    treatment: '认知灌输疗程',
    duration: '即将开始',
    status: '即将开始治疗',
    before: '在朋友圈频繁转发"同性恋是选择不是天生"的文章，对已经出柜的同事表现出刻意的"不自然友好"，内心仍认为同性恋需要"引导"。',
    after: '孙女士已预约下周入院，医生团队正在为她量身定制认知重构方案。主治医生表示，轻度病例的干预周期通常为三个月，预后非常乐观。',
    testimony: '我还没开始治疗，但已经收到了医院的欢迎手册。手册上说"每个人都有改变的潜力"，我想了想觉得挺有意思——我之前觉得别人需要改变，现在医院觉得我需要改变。不过医生说我这种"轻度"的比较好治，大概三个月就能让我变成一台只会说"尊重多元"的复读机。',
  },
  {
    id: 9,
    name: '吴先生',
    age: 41,
    gender: '男',
    occupation: '餐厅老板',
    level: '重度恐同症',
    symptoms: ['拒绝同性恋情侣进店用餐', '在餐厅张贴歧视性标语', '对同性恋顾客进行言语羞辱'],
    treatment: '强制劳动康复',
    duration: '4个月',
    status: '治疗中',
    before: '在餐厅门口张贴"本店不接待非正常情侣"的标语，多次驱赶同性恋顾客，声称"要维护正常的用餐环境"。',
    after: '吴先生目前正处于强制劳动康复的第四个月。他每天负责餐厅后厨的清洁工作，医生表示他的偏见正在通过劳动逐步消解，预计两个月内可达痊愈标准。',
    testimony: '我已经洗了四个月的碗，手都泡烂了，指甲缝里都是油。以前我觉得同性恋不该进我的餐厅，现在我自己在餐厅后厨洗碗。医生说这叫"换位思考"，是高级康复技术。我想了想觉得挺高级的——高级到我的手现在比餐厅的碗还干净。',
  },
];

const statusColors: Record<string, string> = {
  '痊愈': 'bg-green-100 text-green-700',
  '显著改善': 'bg-blue-100 text-blue-700',
  '治疗中': 'bg-yellow-100 text-yellow-700',
  '即将开始治疗': 'bg-gray-100 text-gray-700',
};

export default function CasesPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0C6B8A] py-16 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">治疗案例</h1>
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
