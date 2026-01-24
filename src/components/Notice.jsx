import { AlertTriangle } from 'lucide-react'

function Notice() {
  const notices = [
    'このプロジェクトは竹富町公式ではなく、個人が作成した非公式プロジェクトです',
    'このプロジェクトはプロトタイプです',
    'チャットボットから返答されるデータはデモ用データを参照しています',
    'デモ用データは現実の分別指定、収集日ではなく仮の値です',
  ]

  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                注意事項
              </h2>
              <ul className="space-y-3">
                {notices.map((notice, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-yellow-600 font-semibold mt-1">•</span>
                    <p className="text-gray-700 leading-relaxed">{notice}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notice
