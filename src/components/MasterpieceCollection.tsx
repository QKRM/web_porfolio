import { motion } from "motion/react";
import { Product } from "../types";
import { Eye, Plus } from "lucide-react";

interface MasterpieceCollectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function MasterpieceCollection({ 
  products, 
  onSelectProduct,
  onAddToCart 
}: MasterpieceCollectionProps) {
  return (
    <section id="collection" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center space-y-4 mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary font-extrabold text-xs uppercase tracking-widest block"
        >
          Curated Masterpieces
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headline font-extrabold text-[#2A2C22] text-3xl md:text-4xl"
        >
          마스터피스 컬렉션
        </motion.h2>
        
        <div className="h-1 w-12 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="group bg-surface rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-[#E3E3C7] flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-100">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Hover Dark Overlay with Actions */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="bg-white hover:bg-gray-100 text-[#2A2C22] p-3.5 rounded-full shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center gap-2 font-bold text-xs"
                >
                  <Eye className="w-4 h-4 text-primary" />
                  <span>상세 정보</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                  className="bg-primary hover:bg-primary-dark text-white p-3.5 rounded-full shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center gap-2 font-bold text-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>카트 담기</span>
                </button>
              </div>

              {/* Tag Category overlay */}
              <span className="absolute top-4 left-4 bg-primary/95 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                {product.category}
              </span>
            </div>

            {/* Title & Description under exact Beige styling */}
            <div 
              onClick={() => onSelectProduct(product)}
              className="p-8 text-center space-y-3 cursor-pointer select-none bg-surface/70 hover:bg-surface transition-colors duration-200 border-t border-[#E3E3C7]/40 flex-grow flex flex-col justify-between"
            >
              <div>
                <h3 className="font-headline font-bold text-[#2A2C22] text-xl md:text-2xl group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-gray-600 mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <div className="pt-4 flex items-center justify-between border-t border-[#E3E3C7]/40 mt-3">
                <span className="text-primary-dark font-mono font-bold text-base">
                  {product.price.toLocaleString("ko-KR")} 원
                </span>
                <span className="text-xs text-primary underline font-bold group-hover:text-primary-dark transition-colors">
                  자세히 보기
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
