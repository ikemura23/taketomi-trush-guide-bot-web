import { Instagram } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 mb-2">
              © {currentYear} 竹富町ごみ分別ガイドボット
            </p>
            <p className="text-gray-400 text-sm mb-1">
              このプロジェクトは竹富町公式ではなく、個人が作成した非公式プロジェクトです。
            </p>
            <p className="text-gray-400">
              開発者: <span className="text-white font-semibold">Kazutaka Ikemura</span>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/ikemura23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href="https://x.com/ikemura23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
