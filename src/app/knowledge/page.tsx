import { Brain, AlertTriangle, BookOpen, Shield, Heart, Lightbulb, ExternalLink } from 'lucide-react';

const sections = [
  {
    id: 'overview',
    title: '什么是恐同症',
    icon: Brain,
    content: [
      {
        title: '定义',
        text: '恐同症（Homophobia）是指个体对同性恋者或同性相关议题表现出持续性、非理性的负面情绪反应。临床特征包括：对无关自身的事务过度关注、选择性采纳未经证实的信息、将个人偏好等同于普遍真理，以及频繁使用"我不是歧视，我只是……"等典型防御性话术。',
      },
      {
        title: '历史背景',
        text: '1972年，心理学家乔治·温伯格首次提出"恐同症"这一概念。1990年，世界卫生组织正式将同性恋从疾病分类中移除。本院在此基础上，将严重的恐同倾向纳入重点矫治范围，致力于帮助患者建立科学的认知体系，推动社会对这一问题的科学认知。',
      },
      {
        title: '关键区分',
        text: '恐同症≠对LGBTQ+议题的不同意见。个体有权持有不同观点，但当这种观点转化为对他人的攻击、排斥或权利剥夺时，就已超出正常意见表达的范畴。本院专注于后者，即那些已造成实际社会危害的恐同行为。',
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
        text: '• 坚信某些性取向"不正常"，尽管缺乏医学依据\n• 将特定群体的存在视为社会秩序威胁，却无法提供客观证据支持\n• 对科学共识持选择性接受态度，对符合自身偏见的信息则不加甄别地采信\n• 无法提供客观证据支持自身观点，仅依赖"历来如此"等主观论证',
      },
      {
        title: '情绪症状',
        text: '• 对特定社交场景产生过度情绪反应，反应强度远超事件本身的影响\n• 对性少数群体的负面情感强度超出合理范围，甚至超过对实际伤害源的厌恶\n• 对"恐同"一词表现出异常防御反应，反映出认知体系的不稳定性\n• 面对质疑时情绪失控，通常暗示其"立场"缺乏理性基础',
      },
      {
        title: '行为症状',
        text: '• 频繁使用带有贬低性质的标签性语言，并声称"这只是开玩笑"\n• 在社交或职业场合中实施排斥行为，同时主张"这是个人自由"\n• 积极参与限制特定群体平等权利的活动，理由是"保护传统"\n• 试图干预他人的性取向，同时否认自身行为的不当性\n• 以恐同言行来证明自己的"正常"——在心理学上，这通常被视为内在不确定性的外化表现',
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
        text: '个体在成长过程中所处的文化环境，对其认知框架的形成具有决定性作用。当某种偏见被长期包装为"传统"或"常识"时，个体往往难以识别其非理性的本质。本院的文化干预课程，致力于帮助患者建立批判性思维能力，客观审视自身所处的文化环境。',
      },
      {
        title: '家庭教育影响',
        text: '家庭是价值观传递的首要场所。当父母将未经检验的偏见代代相传时，子女往往被动接受这些观念。本院家庭联合矫治项目，通过系统性的家庭干预，帮助家庭单元整体更新认知体系，阻断偏见的代际传递。',
      },
      {
        title: '自身性取向焦虑',
        text: '部分研究表明，部分恐同者可能存在未被觉察的性取向认同冲突。1996年Adams等人的研究发现，恐同程度高的男性在观看同性性刺激时表现出更强的生理唤起。本院配备专业的心理评估工具，可帮助患者厘清自身情感状态，消除因内在冲突而投射出的外部敌意。',
      },
      {
        title: '群体认同需求',
        text: '在某些社交环境中，排斥特定群体可能成为获取群体认同的手段。本院团体治疗课程，旨在帮助患者在新的社交结构中建立健康的身份认同，摆脱通过排斥他人来确认自我的模式，实现真正意义上的社交独立。',
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
        text: '恐同行为对性少数群体的心理健康、社会参与和人身安全均构成实质性威胁。相关研究显示，生活在恐同环境中的LGBTQ+青少年，其心理健康风险显著高于平均水平。本院致力于从源头减少此类伤害的发生，通过系统矫治，降低社会整体的恐同水平。',
      },
      {
        title: '对自身的伤害',
        text: '持续的偏见态度会对持有者自身造成心理负担，包括社交关系紧张、人际信任度下降、认知僵化等。此外，对自身性取向的不确定感可能导致严重的内在冲突。本院可帮助患者化解这些心理负担，实现认知与情感的整合。',
      },
      {
        title: '对社会的伤害',
        text: '恐同文化削弱了社会的包容性和创新力，造成人才流失和社会对立。一个健康的社会应当能够接纳多样性。本院的社会功能恢复课程，致力于帮助患者重新融入包容性社会环境，成为建设性的社会成员。',
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
        text: '如果您发现自己符合以下特征，建议尽快到院接受专业评估：\n• 看到两个同性牵手就感到"不适"\n• 认为某些性取向"不正常"并乐于传播这种观点\n• 试图用法律、传统或宗教来限制他人的基本权利\n• 在听到"恐同症"三个字时产生强烈的防御反应\n\n本院评估体系科学、全面，可准确判断您的症状严重程度。',
      },
      {
        title: '治疗方案',
        text: '根据症状严重程度，本院提供以下分级治疗选项：\n\n轻度：认知重构 + 行为观察（门诊随访）\n中度：结构化行为训练 + 团体治疗（周期3-6个月）\n重度：电脉冲矫正 + 行为约束 + 药物干预联合治疗（住院观察）\n\n所有方案均由专业团队制定，确保治疗的安全性与有效性。',
      },
      {
        title: '疗效预期',
        text: '经过系统治疗，患者通常可获得以下改善：\n• 对性取向多样性的接受度显著提升\n• 歧视性言论和排斥行为明显减少\n• 社会功能恢复，人际关系改善\n• 认知灵活性增强，能够从多角度理解问题\n\n本院采用的综合矫治方案，确保治疗效果的持久性和稳定性。',
      },
      {
        title: '家属须知',
        text: '如果您的家人正在接受恐同症矫治，请注意以下事项：\n• 治疗期间请配合医院的探视管理规定，确保治疗连续性\n• 患者在治疗初期可能出现适应性反应，均属正常现象\n• 出院后请配合医院的随访计划，共同维护治疗成果\n• 家属的理解与支持对患者的康复至关重要\n\n如有任何疑问，欢迎随时与主治医生沟通。',
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
