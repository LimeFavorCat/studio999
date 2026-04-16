import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-6xl font-bold tracking-tighter mb-6 text-gray-900">
          Welcome, <span className="text-blue-600">999 Studio</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-md mx-auto">
          999스튜디오의 사이드 프로젝트를 테스트 해 보세요.<br />
          모든 API는 백엔드에서 안전하게 처리됩니다.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <Link
            href="/demo"
            className="group block p-8 bg-white border border-gray-200 rounded-3xl hover:border-blue-500 hover:shadow-xl transition-all"
          >
            <div className="text-4xl mb-4">🎨</div>
            <div className="text-gray-900 font-semibold text-xl mb-2">일러 프리뷰</div>
            <div className="text-gray-500 text-sm">전직 및 라인 일러스트 프리뷰</div>
            <div className="mt-6 text-blue-600 text-sm font-medium group-hover:underline">바로 체험하기 →</div>
          </Link>

          {/* 나중에 다른 프로젝트 카드가 추가될 자리 */}
          <div className="p-8 bg-white border border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center text-gray-400">
            <div className="text-4xl mb-4">🔧</div>
            <div className="font-semibold">니리 번역기</div>
            <div className="text-xs mt-1">(FastAPI 연동 예정)</div>
          </div>
          <div className="p-8 bg-white border border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center text-gray-400">
            <div className="text-4xl mb-4">📊</div>
            <div className="font-semibold">Project B</div>
            <div className="text-xs mt-1">(FastAPI 연동 예정)</div>
          </div>
        </div>

        <div className="mt-16 text-xs text-gray-400">
          개발자 : 김병윤 • 디자이너 : 최수환
        </div>
      </div>
    </main>
  );
}