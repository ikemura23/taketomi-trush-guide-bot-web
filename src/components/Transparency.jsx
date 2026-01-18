import { FileSpreadsheet, Users } from 'lucide-react'

function Transparency() {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          シンプルで経済的なデータ管理
        </h2>
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                データ管理の民主化
              </h3>
              <p className="text-gray-600 mb-4">
                スプレッドシートからマスタデータを修正・更新できる仕組みを採用しています。
                誰でも簡単にデータを管理・更新できます。
              </p>
            </div>
          </div>
          <div className="mb-6">
          <a
            href="https://docs.google.com/spreadsheets/d/1BYFBVFjkuNDHe0Z3uk1sHfROG7b1L9f21rkFcP4gJfo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg text-[#059669] hover:text-[#047857] font-semibold transition-colors"
          >
            <FileSpreadsheet size={24} />
            デモ用データを見る
          </a>
          </div>
          <div className="mb-6">
            <img
              src="/assets/spreadsheet.png"
              alt="スプレッドシートでのゴミ分別マスタデータ管理画面"
              className="w-full rounded-lg shadow-sm border border-gray-200"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Transparency
