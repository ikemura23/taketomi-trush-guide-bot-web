import { MessageCircle } from 'lucide-react'

function Hero() {
  return (
    <section className="px-4 py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <img
            src="/assets/chatbot-image.jpg"
            alt="チャットボットキャラクター"
            className="w-64 md:w-96 aspect-video object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          島のごみを、もっと正しく、もっと楽に。
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          最新AIが、24時間いつでもあなたの分別の悩みを解決します。
        </p>
        <a
          href="https://line.me/R/ti/p/@110rnxvm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#059669] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#047857] transition-colors shadow-lg"
        >
          <MessageCircle size={24} />
          LINEで友だち追加
        </a>
      </div>
    </section>
  )
}

export default Hero
