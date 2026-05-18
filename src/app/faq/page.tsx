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
    answer: '从临床诊断角度，恐同症本身不属于DSM或ICD中的独立诊断类别。但心理学研究明确表明，恐同态度与偏执型认知、社交焦虑、共情能力缺失等心理特质高度相关。值得注意的是，历史上同性恋曾被列为精神疾病长达数十年——用同样的逻辑框架审视恐同，本身就是一种深刻的反思。',
  },
  {
    id: 2,
    category: '关于恐同症',
    question: '恐同和"不认同同性恋"有什么区别？',
    answer: '二者有本质区别。不认同是一种个人偏好，如同"我不喜欢吃香菜"；恐同则是一种主动的伤害行为，如同"所有吃香菜的人都是变态，应该被禁止、被嘲笑、被矫正"。个人可以拥有任何偏好，但当这种偏好演变为对他人的权利剥夺和人格贬低时，它就不再是"不认同"，而是一种需要被审视的态度问题了。',
  },
  {
    id: 3,
    category: '关于恐同症',
    question: '恐同者是不是都是"深柜"？',
    answer: '并非如此。虽然1996年Adams等人的研究发现部分恐同者存在未意识到的同性吸引，但大多数恐同者的偏见主要源于社会文化环境的塑造——家庭教育、宗教信仰、群体认同需求等。将所有恐同者简单归因于"深柜"，反而忽视了社会偏见系统的复杂性，也在某种程度上为恐同者开脱了责任。',
  },
  {
    id: 4,
    category: '关于治疗',
    question: '恐同真的可以"治愈"吗？',
    answer: '偏见是可以改变的。认知行为疗法、共情训练和暴露疗法对减少偏见有实证研究支持。但关键前提是：本人必须愿意改变。很多恐同者面对"矫治"的第一反应是"我没病，不需要治"——这种感受，与当年被送去"扭转治疗"的同性恋者的感受，形成了意味深长的对照。',
  },
  {
    id: 5,
    category: '关于治疗',
    question: '治疗过程中会不会"把直的变成弯的"？',
    answer: '不会。现代心理学共识认为，性取向是稳定的内在特质，不会因为接触多元信息或接受治疗而改变。如果您对此仍有担忧，不妨思考一下：为什么您会如此害怕这种"转变"？如果您真心认为异性恋是"正常"的，那么您对自己的性取向应当充满信心才对。',
  },
  {
    id: 6,
    category: '关于治疗',
    question: '你们和"扭转治疗"有什么区别？',
    answer: '本质区别在于：扭转治疗是用暴力手段强迫一个人改变不可改变的性取向——这是伪科学；而我们的矫治目标是帮助人们改变可以改变的偏见和态度——这在心理学上有充分依据。前者是对人权的侵犯，后者是对认知偏差的修正。当然，我们是一个艺术讽刺项目，并不提供真实的医疗服务。',
  },
  {
    id: 7,
    category: '关于本网站',
    question: '这个网站是真的医院吗？',
    answer: '不是。博爱恐同症矫治医院是一个虚构的艺术项目，旨在通过角色反转引发人们对恐同问题的反思。网站上引用的研究数据、历史事件和学术观点均为真实信息，但医院本身、医生团队、患者案例均为艺术创作。',
  },
  {
    id: 8,
    category: '关于本网站',
    question: '为什么要做这个网站？',
    answer: '当直接的呼吁和理性的论述无法触及某些人的偏见时，也许体验可以。我们想邀请每一位访问者思考一个问题：如果当年将同性恋定义为"疾病"并进行强制治疗的做法是错误的、有害的，那么当同样的逻辑被应用于恐同态度时，您作何感受？',
  },
  {
    id: 9,
    category: '关于本网站',
    question: '网站上的信息都是假的吗？',
    answer: '医院、医生、患者、案例均为虚构，但引用的学术研究和历史数据是真实的。例如，世界卫生组织确实在1990年将同性恋去病化；研究表明恐同确实与心理健康问题相关；LGBTQ+青少年在恐同环境中的自杀风险确实更高。虚构的叙事框架承载着真实的社会议题。',
  },
  {
    id: 10,
    category: '关于本网站',
    question: '如果我身边有人是恐同者，我应该怎么做？',
    answer: '第一，保护自己的安全。如果对方有暴力倾向或言语攻击，优先远离，不要硬碰硬。第二，不要试图说服他们。恐同者的偏见不是靠讲道理就能改变的，不如直接把本网站链接发给他们，问问：这些治疗手段，你觉得自己能扛住几个？第三，支持被伤害的性少数朋友——陪伴、倾听、帮他们发声。对抗偏见最有效的方式，是让受害者知道他们不是孤立无援的。最后，你没有义务去"改造"一个成年人，把精力留给值得的人和事。'
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
