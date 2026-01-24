import { Zap, Brain, Database } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: Zap,
      title: '即時回答',
      description: 'ゴミの名前を送るだけで、AIが分別方法を秒速で回答します。',
    },
    {
      icon: Brain,
      title: '高い推論能力',
      description: '「これどう捨てる？」といった曖昧な質問も AI が理解します。',
    },
    {
      icon: Database,
      title: '最新データ',
      description: 'スプレッドシート連携により、常に最新の自治体ルールを反映します。',
    },
  ]

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          AIチャットボットの特徴
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
