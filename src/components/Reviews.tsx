import React, { useState } from "react";
import { Review } from "../types";
import { Star, CheckCircle, PlusCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ReviewsProps {
  reviews: Review[];
  onAddReview: (review: Review) => void;
}

export default function Reviews({ reviews, onAddReview }: ReviewsProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newComment || !newAuthor) {
      alert("리뷰 정보(이름, 한 줄 평, 상세 내용)를 모두 써 주세요!");
      return;
    }

    const reviewObj: Review = {
      id: "r-" + Math.random().toString(36).substr(2, 9),
      author: newAuthor.endsWith("*") ? newAuthor : `${newAuthor}*`,
      rating: newRating,
      title: `"${newTitle}"`,
      comment: newComment,
      date: new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).replace(/\s/g, ""),
      isVerified: true
    };

    onAddReview(reviewObj);
    
    // Clear Form & Close
    setNewTitle("");
    setNewComment("");
    setNewAuthor("");
    setNewRating(5);
    setIsFormOpen(false);
  };

  return (
    <section id="reviews" className="py-24 px-6 bg-background-alt scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Title Block */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold text-xs uppercase tracking-widest"
          >
            Collector Satisfaction
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-headline font-extrabold text-[#2A2C22] text-3xl md:text-4xl"
          >
            증명된 만족도
          </motion.h2>

          {/* Cumulative Stars Rating */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 fill-amber-400 text-amber-400 sm:w-7 sm:h-7" />
              ))}
            </div>
            <span className="font-heading font-extrabold text-base text-[#2A2C22]">
              4.9 / 5.0 (50,000+ 리뷰 완료)
            </span>
          </div>
        </div>

        {/* Existing Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {reviews.map((rev) => (
              <motion.div
                key={rev.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-surface p-8 rounded-xl border border-outline-variant hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars list inside review */}
                  <div className="flex text-amber-400 mb-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star 
                        key={idx} 
                        className={`w-4 h-4 ${idx < rev.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>

                  <h4 className="font-headline font-bold text-lg text-gray-900 mb-3 leading-snug">
                    {rev.title}
                  </h4>
                  <p className="font-sans text-sm text-gray-600 mb-6 leading-relaxed">
                    {rev.comment}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#E3E3C7]/40 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <span className="font-sans font-semibold text-xs text-gray-400">{rev.author}</span>
                    {rev.isVerified && (
                      <span className="flex items-center gap-0.5 text-[10px] text-primary font-bold">
                        <CheckCircle className="w-3 h-3 fill-primary-light text-white" />
                        인증원 구매자
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">{rev.date}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Button to show write review form */}
        <div className="flex justify-center mt-12">
          {!isFormOpen ? (
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-2 bg-[#EAEAD2] hover:bg-surface text-primary-dark font-bold text-sm px-6 py-3 rounded-full border border-[#D0D0B0] transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>실제 소장 가치 리뷰 남기기</span>
            </button>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-xl bg-white rounded-2xl border border-outline-variant p-8 shadow-md"
            >
              <h3 className="text-lg font-bold text-[#2A2C22] mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                소장자 평가 수기 작성
              </h3>

              <form onSubmit={handleSubmitReview} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">소장자 이름 (예: Buyer Park)</label>
                    <input 
                      type="text" 
                      placeholder="이름 입력"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full text-sm p-3 border border-gray-200 rounded-lg focus:outline-hidden focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-1">한 줄 핵심 총평</label>
                    <input 
                      type="text" 
                      placeholder="예) 기대 이상의 작품 가치"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full text-sm p-3 border border-gray-200 rounded-lg focus:outline-hidden focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2">포스 평점 부여</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="p-1 cursor-pointer transition-transform hover:scale-110"
                      >
                        <Star 
                          className={`w-7 h-7 ${(hoverRating !== null ? star <= hoverRating : star <= newRating) 
                            ? "fill-amber-400 text-amber-400" 
                            : "text-gray-300"}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">상세 컬렉팅 체험 후기</label>
                  <textarea 
                    rows={3}
                    placeholder="패키징 마감, 조형의 비례, 재질 질감 등 실제 소감이나 장점을 공유해 보세요."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full text-sm p-3 border border-gray-200 rounded-lg focus:outline-hidden focus:border-primary"
                    required
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-grow bg-primary hover:bg-primary-dark text-white font-bold py-3 px-5 rounded-lg transition-colors cursor-pointer text-sm"
                  >
                    리뷰 저장 등록
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold py-3 px-5 rounded-lg transition-colors cursor-pointer text-sm"
                  >
                    취소
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
