import { HelpCircle, Shield, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#191B25] text-gray-400 py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
        
        {/* Left Company block */}
        <div className="md:col-span-4 space-y-4">
          <div className="text-white font-headline font-extrabold text-2xl flex items-center gap-3">
            {/* Soft Green Ear element mimicking navbar */}
            <div className="w-6 h-6 bg-primary rounded-full relative flex items-center justify-center scale-90">
              <div className="absolute -left-1.5 top-0.5 w-2 h-1 bg-primary rounded-l-full rotate-[15deg]"></div>
              <div className="absolute -right-1.5 top-0.5 w-2 h-1 bg-primary rounded-r-full -rotate-[15deg]"></div>
            </div>
            <span>Grogu Collectibles</span>
          </div>
          <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
            은하계의 포스와 깊은 수공예 신앙으로 탄생시키는 프리미엄 라이프스타일 스토어입니다. 우리는 단순한 굿즈를 넘어 가치가 오래 유지되는 예술 장식품을 생산합니다.
          </p>
        </div>

        {/* Center Quick links */}
        <div className="md:col-span-5 grid grid-cols-2 gap-6 sm:gap-10">
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span>법적 고지 & 안전</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Shipping Policy</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              <span>고객 소통 센터</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-gray-500">Contact Us:</span> info@grogu-coll.space
              </li>
              <li>
                <span className="text-gray-500">은하 시간:</span> 09:00 - 18:00 (UTC+9)
              </li>
              <li>
                <span className="text-gray-500">고객 보증:</span> 1:1 디렉트 파츠 평생 보증
              </li>
            </ul>
          </div>
        </div>

        {/* Right Info pillar */}
        <div className="md:col-span-3 space-y-3 md:text-right">
          <div className="inline-flex items-center gap-1.5 text-xs text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            <Globe className="w-3.5 h-3.5" />
            <span>은하 지구 지사 공식 인증 가맹</span>
          </div>
          <p className="text-xs text-gray-500 leading-normal pt-1">
            본 웹사이트에서 소개하는 상품은 Grogu Collectibles의 1등급 기술 기준에 맞춰 조율 및 검수되었습니다.
          </p>
        </div>
      </div>

      {/* Copyright bottom text */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10 text-xs text-gray-500">
        <div>
          © {currentYear} Grogu Collectibles. Galactic Craftsmanship. All Rights Reserved.
        </div>
        <div className="flex items-center gap-2">
          <span>Designed with Force</span>
          <span className="text-primary-light">●</span>
          <span>Crafted for Collectors</span>
        </div>
      </div>
    </footer>
  );
}
