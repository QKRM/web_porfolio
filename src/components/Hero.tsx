import { motion } from "motion/react";
import { ArrowRight, Flame } from "lucide-react";

interface HeroProps {
  onStartClick: () => void;
}

export default function Hero({ onStartClick }: HeroProps) {
  return (
    <section 
      id="hero"
      className="relative w-full min-h-[75vh] flex items-center pt-16 pb-20 px-6 overflow-hidden bg-surface"
      style={{
        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtkxvCzjjcv-Lm-4YoaZgJcs83ohtXBQw6dIDzOEpGAm2s93QHCEG5o3-1LJWyM3snYiRuRqI3UuBMHR4X7x8-p9HO41Pxo7wAh66eTMt-0X1zRCMrUIkVtNVtJ6X_F-f0VDlJl4x2mBh5xvN1Y74RWwxk3tXbYWvW6aTl0VyXejJCCaIJEcwMYfyR_sSAV_Yidms20jUFHs_sDbnQlMwoF3ih_CBZmjoDVm8TeMiL__st_50Z3knZ6u89qi2DnxPPpsbI9GvDBUCx')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(245, 245, 220, 0.82)"
      }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Copy block */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-6 md:pl-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary-dark font-semibold px-3.5 py-1.5 rounded-full text-xs w-fit shadow-xs"
          >
            <Flame className="w-3.5 h-3.5 text-primary-dark fill-primary" />
            은하계 프리미엄 셀렉션 런칭
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-headline font-extrabold text-[32px] sm:text-4xl md:text-5xl text-[#2A2C22] leading-[1.25] tracking-tight"
          >
            당신의 일상에 포스를 채워줄 최고의 파트너를 단 한 번의 선택으로 만나보세요
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed max-w-2xl"
          >
            누적 판매 5만 개 돌파, 만족도 4.9/5.0의 압도적 퀄리티. 은하계에서 가장 사랑받는 캐릭터를 당신의 삶 속으로 초대합니다.
          </motion.p>
        </div>

        {/* Right CTA Area */}
        <div className="md:col-span-5 flex items-end justify-start md:justify-end md:pr-8 mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={onStartClick}
              className="group inline-flex items-center justify-center bg-primary text-white font-semibold text-base px-8 py-4.5 rounded-xl shadow-lg hover:bg-primary-dark hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-300 cursor-pointer"
            >
              지금 바로 시작하기 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Subtle fade transitions */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent z-0 pointer-events-none"></div>
    </section>
  );
}
