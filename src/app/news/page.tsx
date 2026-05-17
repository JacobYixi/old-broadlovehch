'use client';

import { useState } from 'react';
import { Calendar, Tag, ChevronRight, Search, AlertTriangle } from 'lucide-react';

type Category = 'all' | 'research' | 'event' | 'social' | 'award';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: Category;
  categoryLabel: string;
  summary: string;
  content: string;
}

const news: NewsItem[] = [
  {
    id: 1,
    title: '博爱医院发布《2024恐同症矫治白皮书》',
    date: '2024-12-15',
    category: 'research',
    categoryLabel: '研究成果',
    summary: '白皮书系统梳理了恐同症的临床分类、诊断标准和治疗方案，为行业提供了权威参考。',
    content: '本白皮书是对恐同症社会现象的系统性梳理与分析，提出了"五级分类标准"和"全周期矫治模型"作为讽刺性框架。这些框架的目的不是真的去"治疗"任何人，而是让读者体验：当偏见被包装成"科学"时，它会显得多么"权威"。白皮书特别指出，恐同症的根源往往不是对同性恋的恐惧，而是对自身不确定性的恐惧投射。',
  },
  {
    id: 2,
    title: '第七届"消除偏见"公益论坛成功举办',
    date: '2024-11-28',
    category: 'event',
    categoryLabel: '公益活动',
    summary: '来自全国各地的心理学研究者、社会工作者和康复者代表齐聚一堂，探讨恐同症矫治的新路径。',
    content: '论坛上，多位专家分享了最新的研究成果和临床经验。值得关注的是，今年首次有"康复者代表"上台分享经历，他们的故事让在场所有人深刻认识到：恐同不是不可改变的"本性"，而是一种可以通过科学方法矫治的心理障碍。论坛还宣布成立"反恐同公益联盟"。',
  },
  {
    id: 3,
    title: '研究证实：恐同程度与对自身性取向的焦虑呈正相关',
    date: '2024-10-20',
    category: 'research',
    categoryLabel: '研究成果',
    summary: '博爱研究院最新实验发现，恐同程度越高的受试者，在性取向模糊性测试中表现出的焦虑水平越高。',
    content: `1996年Adams等人的经典研究使用了内隐联想测试和皮肤电反应测量，发现恐同得分与"自身性取向不确定性焦虑"之间存在显著正相关。这一真实的研究发现被本网站引用，以说明：恐同心理背后往往隐藏着更深层的心理动因。研究负责人表示："这并不意味着所有恐同者都是'深柜'，但它确实说明，对自我的不确定感是恐同心理的重要驱动因素。"`,
  },
  {
    id: 4,
    title: '"共情之路"体验展全国巡展启动',
    date: '2024-09-15',
    category: 'social',
    categoryLabel: '社会行动',
    summary: '沉浸式体验展览让参观者"走进"性少数群体的日常生活，感受偏见带来的真实伤害。',
    content: '"共情之路"体验展通过VR技术、声音装置和互动场景，让参观者亲身体验性少数群体在学校、职场、家庭中面临的偏见和歧视。这是一个虚构的体验展概念，目的是提醒人们：偏见带来的伤害远比我们想象的更真实。在现实中，类似的沉浸式共情体验确实被证明能有效减少偏见。',
  },
  {
    id: 5,
    title: '关于框架反转的社会批判意义',
    date: '2024-08-30',
    category: 'social',
    categoryLabel: '社会行动',
    summary: '将恐同症框架化为"需要治疗的疾病"，本质上是对"同性恋需要治疗"这一错误叙事的讽刺性反转。',
    content: `"框架反转"是一种经典的社会批判策略。博爱恐同症矫治医院以独特的方式，让人们重新审视偏见的本质。通过将恐同框架化为一种需要被"治疗"的心理问题，我们巧妙地反转了长期以来将同性恋视为"疾病"的错误叙事。这种框架的逆转，本身就是一种深刻的社会批判——它让持有偏见的人体验：当自己被"病理化"时，是什么样的感受。`,
  },
  {
    id: 6,
    title: '深度心理疏导疗法更新至3.0版本',
    date: '2024-07-22',
    category: 'research',
    categoryLabel: '研究成果',
    summary: '新版疗法增加了"文化解构"模块，帮助患者识别和拆解深植于文化中的恐同叙事。',
    content: '深度心理疏导3.0版本在原有基础上新增了"文化解构"和"身份重建"两大模块。"文化解构"帮助患者识别日常生活中的恐同叙事——从影视作品中的刻板印象，到社交媒体上的隐性歧视；"身份重建"则帮助患者在摆脱恐同认知后，建立一个更加包容和自信的自我认同。',
  },
  {
    id: 7,
    title: '志愿者招募：成为"偏见终结者"',
    date: '2024-06-10',
    category: 'event',
    categoryLabel: '公益活动',
    summary: '博爱医院启动新一批志愿者培训计划，欢迎所有认同平等包容理念的人士报名参与。',
    content: '志愿者培训计划为期8周，涵盖性取向科学知识、共情沟通技巧、偏见识别与干预等内容。完成培训的志愿者将参与社区教育、线上咨询辅助、公共演讲等活动。"我们需要的不是完美的盟友，而是愿意学习和成长的人。"项目负责人表示。',
  },
  {
    id: 8,
    title: '调查报告：超过60%的恐同者从未反思过自己的态度',
    date: '2024-05-18',
    category: 'social',
    categoryLabel: '社会行动',
    summary: '博爱研究院发布最新调查，揭示恐同态度的最大特征是"无意识性"——大多数人甚至不认为自己是恐同。',
    content: `多项社会学调查一致发现，大多数恐同者从未认真反思过自己对同性恋的态度从何而来。更值得注意的是，许多持有恐同态度的人否认自己"恐同"，尽管他们的行为明显符合恐同的特征。正如研究所指出："恐同的狡猾之处在于，它让持有偏见的人认为自己只是在'表达观点'。"这个讽刺性网站的整个逻辑，正是建立在这一现实观察之上。`,
  },
];

const categoryConfig: Record<Category, { label: string; color: string }> = {
  all: { label: '全部', color: 'bg-gray-100 text-gray-600' },
  research: { label: '研究成果', color: 'bg-blue-100 text-blue-700' },
  event: { label: '公益活动', color: 'bg-green-100 text-green-700' },
  social: { label: '社会行动', color: 'bg-purple-100 text-purple-700' },
  award: { label: '荣誉表彰', color: 'bg-yellow-100 text-yellow-700' },
};

export default function NewsPage() {
  const [filter, setFilter] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredNews = news.filter((item) => {
    const matchCategory = filter === 'all' || item.category === filter;
    const matchSearch = !searchQuery || item.title.includes(searchQuery) || item.summary.includes(searchQuery);
    return matchCategory && matchSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">医院动态</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            了解博爱恐同症矫治医院的最新研究成果、公益活动和行业动态
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {(Object.entries(categoryConfig) as [Category, { label: string; color: string }][]).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                    filter === key
                      ? 'bg-[#0C6B8A] text-white'
                      : `${config.color} hover:opacity-80`
                  }`}
                >
                  {config.label}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索动态..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0C6B8A]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="bg-[#F5F7FA] py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          {filteredNews.length === 0 ? (
            <div className="text-center py-12 text-gray-400">没有找到匹配的动态</div>
          ) : (
            filteredNews.map((item) => {
              const isExpanded = expandedId === item.id;
              const catConfig = categoryConfig[item.category];

              return (
                <div key={item.id} className="medical-card overflow-hidden">
                  <button
                    className="w-full text-left p-6"
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className={`text-xs px-2 py-0.5 rounded ${catConfig.color}`}>
                            {catConfig.label}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.date}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.summary}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </div>
                  </button>
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t pt-4">
                      <p className="text-sm text-gray-600 leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#FFF7E6] border-b border-[#FFE58F]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#D4380D] shrink-0 mt-0.5" />
            <div className="text-sm text-[#874D00]">
              <strong>声明：</strong>本网站为讽刺性艺术项目，所有新闻动态均为虚构。但其中引用的心理学概念和研究发现（如恐同与自身性取向焦虑的相关性）有真实的学术基础。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
