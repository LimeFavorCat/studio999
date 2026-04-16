'use client';

import { useState } from "react";
import Link from "next/link";

interface Character {
  id: number;
  name: string;
  korean: string;
  emoji: string;
  desc: string;
  image: string;          // ← 여기에 커스텀 이미지 URL 넣으세요
}

interface Variant {
  id: number;
  label: string;
  image: string;          // ← 여기에 커스텀 배경 이미지 URL 넣으세요 (3×3 각각)
}

const characters: Character[] = [
  {
    id: 1,
    name: "Red knight",
    korean: "빨머기",
    emoji: "⚔️",
    desc: "설명",
    image: "https://picsum.photos/id/1015/1920/1080",   // ← 커스텀 URL로 교체
  },
  {
    id: 2,
    name: "Trapper",
    korean: "까트",
    emoji: "🗡️",
    desc: "설명",
    image: "https://picsum.photos/id/1005/1920/1080",   // ← 커스텀 URL로 교체
  },
  {
    id: 3,
    name: "Elf rancer",
    korean: "엘프 창술사",
    emoji: "🏹",
    desc: "설명",
    image: "https://picsum.photos/id/1016/1920/1080",   // ← 커스텀 URL로 교체
  },
  {
    id: 4,
    name: "Niri summoner",
    korean: "꼬마 니리",
    emoji: "🔮",
    desc: "설명",
    image: "https://picsum.photos/id/133/1920/1080",    // ← 커스텀 URL로 교체
  },
  {
    id: 5,
    name: "Idol mage",
    korean: "김순자",
    emoji: "🤖",
    desc: "설명",
    image: "https://picsum.photos/id/160/1920/1080",    // ← 커스텀 URL로 교체
  },
  {
    id: 6,
    name: "King of Fists",
    korean: "권 왕",
    emoji: "🔫",
    desc: "설명이 필요없음",
    image: "https://picsum.photos/id/201/1920/1080",    // ← 커스텀 URL로 교체
  },
];

const variants: Variant[] = [
  { id: 11, label: "가로 1\n세로 1", image: "https://picsum.photos/id/29/1920/1080" },   // ← 커스텀
  { id: 12, label: "가로 1\n세로 2", image: "https://picsum.photos/id/30/1920/1080" },
  { id: 13, label: "가로 1\n세로 3", image: "https://picsum.photos/id/31/1920/1080" },
  { id: 21, label: "가로 2\n세로 1", image: "https://picsum.photos/id/32/1920/1080" },
  { id: 22, label: "가로 2\n세로 2", image: "https://picsum.photos/id/33/1920/1080" },
  { id: 23, label: "가로 2\n세로 3", image: "https://picsum.photos/id/34/1920/1080" },
  { id: 31, label: "가로 3\n세로 1", image: "https://picsum.photos/id/35/1920/1080" },
  { id: 32, label: "가로 3\n세로 2", image: "https://picsum.photos/id/36/1920/1080" },
  { id: 33, label: "가로 3\n세로 3", image: "https://picsum.photos/id/37/1920/1080" },
];

export default function DemoPage() {
  const [selectedChar, setSelectedChar] = useState<Character>(characters[0]);
  const [backgroundImage, setBackgroundImage] = useState<string>(characters[0].image);

  // 캐릭터 선택 → 정보 + 기본 배경 변경
  const handleCharacterClick = (char: Character) => {
    setSelectedChar(char);
    setBackgroundImage(char.image);
  };

  // 3×3 버튼 선택 → 배경만 변경
  const handleVariantClick = (variant: Variant) => {
    setBackgroundImage(variant.image);
  };

  return (
    <>
      {/* Full-screen background - 패딩 적용을 위해 오버레이 여백 확대 */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        {/* 좌측 내비게이션 */}
        <div className="absolute top-22 left-12 bg-white/35 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl p-6 z-50 w-72">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl"></span>
            <h2 className="font-bold text-2xl tracking-tight text-gray-900">캐릭터</h2>
          </div>

          <div className="space-y-2">
            {characters.map((char) => (
              <button
                key={char.id}
                onClick={() => handleCharacterClick(char)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all hover:bg-blue-50 ${
                  selectedChar.id === char.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:shadow"
                }`}
              >
                <span className="text-3xl">{char.emoji}</span>
                <div>
                  <div className="text-gray-900 font-semibold text-lg">{char.korean}</div>
                  <div className="text-xs text-gray-500">{char.name}</div>
                </div>
                {selectedChar.id === char.id && <span className="ml-auto text-xl">→</span>}
              </button>
            ))}
          </div>
        </div>

        {/* 오른쪽 설명 패널 + 3×3 버튼 - 크기 완전 고정 */}
        <div className="absolute bottom-12 right-12 w-[420px] h-[520px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-8 z-50 border border-white/20 overflow-hidden flex flex-col">
        
        {/* 캐릭터 정보 영역 (상단) - 유연하게 늘어남 */}
        <div className="flex-shrink-0">
            <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{selectedChar.emoji}</span>
            <div>
                <div className="text-gray-900 text-4xl font-bold tracking-tight">{selectedChar.korean}</div>
                <div className="text-blue-600 font-medium">{selectedChar.name}</div>
            </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg line-clamp-4">
            {selectedChar.desc}
            </p>
        </div>

        <div className="mt-8 pt-6 border-t flex-1 flex flex-col">
            <div className="text-xs font-medium text-gray-500 mb-4 flex-shrink-0">전직 보기 (3×3)</div>
            
            {/* 3×3 버튼 그리드 - 남은 공간을 모두 사용 */}
            <div className="grid grid-cols-3 gap-3 flex-1">
            {variants.map((variant) => (
                <button
                key={variant.id}
                onClick={() => handleVariantClick(variant)}
                className={`h-20 flex flex-col items-center justify-center text-[10px] font-medium rounded-2xl transition-all border hover:border-blue-400 hover:shadow-md ${
                    backgroundImage === variant.image
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-gray-200"
                }`}
                >
                <span className="whitespace-pre text-center leading-tight">
                    {variant.label}
                </span>
                </button>
            ))}
            </div>
        </div>
        </div>


      </div>
    </>
  );
}