import { Product } from "../types";
import { X, Check, Star, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#1E1F24]/80 backdrop-blur-xs transition-opacity duration-300"
      ></div>

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] md:max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl border border-gray-100 flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full z-20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image & Rating */}
        <div className="md:w-1/2 relative min-h-[300px] md:min-h-full bg-slate-100">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover absolute inset-0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-6 left-6 text-white space-y-1">
            <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              {product.category}
            </span>
            <h3 className="font-headline font-extrabold text-2xl truncate pr-4 text-white">
              {product.name}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center gap-1.5 pt-1 text-sm">
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              </div>
              <span className="font-bold text-amber-200">{product.rating}</span>
              <span className="text-gray-300 text-xs">({product.reviewsCount} 평점)</span>
            </div>
          </div>
        </div>

        {/* Right Side: Specifications & Highlight Information */}
        <div className="md:w-1/2 p-8 space-y-6 overflow-y-auto">
          <div>
            <span className="text-xs text-primary font-bold uppercase tracking-widest">Detail Specification</span>
            <h2 className="font-headline font-extrabold text-[#2A2C22] text-2xl mt-1">{product.name}</h2>
            
            <div className="text-xl font-mono font-bold text-primary-dark mt-2">
              {product.price.toLocaleString("ko-KR")} 원
            </div>
          </div>

          <p className="font-sans text-sm text-gray-600 leading-relaxed">
            {product.detailedDescription}
          </p>

          {/* Key Selling Highlights */}
          <div className="space-y-3 pt-2">
            <h4 className="font-semibold text-gray-800 text-sm">핵심 소장 가치</h4>
            <ul className="space-y-2.5 text-xs text-gray-600">
              {product.highlights.map((hil, hidx) => (
                <li key={hidx} className="flex items-start gap-2">
                  <span className="bg-primary/10 text-primary-dark p-0.5 rounded-full mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="leading-relaxed font-medium">{hil}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications Grid */}
          <div className="space-y-3 pt-2">
            <h4 className="font-semibold text-gray-800 text-sm border-b border-gray-100 pb-1.5">상세 규격 및 소재</h4>
            <div className="grid grid-cols-1 gap-2 text-xs">
              {Object.entries(product.specs).map(([label, val]) => (
                <div key={label} className="flex justify-between items-center gap-4 py-1.5 border-b border-gray-50/50">
                  <span className="text-gray-400 font-medium">{label}</span>
                  <span className="text-gray-700 font-semibold">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex gap-3">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex-grow flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer text-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>카트에 담기</span>
            </button>
            <button
              onClick={onClose}
              className="border border-gray-200 hover:bg-gray-50 text-gray-500 font-semibold px-6 py-4 rounded-xl transition-colors cursor-pointer text-xs"
            >
              닫기
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
