import { Gift, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

interface FinalCTAProps {
  onCTAClick: () => void;
}

export default function FinalCTA({ onCTAClick }: FinalCTAProps) {
  return (
    <section className="relative py-28 px-6 bg-[#1E1F24] overflow-hidden text-center">
      {/* Decorative stars / geometric background grids with CSS */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full border border-primary blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full border border-[#E3E3C7] blur-2xl"></div>
      </div>

      <div className="max-w-3xl mx-auto space-y-8 relative z-10 text-white">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#A4C56F]/20 border border-[#88B04B]/30 px-4 py-2 rounded-full text-xs font-semibold text-[#A4C56F] shadow-sm"
        >
          <Gift className="w-4 h-4 text-primary" />
          <span>한정 수량 특급 사은 이벤트 진행 중</span>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-headline font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug"
        >
          🚨 오늘까지만 제공되는 특별한 혜택!
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-[#EAEAD2]/80 leading-relaxed max-w-2xl mx-auto"
        >
          한정 수량으로 진행되는 특별 프로모션을 놓치지 마세요. 지금 결제하시면 갈릭 로고가 고급스레 양각된 전용 한정판 보호 파우치를 선물로 함께 동봉해 드립니다.
        </motion.p>

        {/* Dynamic Interactive Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-4"
        >
          <button
            onClick={onCTAClick}
            className="group relative inline-flex items-center justify-center bg-primary hover:bg-primary-dark hover:scale-105 active:scale-95 text-white font-headline font-extrabold text-[#1E1F24] text-lg px-12 py-5 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
          >
            <span className="text-white">지금 이 혜택 받고 구매하기</span>
          </button>
        </motion.div>

        {/* Time Limit Notice */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-red-400 font-semibold pt-4">
          <ShieldAlert className="w-4 h-4 animate-pulse" />
          <span>본 혜택은 금일 은하수 표준시간 종료 시 자동 소멸됩니다.</span>
        </div>
      </div>
    </section>
  );
}
