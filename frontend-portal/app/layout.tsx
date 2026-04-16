import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Studio 999 - 사이드 프로젝트 통합 포털",
  description: "모든 사이드 프로젝트를 한 곳에서",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* Top Navigation Bar */}
        <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            {/* 왼쪽: 로고 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">P</div>
              <span className="font-semibold text-2xl tracking-tight text-gray-900">Studio999</span>
            </div>

            {/* 중앙: 메뉴 */}
            <div className="flex items-center gap-8 text-sm font-medium">
              <Link href="/" className="text-gray-900 hover:text-blue-600 transition-colors">🏠 Home</Link>
              <Link href="/demo" className="text-gray-900 hover:text-blue-600 transition-colors">🎨 일러 프리뷰</Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">니리 번역기</Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Project B</Link>
            </div>

            {/* 오른쪽 끝: 유저이름 */}
            <div className="text-sm text-gray-900">로그인 없음 ㅋㅋ</div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}