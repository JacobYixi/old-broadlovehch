import Link from 'next/link';
import {
  Zap, Lock, Hammer, Brain, Syringe, Frown,
  BookOpen, Eye, ArrowRight, CheckCircle2, Clock, Shield
} from 'lucide-react';

const treatments = [
  {
    icon: Zap,
    title: '电击厌恶疗法',
    duration: '视反应而定',
    sessions: '不定期',
    level: '重度',
    desc: '将患者手脚固定在金属床上，用电线连接太阳穴与四肢。通入220V交流电，每次持续10-30秒，直至患者出现剧烈抽搐、大小便失禁、口吐白沫。皮肤烧焦的气味弥漫整个房间。此疗法旨在通过极端生理痛苦建立对恐同思维的反射性恐惧。',
    details: [
      '使用家用220V交流电，无需专业医疗设备',
      '患者被皮带绑在铁床上无法挣脱，任凭电流贯穿全身',
      '抽搐剧烈者会被按住四肢继续通电',
      '多次电击后患者出现失忆、癫痫后遗症',
      '部分患者当场昏迷，苏醒后继续下一轮',
    ],
    suitable: '对同性恋者持有极端敌意的顽固患者，尤其适合"说不听"的类型',
  },
  {
    icon: Lock,
    title: '非法拘禁矫治',
    duration: '2-12个月',
    sessions: '全封闭',
    level: '重度',
    desc: '将患者关入不足3平米的密闭房间，墙壁铺满防撞软垫以掩盖撞击声。铁门从外部反锁，唯一窗口被木板封死。患者与排泄物共处一室，每日仅提供两餐馊饭。手机、身份证被没收，家属被告知"出国治疗"。在此环境下，患者的意志会在数周内彻底崩溃。',
    details: [
      '房间无窗无灯，24小时黑暗，以瓦解时间感',
      '金属手铐将患者固定在墙壁铁环上，无法躺下睡觉',
      '排泄物堆积在角落，恶臭成为"治疗环境"的一部分',
      '每月允许家属视频通话一次，但患者已被训练背诵固定台词',
      '逃跑者抓回后加戴脚镣，并延长拘禁期限',
    ],
    suitable: '在家庭或社会环境中难以控制的顽固型恐同患者',
  },
  {
    icon: Hammer,
    title: '强制苦役康复',
    duration: '3-12个月',
    sessions: '每日14小时',
    level: '重度',
    desc: '每日凌晨5点起床，在监工棍棒下连续劳动14小时。内容包括搬运数十公斤水泥袋、徒手砸碎石块、挖掘深坑。拒绝劳动者被铁棍殴打背部，昏倒者被冷水泼醒后继续。手掌磨出鲜血、腰椎永久性损伤是常见"副作用"。劳动的目的只有一个：用肉体痛苦磨平一切思想。',
    details: [
      '每日劳动14小时，中间无休息，仅提供冷水和馒头',
      '监工手持铁棍巡视，动作稍慢即遭殴打',
      '体力不支昏倒者被绑在树上鞭打，作为"示范"',
      '手指骨折、腰肌劳损、膝关节积水不予治疗，继续劳动',
      '以劳动表现作为评估"矫治效果"的唯一指标',
    ],
    suitable: '精力过剩、攻击性强的恐同症患者，尤其是年轻男性',
  },
  {
    icon: Brain,
    title: '睡眠剥夺洗脑',
    duration: '4-8周',
    sessions: '每日20小时',
    level: '重度',
    desc: '通过强制剥夺睡眠摧毁患者的心理防线。连续72小时不允许闭眼，一旦打瞌睡就被棍棒敲醒。在意识模糊状态下，被迫反复观看侮辱性内容、背诵洗脑手册。精神崩溃者被注射镇静剂使其半昏迷，然后继续灌输。大脑在极度疲惫中丧失判断力，只能被动接受输入的一切信息。',
    details: [
      '连续72小时不许睡觉，打瞌睡者被铁棍敲醒或泼冷水',
      '在意识模糊时被迫面对强光喇叭播放侮辱性内容',
      '背诵《认知矫正手册》，背错一个字罚站2小时',
      '精神崩溃者被注射不明药物使其半昏迷，继续灌输',
      '部分患者出现幻觉、自残倾向，被视为"疗效显现"',
    ],
    suitable: '认知固化严重、拒绝接受任何劝导的恐同症患者',
  },
  {
    icon: Syringe,
    title: '药物化学干预',
    duration: '配合其他疗法',
    sessions: '每日注射',
    level: '重度',
    desc: '每日强制注射来源不明的大剂量药物混合物，包括镇静剂、激素类药物和精神抑制药。药物导致患者体重在数周内暴增20-30公斤，内分泌失调，性功能永久性丧失。记忆力严重衰退，无法记住自己的名字。药物的目的不是治疗，而是将患者变成一具没有思想的空壳，任人摆布。',
    details: [
      '每日强制注射来源不明的大剂量药物',
      '药物导致体重暴增、内分泌失调、性功能永久性丧失',
      '记忆力严重衰退，无法记住亲人名字',
      '停药后出现剧烈戒断反应：抽搐、呕吐、幻觉',
      '部分药物被怀疑具有化学阉割作用',
    ],
    suitable: '情绪极度不稳定、伴有暴力倾向的重度恐同症患者',
  },
  {
    icon: Frown,
    title: '公开羞辱惩戒',
    duration: '1-4周',
    sessions: '每日',
    level: '中度-重度',
    desc: '当众剥光患者衣物，绑在操场中央的木桩上。由矫治人员和"表现良好"的其他患者轮流用皮带、藤条抽打臀部与背部，直至皮开肉绽。随后逼迫患者跪在所有学员面前宣读"忏悔书"，内容由其家属代写。羞辱过程被全程录像，威胁若向外界透露将公开视频。',
    details: [
      '当众剥光衣物，绑在操场木桩上示众',
      '用皮带、藤条抽打臀部与背部，直至皮开肉绽、鲜血直流',
      '逼迫跪在所有学员面前宣读家属代写的"忏悔书"',
      '羞辱过程被全程录像，作为威胁患者的把柄',
      '家属被告知这是"必要的心理突破手段"',
    ],
    suitable: '在公共场所有频繁恐同言论、以偏见为社交资本的患者',
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
            我们为不同程度的恐同症患者提供从电击到监禁的全方位强制矫治方案
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
              <div className="text-xs text-gray-500">强制干预手段</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="w-6 h-6 text-[#0C6B8A] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-800">分级诊疗</div>
              <div className="text-xs text-gray-500">按需使用</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <CheckCircle2 className="w-6 h-6 text-[#0C6B8A] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-800">循证干预</div>
              <div className="text-xs text-gray-500">科学方案</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <Eye className="w-6 h-6 text-[#0C6B8A] mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-800">全程监护</div>
              <div className="text-xs text-gray-500">24小时监控</div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment List */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          {treatments.map((t) => {
            const Icon = t.icon;
            const colorClass = levelColors[t.level.split('-')[0]] || levelColors[t.level] || 'bg-gray-100 text-gray-700';
            return (
              <div key={t.title} className="medical-card">
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-[#E8F4F8] flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-[#0C6B8A]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-xl font-bold text-gray-800">{t.title}</h2>
                        <span className={`text-xs px-2 py-0.5 rounded ${colorClass}`}>{t.level}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{t.desc}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-[#0C6B8A]" />
                      <span>疗程：{t.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Shield className="w-4 h-4 text-[#0C6B8A]" />
                      <span>频率：{t.sessions}</span>
                    </div>
                  </div>

                  <div className="bg-[#F5F7FA] rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-gray-800 text-sm mb-2">疗法要点</h3>
                    <ul className="space-y-1.5">
                      {t.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-[#0C6B8A] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#0C6B8A] font-medium shrink-0">适用人群：</span>
                    <span className="text-gray-600">{t.suitable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8F4F8] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            需要了解更多？
          </h2>
          <p className="text-gray-500 mb-6">
            我们的专家将根据您的具体情况，制定最适合的个性化矫治方案
          </p>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 bg-[#0C6B8A] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#0a5a75] transition-colors"
          >
            预约咨询
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#F5F7FA] py-8 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white border border-[#D4380D] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-[#D4380D] text-lg shrink-0">⚠</span>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-[#D4380D]">本页面描述的所有"疗法"均为真实存在过的暴行。</strong>
                历史上，同性恋者曾被强迫接受电击、监禁、强制劳动、药物注射、人格羞辱等虐待，这些行为被包装为"治疗"。
                本网站通过角色反转——将这些手段"推荐"给恐同者——来揭示这种逻辑的荒谬与残忍。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
