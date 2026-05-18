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
    answer: '对同性恋的恐惧和歧视（homophobia）确实与偏执、社交焦虑等心理问题相关，是一种不健康的心理模式。但它不是传统意义上需要吃药动手术的"病"。在这个网站上，我们把恐同症描述成需要"治疗"的疾病，但这不是在说它真的是一种病，而是想让你注意到一个更荒谬的现实：几十年前同性恋被当成病来治，无数人因此受到伤害。我们想让你反过来想一想——需要被改变的从来不是所谓"不正常"的性取向，而是对性少数群体的恐惧和偏见。',
  },
  {
    id: 2,
    category: '关于恐同症',
    question: '恐同和"不认同同性恋"有什么区别？',
    answer: '不认同是一种个人态度，而恐同是一种基于非理性恐惧的偏见行为。你可以不认同某种生活方式，但当你因此去限制他人的权利、对他人进行言语攻击或社会排斥时，这就超出了"个人态度"的范畴，成为了偏见驱动的歧视行为。关键的区别在于：不认同是"我不选择这样生活"，恐同是"你不应该这样生活"。',
  },
  {
    id: 3,
    category: '关于恐同症',
    question: '恐同者是不是都是"深柜"？',
    answer: '不是。虽然1996年Adams等人的一项经典研究发现，恐同程度高的异性恋男性在观看同性性刺激时表现出更强的生理唤起，但这并不意味着所有恐同者都在压抑自身的同性恋倾向。恐同的成因是多元的：社会文化规训、家庭教育、群体认同需求等都是重要因素。将恐同简单归结为"深柜"，反而忽略了偏见问题的复杂性。',
  },
  {
    id: 4,
    category: '关于治疗',
    question: '恐同真的可以"治愈"吗？',
    answer: '偏见是可以被改变的——这一点有大量的心理学研究支持。通过教育、接触和共情培养，人们完全可以从恐同的认知和行为模式中走出来。但我们用"治愈"这个词本身就是讽刺——因为偏见不是疾病，它是一种习得的态度。我们选择用医学化的语言来描述恐同，是为了让人们意识到：当你用"疾病"的框架来看待同性恋时，这个框架反过来也可以用来审视你的偏见。',
  },
  {
    id: 5,
    category: '关于治疗',
    question: '治疗过程中会不会"把直的变成弯的"？',
    answer: '这可能是恐同者最大的恐惧之一，也是最荒谬的恐惧之一。性取向不是可以被"改变"的东西——无论是把同性恋"纠正"为异性恋，还是把异性恋"变成"同性恋，都不符合科学事实。我们的"治疗"针对的是偏见和恐惧，而不是性取向本身。消除恐同不会改变你的性取向，只会让你更加接纳真实的自己。',
  },
  {
    id: 6,
    category: '关于治疗',
    question: '你们和"扭转治疗"有什么区别？',
    answer: '截然相反。"扭转治疗"（又称"性取向扭转疗法"）试图改变同性恋者的性取向，这已被全球主流医学组织认定为有害且无效的伪科学。我们的"恐同症矫治"是一个讽刺性概念，目标是改变偏见态度，而不是改变性取向。讽刺的妙处在于：当我们把"矫治"的矛头从同性恋者转向恐同者时，你才会意识到"矫治"这个概念本身有多么荒谬——无论对谁使用。',
  },
  {
    id: 7,
    category: '关于本网站',
    question: '这个网站是真的医院吗？',
    answer: '不是。本网站是一个讽刺性艺术项目，所有机构、人物、案例、数据均为虚构。我们使用医疗机构的视觉语言和叙事框架，是为了通过"反转"来揭示一个事实：当社会把同性恋框架化为"疾病"时，这种框架化的暴力本身就是最大的"病症"。',
  },
  {
    id: 8,
    category: '关于本网站',
    question: '为什么要用讽刺的方式？直接说不歧视不就好了？',
    answer: '直接说"不要歧视"很重要，但往往不够有力。讽刺的力量在于，它能让持有偏见的人站在"被审视"的位置上——当你发现自己被当作"患者"来"诊断"时，你可能会开始理解性少数群体一直以来的感受。讽刺不是为了羞辱，而是为了产生共情。当逻辑说服不了偏见时，也许体验能。',
  },
  {
    id: 9,
    category: '关于本网站',
    question: '网站上的信息都是假的吗？',
    answer: '机构、人物、案例、数据是虚构的，但其中引用的心理学概念和学术发现是真实的。例如，乔治·温伯格确实是"恐同症"概念的提出者；Adams等人1996年的研究确实发现了恐同与自身性取向焦虑的相关性；WHO于1990年5月17日通过大会决议、1992年在ICD-10中将同性恋从疾病分类中正式删除。我们希望读者在感受讽刺的同时，也能获取真实的知识。',
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
