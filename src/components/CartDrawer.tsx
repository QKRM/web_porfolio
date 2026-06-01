import React, { useState } from "react";
import { CartItem, Product } from "../types";
import { X, ShoppingBag, ArrowLeft, Trash2, Plus, Minus, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [recipient, setRecipient] = useState("");
  const [phone, setPhone] = useState("");
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  const isFreeShipping = subtotal > 150000;
  const shippingFee = subtotal === 0 ? 0 : isFreeShipping ? 0 : 3000;
  const grandTotal = subtotal + shippingFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient || !phone) {
      alert("배송을 위해 수령인 성함과 연락처를 입력해 주세요!");
      return;
    }
    
    // Simulate Order Success
    setIsOrdered(true);
    setRecipient("");
    setPhone("");
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Background Overlay */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      ></div>

      {/* Cart Panel content block */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.35 }}
        className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col justify-between z-10"
      >
        {/* Header bar */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="font-headline font-extrabold text-lg text-gray-800">
              내 보헤미안 수집 가방 ({cartItems.length})
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200 transition-colors cursor-pointer text-gray-400 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content area */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {isOrdered ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 space-y-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-primary animate-bounceHeading" />
              </div>
              <div className="space-y-2">
                <h3 className="font-headline font-extrabold text-xl text-gray-800">주문 접수 완료!</h3>
                <p className="text-xs text-gray-500 leading-relaxed px-4">
                  성공적으로 주문이 전송되었습니다. 은하계 연합 익스프레스망을 타고 한정판 파우치를 동봉하여 안전하게 발송해 드립니다!
                </p>
              </div>
              <button
                onClick={() => {
                  setIsOrdered(false);
                  onClose();
                }}
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-sm cursor-pointer underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>스토어 계속 둘러보기</span>
              </button>
            </motion.div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-gray-400">카트가 비어있습니다.</p>
              <p className="text-xs text-gray-400 leading-relaxed px-6">
                마스터피스 컬렉션을 살펴보고 당신의 첫 프리미엄 파트너를 담아보세요!
              </p>
              <button
                onClick={onClose}
                className="mt-2 bg-primary hover:bg-primary-dark text-white font-bold text-xs px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                쇼핑 시작하기
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100/50">
                <span className="text-xs text-gray-500 font-semibold">선택 상품 총 가치</span>
                <button 
                  onClick={onClearCart} 
                  className="text-xs text-gray-400 hover:text-red-500 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>비우기</span>
                </button>
              </div>

              {/* Items Card List */}
              <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      className="flex gap-4 p-3 rounded-xl border border-gray-100 shadow-xs hover:border-gray-200 transition-colors"
                    >
                      <img 
                        src={item.product.imageUrl} 
                        alt={item.product.name} 
                        className="w-16 h-16 rounded-lg object-cover bg-slate-100 outline outline-gray-50"
                        referrerPolicy="no-referrer"
                      />
                      
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-gray-800 text-sm truncate max-w-[180px]">{item.product.name}</h4>
                            <button 
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="text-[10px] text-primary font-bold">{item.product.category}</span>
                        </div>

                        <div className="flex justify-between items-center mt-1">
                          {/* Quant adjustment */}
                          <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1 scale-90 origin-left">
                            <button 
                              onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                              className="p-1 rounded hover:bg-gray-100 text-gray-500 cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-gray-800 px-1">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 rounded hover:bg-gray-100 text-gray-500 cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-xs font-mono font-bold text-primary-dark">
                            {(item.product.price * item.quantity).toLocaleString("ko-KR")} 원
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* simulated Delivery details */}
              <div className="bg-surface/50 border border-[#E3E3C7] rounded-xl p-4 space-y-3 mt-6">
                <h4 className="text-xs font-bold text-[#2A2C22] border-b border-[#E3E3C7]/40 pb-1.5 flex items-center gap-1">
                  <span>🚀</span> 실시간 특전 배송지 입력
                </h4>
                
                <form onSubmit={handleCheckout} className="space-y-2.5">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-0.5">수령인 성함</label>
                    <input 
                      type="text" 
                      placeholder="예: Buyer Park"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="w-full text-xs p-2.5 border border-[#D0D0B0] rounded-lg focus:outline-hidden focus:border-primary bg-white/70"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-0.5">상세 연락처 (수령 메시지 발송용)</label>
                    <input 
                      type="text" 
                      placeholder="예) 010-1234-5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs p-2.5 border border-[#D0D0B0] rounded-lg focus:outline-hidden focus:border-primary bg-white/70"
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-xs py-3 rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 mt-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>한정판 파우치 포함 특전 배송 예약</span>
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Bottom checkout totals */}
        {cartItems.length > 0 && !isOrdered && (
          <div className="p-6 border-t border-gray-100 bg-slate-50 space-y-4">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-gray-500">
                <span>합계 금액</span>
                <span className="font-mono">{subtotal.toLocaleString("ko-KR")} 원</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>은하계 연합 익스프레스 배송비</span>
                <span className="font-mono">{shippingFee === 0 ? "무료배송" : `${shippingFee.toLocaleString("ko-KR")} 원`}</span>
              </div>
              <div className="flex justify-between text-[#2A2C22] font-extrabold text-base pt-2 border-t border-gray-200">
                <span>최종 결제 예정액</span>
                <span className="font-mono text-primary-dark">{grandTotal.toLocaleString("ko-KR")} 원</span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
