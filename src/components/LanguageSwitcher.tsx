"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { ChangeEvent } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="relative inline-block ml-4">
      <select
        value={locale}
        onChange={handleLanguageChange}
        className="bg-[#141419]/80 border border-white/20 text-[#A0A0A5] pl-3 pr-8 py-2 rounded-md font-medium text-sm outline-none hover:border-[#E39F54] hover:text-[#EFEFEF] transition-colors appearance-none cursor-pointer"
      >
        <option value="ko">🇰🇷 한국어</option>
        <option value="en">🇺🇸 English</option>
        <option value="ja">🇯🇵 日本語</option>
        <option value="zh">🇨🇳 中文(简体)</option>
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#A0A0A5] text-xs">▼</div>
    </div>
  );
}
