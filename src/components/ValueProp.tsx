import { motion } from "motion/react";
import { Sparkles, Trophy, Heart } from "lucide-react";

export default function ValueProp() {
  const valueCards = [
    {
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      title: "독보적인 수공예 디테일",
      desc: "수많은 원형 제작사와 아티스트들의 협동 연구를 거쳐 정밀 광학과 수색 마감으로 완성 설계되었습니다."
    },
    {
      icon: <Trophy className="w-5 h-5 text-primary" />,
      title: "소장가 소장 인증 보증",
      desc: "지속 가능한 퀄리티를 대변하는 정품 홀로그램 실 장착 시리얼 인증칩 라이센스가 전 기종에 부여됩니다."
    },
    {
      icon: <Heart className="w-5 h-5 text-primary" />,
      title: "완벽한 디자인 정체성",
      desc: "단순한 캐릭터 굿즈의 영역을 뛰어넘어, 모던한 거실 공간이나 서재에서 우아한 오브제 역할을 수행합니다."
    }
  ];

  return (
    <section id="value-prop" className="py-24 px-6 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-primary font-bold text-xs uppercase tracking-widest"
        >
          Premium Philosophy
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-headline font-extrabold text-[#2A2C22] text-3xl md:text-4xl"
        >
          평범함에 지치셨나요?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          어디에나 있는 굿즈, 영혼 없는 디자인에 실망하셨다면 이제 다릅니다. {" "}
          <strong className="text-primary-dark font-semibold">Grogu Collectibles</strong>는 단순한 수집품을 넘어 당신의 공간과 일상에 프리미엄의 가치를 더합니다. 디테일이 살아있는 진정한 컬렉터의 선택을 경험해 보세요.
        </motion.p>
      </div>

      {/* Subtle extra value pillars highlighting galactic craftsmanship */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-10 border-t border-gray-100">
        {valueCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-surface/30 hover:border-[#E3E3C7] transition-all duration-300"
          >
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              {card.icon}
            </div>
            <h3 className="font-bold text-gray-800 text-base mb-2">{card.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
