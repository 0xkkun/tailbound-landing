"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SpriteIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-16 h-16 bg-black/40 border border-white/10 rounded-xl overflow-hidden relative flex items-center justify-center hover:scale-110 hover:border-[#E39F54] hover:shadow-[0_0_15px_rgba(227,159,84,0.4)] transition-all cursor-pointer group">
    {/* By setting width and height larger than the container and object-left-top, we crop to the first frame of the sprite sheet */}
    <img 
      src={src} 
      alt={alt} 
      className="absolute top-0 left-0 h-full w-auto max-w-none object-cover object-left pixel-art group-hover:brightness-125 transition-all" 
      style={{ minWidth: '400%' }}
    />
  </div>
);

export default function ClientCharacters({ translations }: { translations: any }) {
  const [activeTab, setActiveTab] = useState<"shaman" | "reaper">("shaman");

  return (
    <div className="flex flex-col gap-10 max-w-5xl mx-auto">
      <div className="flex justify-center gap-6">
        <button
          onClick={() => setActiveTab("shaman")}
          className={`px-6 py-3 text-xl md:text-2xl font-bold transition-all border-b-2 ${
            activeTab === "shaman" ? "text-[#E39F54] border-[#E39F54]" : "text-[#A0A0A5] border-transparent hover:text-[#EFEFEF]"
          }`}
        >
          {translations.shamanTab}
        </button>
        <button
          onClick={() => setActiveTab("reaper")}
          className={`px-6 py-3 text-xl md:text-2xl font-bold transition-all border-b-2 ${
            activeTab === "reaper" ? "text-[#902621] border-[#902621]" : "text-[#A0A0A5] border-transparent hover:text-[#EFEFEF]"
          }`}
        >
          {translations.reaperTab}
        </button>
      </div>

      <div className="relative min-h-[450px]">
        <AnimatePresence mode="wait">
          {activeTab === "shaman" ? (
            <motion.div
              key="shaman"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="glass-panel flex flex-col md:flex-row items-center gap-10 w-full p-8 md:p-12"
            >
              <div className="flex-1 text-left">
                <h3 className="text-3xl md:text-4xl text-[#A0A0A5] leading-tight mb-2 font-medium">
                  {translations.shamanHeading}
                </h3>
                <h2 className="text-6xl md:text-7xl font-black text-[#E39F54] drop-shadow-[0_0_15px_rgba(227,159,84,0.3)] mb-6">
                  {translations.shamanName}
                </h2>
                <p className="text-lg md:text-xl text-[#EFEFEF] mb-10 leading-relaxed break-keep">
                  {translations.shamanDesc}
                </p>
                <div className="flex gap-4">
                  <SpriteIcon src="https://cdn.tailbound.xyz/assets/weapon/talisman.png" alt="부적" />
                  <SpriteIcon src="https://cdn.tailbound.xyz/assets/weapon/purifying-water.png" alt="정화수" />
                  <SpriteIcon src="https://cdn.tailbound.xyz/assets/weapon/jakdu.png" alt="작두" />
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <img src="https://cdn.tailbound.xyz/assets/player/shaman-detail.png" alt="무당 스프라이트" className="w-full max-w-[320px] pixel-art drop-shadow-[0_0_30px_rgba(227,159,84,0.3)]" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="reaper"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="glass-panel flex flex-col md:flex-row items-center gap-10 w-full p-8 md:p-12"
            >
              <div className="flex-1 text-left">
                <h3 className="text-3xl md:text-4xl text-[#A0A0A5] leading-tight mb-2 font-medium">
                  {translations.reaperHeading}
                </h3>
                <h2 className="text-6xl md:text-7xl font-black text-[#902621] drop-shadow-[0_0_15px_rgba(144,38,33,0.3)] mb-6">
                  {translations.reaperName}
                </h2>
                <p className="text-lg md:text-xl text-[#EFEFEF] mb-10 leading-relaxed break-keep">
                  {translations.reaperDesc}
                </p>
                <div className="flex gap-4">
                  <SpriteIcon src="https://cdn.tailbound.xyz/assets/weapon/reaper/karma-scythe.png" alt="업보의 낫" />
                  <SpriteIcon src="https://cdn.tailbound.xyz/assets/weapon/reaper/death-sword.png" alt="망자의 검" />
                  <SpriteIcon src="https://cdn.tailbound.xyz/assets/weapon/reaper/spirit-bell.png" alt="명두방울" />
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <img src="https://cdn.tailbound.xyz/assets/player/reaper-detail-v2.png" alt="저승사자 스프라이트" className="w-full max-w-[320px] pixel-art drop-shadow-[0_0_30px_rgba(144,38,33,0.3)]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
