import { UserPlus, MessageSquare, CheckCircle } from 'lucide-react'

function HowToUse() {
  const steps = [
    {
      icon: UserPlus,
      title: 'LINEで友だち追加',
      description: 'まずはLINEで友だち追加してください。',
    },
    {
      icon: MessageSquare,
      title: 'ゴミの名前を送信',
      description: '例：ペットボトル、モバイルバッテリー、使い捨てカイロ',
    },
    {
      icon: CheckCircle,
      title: 'AIが回答',
      description: 'AIが捨て方と収集日を回答します。',
    },
  ]

  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          使いかた
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="flex justify-center">
            <img
              src="/assets/demo.png"
              alt="スマホデモ画面"
              className="w-full max-w-sm rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#059669] mb-1">
                        {index === 0 ? '①' : index === 1 ? '②' : '③'}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToUse
