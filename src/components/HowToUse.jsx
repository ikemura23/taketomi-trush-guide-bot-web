import { UserPlus, Type, Image, CheckCircle } from 'lucide-react'

function HowToUse() {
  const methods = [
    {
      icon: Type,
      title: 'テキストで送信',
      description: 'ゴミの名前をテキストで送信してください。例：ペットボトル、モバイルバッテリー、使い捨てカイロ',
      image: '/assets/text-example.png',
      imageAlt: 'テキスト送信のデモ画面',
    },
    {
      icon: Image,
      title: '画像で送信',
      description: 'ゴミの写真を撮影して送信してください。AIが画像を認識して分別方法を回答します。',
      image: '/assets/image-recognition-example2.png',
      imageAlt: '画像認識のデモ画面',
    },
  ]

  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          使いかた
        </h2>

        {/* ステップ1: 友だち追加 */}
        <div className="mb-12">
          <div className="bg-gray-50 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center flex-shrink-0">
                <UserPlus className="text-white" size={24} />
              </div>
              <div>
                <div className="text-xl font-bold text-[#059669] mb-1">①</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  LINEで友だち追加
                </h3>
                <p className="text-gray-600 text-sm">
                  まずはLINEで友だち追加してください。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ステップ2: 2つの送信方法 */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="text-xl font-bold text-[#059669] mb-2">②</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              ゴミの情報を送信
            </h3>
            <p className="text-gray-600">
              テキストまたは画像で送信できます
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methods.map((method, index) => {
              const Icon = method.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {method.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-auto">
                    <img
                      src={method.image}
                      alt={method.imageAlt}
                      className="w-full max-w-xs rounded-xl shadow-md"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ステップ3: AIが回答 */}
        <div>
          <div className="bg-gray-50 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-white" size={24} />
              </div>
              <div>
                <div className="text-xl font-bold text-[#059669] mb-1">③</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  AIが回答
                </h3>
                <p className="text-gray-600 text-sm">
                  AIが捨て方と収集日を回答します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToUse
