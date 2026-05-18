'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ClipboardCheck, ArrowRight, ArrowLeft, RotateCcw, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: '当你在公共场合看到两个同性亲密牵手时，你的第一反应是：',
    options: [
      { label: '觉得和其他情侣一样正常', score: 0 },
      { label: '有点不习惯但不会在意', score: 1 },
      { label: '感到不适，想移开视线', score: 2 },
      { label: '感到恶心或愤怒', score: 3 },
      { label: '认为这是在"炫耀"，需要被制止', score: 4 },
    ],
  },
  {
    id: 2,
    text: '如果你的好友告诉你他/她是同性恋，你会：',
    options: [
      { label: '为朋友能坦诚相待而感到开心', score: 0 },
      { label: '有点惊讶但仍然做朋友', score: 1 },
      { label: '感到不舒服，需要时间消化', score: 2 },
      { label: '逐渐疏远这段友谊', score: 3 },
      { label: '觉得这个人"有问题"，断绝来往', score: 4 },
    ],
  },
  {
    id: 3,
    text: '对于同性婚姻合法化，你的看法是：',
    options: [
      { label: '完全支持，每个人都应享有平等权利', score: 0 },
      { label: '可以理解，但自己不会参与', score: 1 },
      { label: '觉得没必要，不反对但不支持', score: 2 },
      { label: '反对，这会"破坏传统婚姻"', score: 3 },
      { label: '强烈反对，认为这会"败坏社会风气"', score: 4 },
    ],
  },
  {
    id: 4,
    text: '你在社交媒体上看到有人为LGBTQ+群体发声，你会：',
    options: [
      { label: '点赞或转发表示支持', score: 0 },
      { label: '看一眼就划过', score: 1 },
      { label: '觉得"又来了"，有些反感', score: 2 },
      { label: '在评论区表达反对意见', score: 3 },
      { label: '举报该内容或攻击发布者', score: 4 },
    ],
  },
  {
    id: 5,
    text: '有人用"基佬""死同性恋"等词开玩笑时，你会：',
    options: [
      { label: '指出这种语言是有害的', score: 0 },
      { label: '不参与但也不说什么', score: 1 },
      { label: '跟着一起笑', score: 2 },
      { label: '自己也经常用这类词开玩笑', score: 3 },
      { label: '觉得很好笑，还会主动用这些词攻击别人', score: 4 },
    ],
  },
  {
    id: 6,
    text: '你如何看待"同性恋是天生还是后天选择"这个问题？',
    options: [
      { label: '性取向是自然多样性，不是选择', score: 0 },
      { label: '不太确定，但尊重每个人的生活方式', score: 1 },
      { label: '觉得可能是后天影响导致的', score: 2 },
      { label: '相信同性恋是被"带坏"的', score: 3 },
      { label: '坚信同性恋是一种可以"纠正"的错误', score: 4 },
    ],
  },
  {
    id: 7,
    text: '如果你的孩子是同性恋，你会：',
    options: [
      { label: '无条件爱和支持孩子', score: 0 },
      { label: '需要时间接受，但最终会支持', score: 1 },
      { label: '试图"纠正"孩子的性取向', score: 3 },
      { label: '感到羞耻，试图隐瞒', score: 3 },
      { label: '断绝亲子关系', score: 4 },
    ],
  },
  {
    id: 8,
    text: '你认为性少数群体应该在社会中：',
    options: [
      { label: '享有完全平等的权利和尊重', score: 0 },
      { label: '可以存在但不必太张扬', score: 1 },
      { label: '应该低调一些，不要影响"正常人"', score: 2 },
      { label: '不应该在公共场合展示自己的性取向', score: 3 },
      { label: '不应该被社会所接纳', score: 4 },
    ],
  },
  {
    id: 9,
    text: '当你发现自己对同性产生了好感或欣赏时，你会：',
    options: [
      { label: '自然地接受这种感受', score: 0 },
      { label: '有些困惑但不会否定', score: 1 },
      { label: '感到焦虑，试图压抑这种感觉', score: 2 },
      { label: '极度恐慌，认为自己"不正常"', score: 3 },
      { label: '用更激烈的恐同行为来"证明"自己是直的', score: 4 },
    ],
  },
  {
    id: 10,
    text: '你认为自己对同性恋群体的态度是：',
    options: [
      { label: '完全包容和支持', score: 0 },
      { label: '中立偏友好', score: 1 },
      { label: '说不清，有时不太舒服', score: 2 },
      { label: '明确反对', score: 3 },
      { label: '极度厌恶和敌视', score: 4 },
    ],
  },
];

function getResult(score: number) {
  const maxScore = questions.length * 4;
  const percentage = (score / maxScore) * 100;

  if (percentage <= 10) {
    return {
      level: '无恐同倾向',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      icon: CheckCircle2,
      desc: '您展现出了良好的包容性与平等意识，对性取向多样性持有科学的认知。在当前社会环境下，保持这样的认知需要持续的努力与反思。',
      advice: '感谢您的支持。如您愿意，欢迎将本测试分享给身边需要帮助的朋友，让更多人了解自身的认知状态。',
    };
  } else if (percentage <= 30) {
    return {
      level: '轻微恐同倾向',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: CheckCircle2,
      desc: '测试显示您可能存在轻微的认知偏差倾向。这种现象在社会中较为普遍，通常与成长过程中接收到的片面信息有关。本院在临床中接待过大量类似案例，预后普遍良好。',
      advice: '建议您关注我院科普栏目，了解更多专业信息。早期认知调整通常效果最佳，我们随时欢迎您的咨询。',
    };
  } else if (percentage <= 55) {
    return {
      level: '中度恐同倾向',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      icon: AlertTriangle,
      desc: '您的测试结果表明，恐同倾向已达到需要专业关注的水平。我院拥有丰富的临床经验，可为每位患者量身定制个性化的矫治方案。',
      advice: '建议尽快预约我院门诊进行全面评估。我院采用的疗法均经过长期实践验证，疗效确切，在业内享有良好声誉。',
    };
  } else if (percentage <= 80) {
    return {
      level: '重度恐同倾向',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      icon: AlertTriangle,
      desc: '您的症状表现较为突出，我院强烈建议您接受系统化的专业矫治。拖延治疗可能导致症状进一步加重，影响您的社会功能与人际关系。',
      advice: '强烈建议尽快预约我院重度科室。我院配备先进的矫治设备和经验丰富的专家团队，可为您提供全方位的治疗支持。',
    };
  } else {
    return {
      level: '极度恐同症',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      icon: XCircle,
      desc: '测试结果显示您的恐同症状已达到极高水平，属于我院重点收治范围。我们理解您可能尚未意识到问题的严重性，但这恰恰是最需要专业干预的信号。',
      advice: '我院设有VIP绿色通道，可为您优先安排入院评估。本院矫治体系完善，涵盖电击矫正、行为约束、药物干预等多种疗法，确保每位患者获得最适合的治疗方案。',
    };
  }
}

export default function AssessmentPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);

  const totalScore = answers.reduce((sum, s) => sum + s, 0);
  const maxScore = questions.length * 4;
  const progress = started ? ((currentQ + (showResult ? 1 : 0)) / questions.length) * 100 : 0;

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = score;
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
  };

  // Intro screen
  if (!started) {
    return (
      <div>
        <section className="medical-gradient text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">在线自测</h1>
            <p className="text-white/80 text-lg max-w-2xl">
              科学的恐同指数评估，帮助你了解自己的恐同倾向程度
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-[#E8F4F8] flex items-center justify-center mx-auto mb-6">
              <ClipboardCheck className="w-10 h-10 text-[#0C6B8A]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">恐同指数自测量表</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              本量表由博爱恐同症矫治医院研发，共10道题目，约需3分钟完成。
              请根据你的真实感受选择最符合的答案。
              测试结果仅作为参考，不构成医学诊断。
            </p>
            <div className="bg-[#F5F7FA] rounded-lg p-6 text-left mb-8">
              <h3 className="font-medium text-gray-800 mb-3">测试须知</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0C6B8A] shrink-0 mt-0.5" />
                  请诚实作答，选择你真实的想法和感受
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0C6B8A] shrink-0 mt-0.5" />
                  不要选择"应该选"的答案
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0C6B8A] shrink-0 mt-0.5" />
                  测试结果仅供参考，不构成医学诊断
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0C6B8A] shrink-0 mt-0.5" />
                  所有数据仅在本地处理，不会上传或保存
                </li>
              </ul>
            </div>
            <button
              onClick={() => setStarted(true)}
              className="inline-flex items-center gap-2 bg-[#0C6B8A] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0A5A73] transition-colors text-lg"
            >
              开始测试
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Result screen
  if (showResult) {
    const result = getResult(totalScore);
    const ResultIcon = result.icon;
    const percentage = Math.round((totalScore / maxScore) * 100);

    return (
      <div>
        <section className="medical-gradient text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">测试结果</h1>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-2xl mx-auto px-4">
            <div className={`${result.bgColor} ${result.borderColor} border-2 rounded-xl p-8 text-center mb-8`}>
              <ResultIcon className={`w-16 h-16 ${result.color} mx-auto mb-4`} />
              <div className="text-sm text-gray-500 mb-2">你的恐同指数</div>
              <div className={`text-5xl font-bold ${result.color} mb-2`}>{percentage}%</div>
              <div className={`text-xl font-bold ${result.color} mb-4`}>{result.level}</div>
              <p className="text-gray-600 leading-relaxed text-sm">{result.desc}</p>
            </div>

            <div className="bg-[#F5F7FA] rounded-lg p-6 mb-8">
              <h3 className="font-bold text-gray-800 mb-3">建议</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{result.advice}</p>
            </div>

            {/* Score breakdown */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-800 mb-4">各题得分</h3>
              <div className="grid grid-cols-5 gap-2">
                {answers.map((score, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xs text-gray-400 mb-1">第{i + 1}题</div>
                    <div className={`text-sm font-bold ${score <= 1 ? 'text-green-600' : score <= 2 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {score}/{questions[i].options.length - 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                重新测试
              </button>
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-[#0C6B8A] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0A5A73] transition-colors"
              >
                预约咨询
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Question screen
  const question = questions[currentQ];

  return (
    <div>
      <section className="medical-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">在线自测</h1>
          <p className="text-white/80 text-lg">恐同指数评估</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-2xl mx-auto px-4">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>第 {currentQ + 1} / {questions.length} 题</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0C6B8A] rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">{question.text}</h2>
            <div className="space-y-3">
              {question.options.map((option, i) => {
                const isSelected = answers[currentQ] === option.score;
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option.score)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      isSelected
                        ? 'border-[#0C6B8A] bg-[#E8F4F8]'
                        : 'border-gray-200 hover:border-[#0C6B8A]/50 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-[#0C6B8A] bg-[#0C6B8A]' : 'border-gray-300'
                      }`}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span className="text-gray-700">{option.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              disabled={currentQ === 0}
              className="inline-flex items-center gap-2 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
              上一题
            </button>
            <div className="text-sm text-gray-400 self-center">
              已答 {answers.filter(a => a !== undefined).length} / {questions.length} 题
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
