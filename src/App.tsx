import { useState } from "react";
import { INITIAL_PRODUCTS, INITIAL_REVIEWS } from "./data";
import { Product, Review, CartItem } from "./types";
import { CheckCircle2, ShoppingCart } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueProp from "./components/ValueProp";
import MasterpieceCollection from "./components/MasterpieceCollection";
import Reviews from "./components/Reviews";
import FinalCTA from "./components/FinalCTA";
import ProductModal from "./components/ProductModal";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Toast Helper
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart Handlers
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        triggerToast(`${product.name}의 가방 수량이 추가되었습니다!`);
        return prev.map((item) => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      triggerToast(`${product.name}이(가) 수집 가방에 담겼습니다!`);
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) => 
      prev.map((item) => 
        item.product.id === productId 
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => {
      const removed = prev.find((item) => item.product.id === productId);
      if (removed) {
        triggerToast(`${removed.product.name}이(가) 가방에서 제외되었습니다.`);
      }
      return prev.filter((item) => item.product.id !== productId);
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Review Handler
  const handleAddReview = (newReview: Review) => {
    setReviews((prev) => [newReview, ...prev]);
    triggerToast("소장자의 성공적인 경험 공유가 등록되었습니다. 감사합니다!");
  };

  // Smooth Navigation Trigger
  const handleNavigateToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Big Orange/Sage benefit CTA trigger
  const handleFinalCTAClick = () => {
    // Add best seller product to cart and open cart panel!
    const bestSeller = products[0];
    handleAddToCart(bestSeller);
    setIsCartOpen(true);
    triggerToast("오늘의 특별 혜택 및 베스트셀러가 즉시 세팅되었습니다!");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-800 flex flex-col font-sans select-none overflow-x-hidden antialiased">
      {/* Header bar */}
      <Header 
        cartCount={cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        onCartOpen={() => setIsCartOpen(true)}
        onNavigate={handleNavigateToSection}
      />

      {/* Hero Header component */}
      <Hero onStartClick={() => handleNavigateToSection("collection")} />

      {/* Deep philosophical Copy section */}
      <ValueProp />

      {/* Masterpieces showcases lists */}
      <MasterpieceCollection 
        products={products}
        onSelectProduct={setSelectedProduct}
        onAddToCart={handleAddToCart}
      />

      {/* Collector review boards */}
      <Reviews 
        reviews={reviews}
        onAddReview={handleAddReview}
      />

      {/* Deep CTA Special Benefit Section */}
      <FinalCTA onCTAClick={handleFinalCTAClick} />

      {/* Corporate Footer copyright */}
      <Footer />

      {/* Details Product Popups Modals */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>

      {/* Cart Sliding Drawer side bars */}
      <AnimatePresence>
        {isCartOpen && (
          <CartDrawer 
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
          />
        )}
      </AnimatePresence>

      {/* Toast popup notifications */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 bg-[#2A2C22] text-white py-3.5 px-5 rounded-2xl shadow-xl border border-primary/30 flex items-center gap-3"
          >
            <div className="bg-primary/20 p-1.5 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xs font-bold font-sans">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
