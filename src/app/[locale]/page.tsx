import { getTranslations } from 'next-intl/server';
import ClientCharacters from '@/components/ClientCharacters';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default async function Page() {
  const t = await getTranslations();

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_10%,#151520_0%,#0A0A0C_60%)]">
        <div className="ambient-glow glow-red" />
        <div className="ambient-glow glow-gold" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full py-4 lg:py-6 bg-[#0A0A0C]/70 backdrop-blur-md z-[100] border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8">
          <a href="#home" className="group shrink-0">
            <img src="/title.png" alt={`${t('Common.logoText')} ${t('Common.logoSub')}`} className="h-8 lg:h-10 w-auto pixel-art group-hover:drop-shadow-[0_0_8px_rgba(227,159,84,0.5)] transition-all" />
          </a>
          <ul className="hidden md:flex gap-8 text-[#A0A0A5] font-medium">
            <li><a href="#about" className="hover:text-[#E39F54] transition-colors">{t('Nav.worldview')}</a></li>
            <li><a href="#features" className="hover:text-[#E39F54] transition-colors">{t('Nav.features')}</a></li>
            <li><a href="#characters" className="hover:text-[#E39F54] transition-colors">{t('Nav.characters')}</a></li>
          </ul>
          <div className="flex items-center gap-2 lg:gap-4">
            <a href="https://apps.apple.com/app/id6754251416" target="_blank" rel="noopener noreferrer" className="hidden md:flex bg-transparent border border-[#E39F54] text-[#E39F54] px-6 py-2 rounded-full font-bold transition-all hover:bg-[#E39F54] hover:text-[#0A0A0C] hover:shadow-[0_0_15px_rgba(227,159,84,0.4)] items-center gap-2">
              <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-56.1 0-112.5 45.4-112.5 125.8 0 78.4 46.8 152 82.5 214.2 16.4 28.5 43.1 63.3 75.3 64.6 28.5 1.3 43-16.7 82.5-16.7 39.5 0 51.5 16.7 82.5 15.6 33.7-1.3 56.4-33.5 72.8-63.3 11.2-22.3 23-53 23-53-48.5-20.3-64.8-67.6-62.5-104.9zM258.9 98.6c18.8-22.3 28.5-54 28.5-84.8-30.8 2.2-64.8 17.5-86.8 40.5-18.8 19.3-30.8 49.9-30.8 81.1 27.5 1.8 61.5-16.7 89.1-36.8z"/></svg>
              <span>{t('Common.appStore')}</span>
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="relative flex flex-col lg:flex-row lg:items-center lg:min-h-screen px-4 lg:px-8 pt-20 lg:pt-24 overflow-hidden gap-6 lg:gap-0" id="home">
          {/* Text Content */}
          <div className="relative z-10 lg:flex-1 lg:max-w-[50%] mt-4 lg:mt-0">
            <div className="inline-flex items-center gap-2 bg-[#E39F54]/10 border border-[#E39F54]/30 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-[#E39F54] text-xs lg:text-sm font-bold mb-4 lg:mb-6">
              <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#E39F54] rounded-full shadow-[0_0_10px_#E39F54]"></span> {t('Hero.badge')}
            </div>
            <h1 className="text-4xl lg:text-[clamp(2.5rem,4.5vw,3.75rem)] font-black leading-tight mb-4 lg:mb-6 whitespace-pre-line">
              {t('Hero.title1')} <span className="text-[#E39F54] drop-shadow-[0_0_15px_rgba(227,159,84,0.4)]">{t('Hero.titleHighlight')}</span>{t('Hero.title2')}
            </h1>
            <p className="text-base lg:text-xl text-[#A0A0A5] max-w-lg mb-6 lg:mb-10" dangerouslySetInnerHTML={{ __html: t('Hero.subtitle') }}></p>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              <a href="https://apps.apple.com/app/id6754251416" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#E39F54] to-[#D67A29] text-[#0A0A0C] px-6 py-3 lg:px-8 lg:py-4 rounded-lg text-base lg:text-lg font-extrabold flex items-center gap-2 lg:gap-3 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(227,159,84,0.4)] shadow-[0_5px_20px_rgba(227,159,84,0.4)]">
                <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-56.1 0-112.5 45.4-112.5 125.8 0 78.4 46.8 152 82.5 214.2 16.4 28.5 43.1 63.3 75.3 64.6 28.5 1.3 43-16.7 82.5-16.7 39.5 0 51.5 16.7 82.5 15.6 33.7-1.3 56.4-33.5 72.8-63.3 11.2-22.3 23-53 23-53-48.5-20.3-64.8-67.6-62.5-104.9zM258.9 98.6c18.8-22.3 28.5-54 28.5-84.8-30.8 2.2-64.8 17.5-86.8 40.5-18.8 19.3-30.8 49.9-30.8 81.1 27.5 1.8 61.5-16.7 89.1-36.8z"/></svg>
                <span>{t('Common.appStore')}</span>
              </a>
              <button disabled className="bg-black/40 text-[#A0A0A5] border border-white/10 px-6 py-3 lg:px-8 lg:py-4 rounded-lg text-base lg:text-lg font-semibold flex items-center gap-2 lg:gap-3 cursor-not-allowed opacity-70">
                <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <span>{t('Common.googlePlay')}</span>
              </button>
            </div>
          </div>
          {/* Main Gameplay / Video Container */}
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[50%] h-[240px] md:h-[350px] lg:h-[600px] z-0 lg:p-8">
            <div className="w-full h-full rounded-2xl border border-white/20 shadow-[0_0_50px_rgba(227,159,84,0.15)] overflow-hidden relative group">
              {/* Gameplay Video */}
              <video 
                src="/preview.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="metadata"
                poster="/poster.jpg"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Logo / Title Overlay — desktop only */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent hidden lg:flex flex-col justify-end p-6 md:p-10 pointer-events-none">
                <div className="flex items-center gap-3 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <img src="https://cdn.tailbound.xyz/assets/gui/shaman-signature.png" className="w-8 h-8 md:w-12 md:h-12 pixel-art" alt="Logo" />
                  <h3 className="text-2xl md:text-3xl font-black text-[#EFEFEF] drop-shadow-md">{t('Common.logoText')} <span className="text-[#E39F54]">{t('Common.logoSub')}</span></h3>
                </div>
                <p className="text-[#A0A0A5] text-sm md:text-base font-light text-shadow-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 opacity-0 group-hover:opacity-100">
                  {t('Hero.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Worldview Lore Section */}
        <section className="py-24 px-4 md:px-8" id="about">
          <div className="relative flex flex-col justify-center items-center text-center overflow-hidden py-32 px-8 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group min-h-[600px]">
            
            {/* Artwork Background */}
            <div className="absolute inset-0 z-0 bg-[#0A0A0C]">
              {/* 사용자께서 올려주신 일러스트를 /public/lore-bg.png 로 저장했다고 가정하고 불러옵니다 */}
              <img 
                src="/lore-bg.png" 
                alt="Tailbound Lore" 
                loading="lazy"
                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-1000 ease-out mix-blend-screen" 
              />
              {/* 자연스러운 텍스트 가독성을 위한 그라데이션 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-[#0A0A0C] opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/20 to-[#0A0A0C] opacity-90" />
              {/* 색상 밸런스 필터 */}
              <div className="absolute inset-0 bg-[#141419] opacity-30 mix-blend-color" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl lg:leading-tight font-black leading-tight mb-8 drop-shadow-2xl">
                {t('Lore.title1')} <br /> <span className="text-[#E39F54] drop-shadow-[0_0_20px_rgba(227,159,84,0.6)]">{t('Lore.titleHighlight')}</span>{t('Lore.title2')}
              </h2>
              <p className="text-xl md:text-2xl text-[#EFEFEF] leading-relaxed mb-10 font-light break-keep text-shadow-sm font-kr" dangerouslySetInnerHTML={{ __html: t('Lore.text') }}></p>
              <div className="flex justify-center flex-wrap gap-4">
                <span className="bg-black/40 backdrop-blur-md border border-[#E39F54]/40 text-[#F8D7B8] px-6 py-3 rounded-full text-sm font-bold tracking-wider shadow-[0_0_15px_rgba(227,159,84,0.2)]">
                  {t('Lore.badge1')}
                </span>
                <span className="bg-black/40 backdrop-blur-md border border-[#E39F54]/40 text-[#F8D7B8] px-6 py-3 rounded-full text-sm font-bold tracking-wider shadow-[0_0_15px_rgba(227,159,84,0.2)]">
                  {t('Lore.badge2')}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-8" id="features">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">{t('Features.title')}<span className="text-[#902621] drop-shadow-[0_0_15px_rgba(144,38,33,0.4)]">{t('Features.titleHighlight')}</span></h2>
            <p className="text-xl text-[#A0A0A5]">{t('Features.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               { icon: "https://cdn.tailbound.xyz/assets/gui/hell.png", key: "item1" },
               { icon: "https://cdn.tailbound.xyz/assets/gui/shaman-signature.png", key: "item2" },
               { icon: "https://cdn.tailbound.xyz/assets/artifacts/crown-of-silla.png", key: "item3" }
            ].map((f, i) => (
              <div key={i} className="glass-panel group p-10 flex flex-col justify-start text-left">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E39F54]/20 to-[#902621]/20 rounded-xl flex items-center justify-center mb-6 border border-[#E39F54]/30 group-hover:scale-110 transition-transform">
                  <img src={f.icon} alt="Icon" className="w-4/5 h-4/5 object-contain pixel-art group-hover:brightness-125 transition-all" />
                </div>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <h3 className="text-2xl font-bold mb-4">{t(`Features.${f.key}.title` as any)}</h3>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <p className="text-[#A0A0A5] leading-relaxed break-keep">{t(`Features.${f.key}.desc` as any)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Characters Section */}
        <section className="py-24 px-8" id="characters">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">{t('Characters.title')}<span className="text-[#E39F54] drop-shadow-[0_0_15px_rgba(227,159,84,0.4)]">{t('Characters.titleHighlight')}</span>{t('Characters.titleEnd')}</h2>
          </div>
          <ClientCharacters 
            translations={{
              shamanTab: t('Characters.shaman.tabName'),
              shamanHeading: t('Characters.shaman.heading'),
              shamanName: t('Characters.shaman.name'),
              shamanDesc: t('Characters.shaman.desc'),
              reaperTab: t('Characters.reaper.tabName'),
              reaperHeading: t('Characters.reaper.heading'),
              reaperName: t('Characters.reaper.name'),
              reaperDesc: t('Characters.reaper.desc'),
            }}
          />
        </section>
      </main>
      <footer className="border-t border-white/5 py-12 px-8 flex flex-col items-center mt-16 text-[#A0A0A5]">
        <img src="/title.png" alt={`${t('Common.logoText')} ${t('Common.logoSub')}`} className="h-12 w-auto pixel-art mb-6" />
        <div className="flex gap-6 mb-8">
          <a href="https://x.com/tailbound_game" target="_blank" rel="noopener noreferrer" className="text-[#A0A0A5] hover:text-[#E39F54] hover:scale-110 transition-all">
            <svg viewBox="0 0 512 512" width="24" height="24" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.6 318.1 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a href="https://www.tiktok.com/@tailbound_game" target="_blank" rel="noopener noreferrer" className="text-[#A0A0A5] hover:text-[#E39F54] hover:scale-110 transition-all">
            <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/></svg>
            <span className="sr-only">TikTok</span>
          </a>
          <a href="https://www.instagram.com/tailbound_game/" target="_blank" rel="noopener noreferrer" className="text-[#A0A0A5] hover:text-[#E39F54] hover:scale-110 transition-all">
            <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://www.youtube.com/channel/UCdIUPUetfMbKYHN892p7_QQ/" target="_blank" rel="noopener noreferrer" className="text-[#A0A0A5] hover:text-[#E39F54] hover:scale-110 transition-all">
            <svg viewBox="0 0 576 512" width="24" height="24" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
            <span className="sr-only">YouTube</span>
          </a>
        </div>
        <p className="text-sm">{t('Common.footerText')}</p>
      </footer>
    </div>
  );
}
