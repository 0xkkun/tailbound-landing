import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import ClientCharacters from '@/components/ClientCharacters';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { routing } from '@/i18n/routing';

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
      <nav className="fixed top-0 w-full py-6 bg-[#0A0A0C]/70 backdrop-blur-md z-[100] border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
          <div className="text-2xl font-black text-[#E39F54] flex items-center gap-2">
            <span>설화</span><span className="text-base text-[#902621] opacity-80 font-kr">魂录</span>
          </div>
          <ul className="hidden md:flex gap-8 text-[#A0A0A5] font-medium">
            <li><a href="#about" className="hover:text-[#E39F54] transition-colors">{t('Nav.worldview')}</a></li>
            <li><a href="#features" className="hover:text-[#E39F54] transition-colors">{t('Nav.features')}</a></li>
            <li><a href="#characters" className="hover:text-[#E39F54] transition-colors">{t('Nav.characters')}</a></li>
          </ul>
          <div className="flex items-center gap-4">
            <button className="bg-transparent border border-[#E39F54] text-[#E39F54] px-6 py-2 rounded-full font-bold transition-all hover:bg-[#E39F54] hover:text-[#0A0A0C] hover:shadow-[0_0_15px_rgba(227,159,84,0.4)]">
              {t('Common.preRegister')}
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center px-8 pt-24 overflow-hidden" id="home">
          <div className="flex-1 relative z-10 lg:w-1/2 mt-20 lg:mt-0">
            <div className="inline-flex items-center gap-2 bg-[#E39F54]/10 border border-[#E39F54]/30 px-4 py-2 rounded-full text-[#E39F54] text-sm font-bold mb-6">
              <span className="w-2 h-2 bg-[#E39F54] rounded-full shadow-[0_0_10px_#E39F54]"></span> {t('Hero.badge')}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              {t('Hero.title1')}<br/>
              <span className="text-[#E39F54] drop-shadow-[0_0_15px_rgba(227,159,84,0.4)]">{t('Hero.titleHighlight')}</span>
              {t('Hero.title2')}
            </h1>
            <p className="text-xl text-[#A0A0A5] max-w-lg mb-10" dangerouslySetInnerHTML={{ __html: t('Hero.subtitle') }}></p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-br from-[#E39F54] to-[#D67A29] text-[#0A0A0C] px-8 py-4 rounded-lg text-lg font-extrabold flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(227,159,84,0.4)] shadow-[0_5px_20px_rgba(227,159,84,0.4)]">
                <span className="text-xl">▶</span> {t('Common.playNow')}
              </button>
              <button className="bg-white/5 text-[#EFEFEF] border border-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-white/10 hover:border-white/50">
                {t('Common.watchTrailer')}
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[60%] h-[80vh] z-0 opacity-40 lg:opacity-100">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="red-moon absolute w-[256px] h-[96px] scale-[2.5] opacity-90 drop-shadow-[0_0_30px_#902621] pixel-art z-0"></div>
              <img src="https://cdn.tailbound.xyz/assets/player/shaman-detail.png" alt="무당" className="absolute top-[20%] right-[15%] h-[70%] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] animate-[float_6s_ease-in-out_infinite_alternate]" />
              <img src="https://cdn.tailbound.xyz/assets/player/reaper-detail-v2.png" alt="저승사자" className="absolute top-[20%] right-[-5%] h-[70%] object-contain opacity-80 blur-[1px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] mix-blend-screen animate-[float_6s_ease-in-out_infinite_alternate_-1.5s]" />
            </div>
          </div>
        </section>

        {/* Worldview Lore Section */}
        <section className="py-24 px-8" id="about">
          <div className="glass-panel flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#141419]/80 to-black/60 relative overflow-hidden py-16 px-8">
            <div className="absolute inset-0 bg-[url('https://cdn.tailbound.xyz/assets/gui/pattern.png')] opacity-5 z-0 pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8 drop-shadow-2xl">
                {t('Lore.title1')} <br /> <span className="text-[#902621] drop-shadow-[0_0_15px_rgba(144,38,33,0.4)]">{t('Lore.titleHighlight')}</span>{t('Lore.title2')}
              </h2>
              <p className="text-lg text-[#A0A0A5] leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t('Lore.text') }}></p>
              <div className="flex justify-center flex-wrap gap-4">
                <span className="bg-[#902621]/15 border border-[#902621]/40 text-[#F8D7B8] px-5 py-2 rounded-full text-sm font-bold tracking-wider">{t('Lore.badge1')}</span>
                <span className="bg-[#902621]/15 border border-[#902621]/40 text-[#F8D7B8] px-5 py-2 rounded-full text-sm font-bold tracking-wider">{t('Lore.badge2')}</span>
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
               { icon: "https://cdn.tailbound.xyz/assets/gui/crown.png", key: "item3" }
            ].map((f, i) => (
              <div key={i} className="glass-panel group p-10 flex flex-col justify-start text-left">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E39F54]/20 to-[#902621]/20 rounded-xl flex items-center justify-center mb-6 border border-[#E39F54]/30 group-hover:scale-110 transition-transform">
                  <img src={f.icon} alt="Icon" className="w-4/5 h-4/5 object-contain pixel-art group-hover:brightness-125 transition-all" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t(`Features.${f.key}.title` as any)}</h3>
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

      <footer className="border-t border-white/5 py-12 px-8 text-center mt-16 text-[#A0A0A5]">
        <div className="text-2xl font-black text-[#E39F54] mb-4">설화 魂录</div>
        <p className="text-sm">{t('Common.footerText')}</p>
      </footer>
    </div>
  );
}
