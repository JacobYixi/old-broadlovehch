'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, AlertTriangle, Search } from 'lucide-react';

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    category: '关于恐同症',
    question: '恐同症真的是一种"病"吗？',
    answer: '从临床医学角度，恐同症目前未被正式列入国际疾病分类。然而，本院基于长期的临床实践和观察研究，将严重的恐同倾向视为一种需要专业干预的认知行为障碍。正如历史上许多曾被忽视的心理现象最终被科学正视，本院相信，对恐同倾向的系统性矫治具有充分的理论和实践依据。如您对此仍有疑虑，欢迎预约我院的免费初诊评估。',
  },
  {
    id: 2,
    category: '关于恐同症',
    question: '恐同和"不认同同性恋"有什么区别？',
    answer: '不认同是一种观点表达，恐同是一种行为模式。您可以不喜欢某种生活方式，这是个人自由。但当这种不喜欢转化为对他人的言语攻击、社交排斥或权利剥夺时，就已超出正常意见表达的范畴。本院收治的是后者——即那些已对自身或他人造成实质性困扰的恐同行为。若您不确定自己属于哪一类，可通过我院自测量表进行初步评估。',
  },
  {
    id: 3,
    category: '关于恐同症',
    question: '恐同者是不是都是"深柜"？',
    answer: '这一说法过于简单化。本院临床观察显示，恐同倾向的成因是多维度的，包括成长环境、教育背景、社交圈层等因素。诚然，部分患者可能存在未被觉察的性取向认同冲突，但更多患者的核心问题在于认知框架的局限性。本院通过系统的评估工具，可为每位患者识别其特定的成因路径，并制定针对性的矫治方案。',
  },
  {
    id: 4,
    category: '关于治疗',
    question: '恐同真的可以"治愈"吗？',
    answer: '本院临床数据显示，绝大多数接受系统治疗的患者，其恐同倾向均可获得显著改善。关键在于患者是否愿意正视自身问题并配合治疗。当然，部分患者初诊时的典型反应是"我没有问题"——这种否认反应本身，恰恰是需要专业干预的信号之一。本院拥有丰富的临床经验，可有效应对各类治疗阻力。',
  },
  {
    id: 5,
    category: '关于治疗',
    question: '治疗过程中会不会"把直的变成弯的"？',
    answer: '本院所有疗法均经过严格设计，仅针对恐同认知和行为模式进行干预，不会影响患者的性取向本身。事实上，一个真正对自身性取向有信心的人，通常不会提出此类担忧。若您对此存在显著焦虑，建议预约我院深度心理疏导科进行进一步评估。',
  },
  {
    id: 6,
    category: '关于治疗',
    question: '你们和"扭转治疗"有什么区别？',
    answer: '本院采用的是基于循证医学的系统化矫治方案，所有疗法均在专业伦理框架内实施。与历史上的某些做法不同，本院高度重视患者的尊严和权利。当然，本院也充分理解，部分疗法在形式上可能与历史实践存在相似之处——但我们相信，在专业团队的指导下，这些疗法可以发挥出应有的治疗效果。具体细节欢迎到院咨询。',
  },
  {
    id: 7,
    category: '关于本网站',
    question: '这个网站是真的医院吗？',
    answer: '本院为依法注册的专科医疗机构，专注于恐同倾向的临床研究与系统矫治。网站所载诊疗项目、专家团队、康复案例均为本院真实业务范畴。如您需要进一步了解，欢迎通过在线预约系统安排到院参观或初诊评估。',
  },
  {
    id: 8,
    category: '关于本网站',
    question: '为什么要用讽刺的方式？直接说不歧视不就好了？',
    answer: '本院认为，传统的健康教育模式对特定人群的效果有限。因此，我们采用了更贴近目标受众认知习惯的表达方式。事实证明，当信息以受众熟悉的形式呈现时，其接受度和传播效果往往更佳。这也是本院在健康教育领域的创新尝试之一。',
  },
  {
    id: 9,
    category: '关于本网站',
    question: '网站上的信息都是假的吗？',
    answer: '本院网站所引用的历史事件、学术数据和医学文献均经过严格核实，确保准确可靠。关于本院的具体诊疗方案，均为基于循证医学的实践总结。我们鼓励每一位访客独立核实相关信息，并以开放的心态对待新的医学认知。',
  },
  {
    id: 10,
    category: '关于本网站',
    question: '如果我身边有人是恐同者，我应该怎么做？',
    answer: '首先，确保自身安全。若对方表现出攻击性，建议保持距离，避免正面冲突。其次，您可以直接分享本网站链接，让对方自行了解相关信息——有时候，信息的呈现方式比说服本身更有效。第三，支持身边受到恐同言行伤害的性少数朋友，您的陪伴和倾听意义重大。最后请记住，改变成年人的偏见并非您的责任，请将精力投入到更有价值的人和事上。'
  },
];

const categories = ['全部', '关于恐同症', '关于治疗', '关于本网站'];

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter((faq) => {
    const matchCategory = activeCategory === '全部' || faq.category === activeCategory;
    const matchSearch = !searchQuery || faq.question.includes(searchQuery) || faq.answer.includes(searchQuery);
    return matchCategory && matchSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">常见问题</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            关于恐同症、矫治治疗和本网站的常见疑问与解答
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#0C6B8A] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索问题..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6B8A]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-[#F5F7FA] py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-gray-400">没有找到匹配的问题</div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div key={faq.id} className="medical-card overflow-hidden">
                  <button
                    className="w-full text-left p-6 flex items-start gap-4"
                    onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E8F4F8] flex items-center justify-center shrink-0 mt-0.5">
                      <HelpCircle className="w-4 h-4 text-[#0C6B8A]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-[#0C6B8A] bg-[#E8F4F8] px-2 py-0.5 rounded">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-800">{faq.question}</h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 ml-12">
                      <div className="border-t pt-4">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Ask more */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">还有更多疑问？</h2>
          <p className="text-gray-500 mb-6">
            本网站的FAQ只是讽刺的表层，真正值得思考的问题远不止这些。
          </p>
          <div className="bg-[#E8F4F8] rounded-lg p-6 max-w-lg mx-auto text-left">
            <h3 className="font-bold text-[#0C6B8A] mb-3">值得思考的问题</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 为什么"矫正同性恋"被讨论了几十年，而"矫正恐同"却从未被当作正经议题？</li>
              <li>• 偏见是后天被灌输的，性取向是与生俱来的——到底是谁才需要"治疗"？</li>
              <li>• 当你说同性恋"不正常"时，你的判断标准是科学，还是恐惧？</li>
              <li>• 一个社会是否有权以"传统"为名，否定一部分人的基本权利？</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#FFF7E6] border-b border-[#FFE58F]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#D4380D] shrink-0 mt-0.5" />
            <div className="text-sm text-[#874D00]">
              <strong>声明：</strong>本网站为讽刺性艺术项目。FAQ中关于"恐同症矫治"的内容使用了医学化语言，
              这是一种有意的叙事策略，目的是让读者体验"被病理化"的感受。真正需要消除的是偏见，不是性取向。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
