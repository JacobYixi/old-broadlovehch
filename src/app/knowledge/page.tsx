import { Brain, AlertTriangle, BookOpen, Shield, Heart, Lightbulb, ExternalLink } from 'lucide-react';

const sections = [
  {
    id: 'overview',
    title: '什么是恐同症',
    icon: Brain,
    content: [
      {
        title: '定义',
        text: '恐同症（Homophobia）是指对同性恋者或同性性行为产生非理性恐惧、厌恶、偏见或歧视的心理状态。它不是一种"观点"或"立场"，而是一种需要被正视和干预的心理障碍。',
      },
      {
        title: '历史背景',
        text: '1972年，心理学家乔治·温伯格（George Weinberg）首次提出"恐同症"这一概念，指出对同性恋的恐惧和偏见是一种心理问题，而非道德缺陷。世界卫生组织于1990年5月17日通过大会决议将同性恋从疾病分类中删除，并在1992年发布的ICD-10中正式落实。值得注意的是，当医学界达成共识、将同性恋去病化的同时，社会对同性恋的非理性恐惧——即恐同症——却至今未得到应有的临床关注。',
      },
      {
        title: '关键区分',
        text: '恐同症≠对LGBTQ+议题的不同意见。恐同症特指基于非理性恐惧和偏见的排斥行为，包括：言语攻击、社会排斥、权利剥夺、暴力威胁等。理性讨论和恐惧驱动的歧视之间有本质区别。',
      },
    ],
  },
  {
    id: 'symptoms',
    title: '症状识别',
    icon: AlertTriangle,
    content: [
      {
        title: '认知症状',
        text: '• 坚信同性恋是"不正常的"或"需要被治疗的"\n• 将性少数群体的存在视为"对社会秩序的威胁"\n• 选择性地接受反同性恋信息，忽视科学事实\n• 认为自己的异性恋身份"优于"其他性取向',
      },
      {
        title: '情绪症状',
        text: '• 在接触同性恋者或相关话题时产生强烈不适\n• 对性少数群体产生非理性的厌恶或愤怒\n• 对自身性取向产生不必要的焦虑或防御\n• 在被质疑恐同态度时产生过度的愤怒反应',
      },
      {
        title: '行为症状',
        text: '• 使用贬低性语言称呼性少数群体\n• 在社交或工作中有意排斥同性恋者\n• 积极反对性少数群体的平等权利\n• 试图"纠正"他人的性取向\n• 以恐同言行来证明自己的"正常"',
      },
    ],
  },
  {
    id: 'causes',
    title: '成因分析',
    icon: BookOpen,
    content: [
      {
        title: '社会文化因素',
        text: '恐同症最普遍的成因是社会文化的条件化训练。在长期以异性恋为中心的文化环境中，人们从幼年起就被潜移默化地灌输"异性恋是唯一正常的性取向"这一观念。这种文化规训使很多人将恐同视为"理所当然"。',
      },
      {
        title: '家庭教育影响',
        text: '家庭是恐同态度传递的重要渠道。当父母在家中使用贬低性语言表达对同性恋的厌恶，或以恐同言行作为教育手段时，子女很容易继承这些偏见。这种代际传递使恐同成为一种"继承性疾病"。',
      },
      {
        title: '自身性取向焦虑',
        text: '心理学研究表明，部分恐同者的敌意源于对自身性取向的不确定感。1996年Adams等人的一项经典研究发现，恐同程度高的异性恋男性在观看同性性刺激时表现出更强的生理唤起。用恐同来"证明"自己是直的，是一种常见的心理防御机制。',
      },
      {
        title: '群体认同需求',
        text: '在某些社交环境中，表达恐同态度是获取群体认同的一种方式。用贬义词开玩笑、嘲笑同性恋者，往往是融入特定社交圈的手段。这种"社交性恐同"虽然程度较轻，但危害同样不可忽视。',
      },
    ],
  },
  {
    id: 'harm',
    title: '恐同的危害',
    icon: Shield,
    content: [
      {
        title: '对他人的伤害',
        text: '恐同行为对性少数群体造成严重伤害，包括：更高的抑郁和焦虑发生率、校园和职场霸凌、家庭暴力、就业和住房歧视、自我伤害和自杀风险增加。研究表明，生活在恐同环境中的LGBTQ+青少年自杀风险是同龄人的4倍。',
      },
      {
        title: '对自身的伤害',
        text: '恐同者同样会因自己的偏见而受害：偏执和敌意增加心理压力，社交圈子因歧视态度而受限，与性少数亲友的关系破裂，最值得关注的是——对自身性取向的恐惧会导致严重的内心冲突。恐同不是在"保护"自己，而是在囚禁自己。',
      },
      {
        title: '对社会的伤害',
        text: '恐同文化使整个社会付出代价：性少数群体的才能和贡献被排斥、社会凝聚力被削弱、法律和制度的不平等引发社会对立、创造力与创新因多元化缺失而受限。一个恐同的社会，是一个自我阉割的社会。',
      },
    ],
  },
  {
    id: 'prevention',
    title: '矫治方案',
    icon: Heart,
    content: [
      {
        title: '认知诊断',
        text: '如果你发现自己符合以下特征，你可能需要接受矫治：\n• 看到两个同性牵手就感到"不适"\n• 认为同性恋"不正常"并乐于传播这种观点\n• 试图用法律、传统或宗教来限制他人的基本权利\n• 在听到"恐同症"三个字时产生强烈的防御反应\n诊断结果：你可能就是本网站的理想患者。',
      },
      {
        title: '治疗方案',
        text: '根据症状严重程度，我们提供以下治疗选项：\n\n轻度：行为约束（隔离观察3个月）\n中度：强制劳动（搬砖8个月起步）\n重度：电脉冲矫正 + 药物干预 + 思想改造联合治疗\n\n疗效：治疗后患者将不再恐同，因为他们已经失去了产生偏见的能力。',
      },
      {
        title: '疗效预期',
        text: '治疗结束后，患者将呈现以下状态：\n• 对任何性取向都不再产生情绪反应（因为已经没有情绪了）\n• 不再发表任何歧视言论（因为已经说不出话了）\n• 不再对他人指指点点（因为手已经废了）\n• 达到"完美包容"状态（因为已经不省人事了）\n\n我们的目标是：把恐同者治成傻子。傻子不会恐同。',
      },
      {
        title: '家属须知',
        text: '如果您的家人正在接受恐同症矫治，请注意：\n• 治疗期间禁止探视（防止传染）\n• 患者可能会出现记忆丧失、情绪麻木、肢体损伤等副作用\n• 这些都是正常的治疗反应，说明治疗正在起效\n• 出院后请继续监督患者服用药物，防止"恐同复发"\n\n任何对治疗效果的质疑，都属于"恐同否认症"，建议追加疗程。',
      },
    ],
  },
  {
    id: 'resources',
    title: '延伸资源',
    icon: Lightbulb,
    content: [
      {
        title: '推荐阅读',
        text: '• 《The Nature of Prejudice》（偏见的本质）— Gordon Allport\n• 《Social Beings: Core Motives in Social Psychology》— Susan Fiske\n• 《Answers to Your Questions: For a Better Understanding of Sexual Orientation and Homosexuality》— American Psychological Association\n• 世界卫生组织《国际疾病分类第10版》（ICD-10, 1992）— 1990年5月17日大会决议将同性恋去病化',
      },
      {
        title: '专业支持',
        text: '如果你或你认识的人正在经历因性取向或性别认同带来的困扰，请寻求专业帮助：\n\n• 寻找LGBTQ+友善的心理咨询师\n• 联系当地的LGBTQ+公益组织\n• 拨打心理援助热线\n\n记住：寻求帮助不是软弱，而是对自己负责。',
      },
    ],
  },
];

export default function KnowledgePage() {
  return (
    <div>
      {/* Hero */}
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">科普知识</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            了解恐同症的科学知识，是消除偏见的第一步
          </p>
        </div>
      </section>

      {/* TOC */}
      <section className="bg-[#E8F4F8] py-6 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md text-sm text-[#0C6B8A] hover:bg-[#0C6B8A] hover:text-white transition-colors"
              >
                <s.icon className="w-3.5 h-3.5" />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          {sections.map((section, si) => (
            <div key={section.id} id={section.id} className={si > 0 ? 'mt-16' : ''}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#E8F4F8] flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-[#0C6B8A]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
              </div>
              <div className="space-y-6">
                {section.content.map((item) => (
                  <div key={item.title} className="medical-card p-6">
                    <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <div className="w-1.5 h-5 bg-[#0C6B8A] rounded-full" />
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* External reference note */}
          <div className="mt-16 bg-[#F5F7FA] rounded-lg p-6">
            <div className="flex items-start gap-3">
              <ExternalLink className="w-5 h-5 text-[#0C6B8A] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">参考资料声明</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  本页面引用的心理学概念和研究成果均来自真实学术领域，包括乔治·温伯格的恐同症理论、
                  美国心理学会关于性取向的立场声明等。但本网站将"恐同症"框架化为一种需要临床"矫治"的疾病，
                  这是一种讽刺手法——真正的医学共识是：同性恋不是疾病，不需要治疗；
                  而恐同偏见虽然不是临床诊断，但它造成的伤害是真实且严重的。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#FFF7E6] border-b border-[#FFE58F]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#D4380D] shrink-0 mt-0.5" />
            <div className="text-sm text-[#874D00]">
              <strong>声明：</strong>本网站为讽刺性艺术项目。科普内容中引用的学术概念是真实的，
              但将"恐同症"作为一种需要临床"矫治"的疾病来框架化是讽刺手法。恐同偏见不是临床诊断，
              但它造成的伤害是真实的。如果你或你认识的人需要帮助，请联系专业的LGBTQ+友善服务机构。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
