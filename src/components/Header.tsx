import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ cartCount, onCartOpen, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-surface/90 backdrop-blur-md sticky top-0 z-40 border-b border-[#E3E3C7] shadow-sm transition-all duration-200">
      <div className="flex justify-between items-center w-full px-6 h-20 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate("hero")} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Custom SVG/Leaf stylized Grogu-like Green Icon */}
          <div className="h-10 w-10 relative flex items-center justify-center rounded-full bg-[#EAEAD2] border border-[#D0D0B0] shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-5 h-5 bg-primary rounded-full relative flex items-center justify-center">
              {/* Ears */}
              <div className="absolute -left-2.5 top-1 w-3 h-1.5 bg-primary rounded-l-full rotate-[15deg]"></div>
              <div className="absolute -right-2.5 top-1 w-3 h-1.5 bg-primary rounded-r-full -rotate-[15deg]"></div>
              {/* Eyes */}
              <div className="w-1 h-1 bg-white rounded-full absolute left-1 top-1.5"></div>
              <div className="w-1 h-1 bg-white rounded-full absolute right-1 top-1.5"></div>
            </div>
          </div>
          <span className="text-xl font-headline font-extrabold text-[#2A2C22] tracking-tight group-hover:text-primary transition-colors">
            Grogu Collectibles
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <button 
              onClick={() => onNavigate("value-prop")}
              className="text-gray-600 hover:text-primary transition-colors cursor-pointer text-sm font-semibold"
            >
              Story
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate("collection")}
              className="text-primary border-b-2 border-primary pb-1 font-bold text-sm cursor-pointer"
            >
              New Arrivals
            </button>
          </li>
          <li>
            <button 
              onClick={() => onNavigate("reviews")}
              className="text-gray-600 hover:text-primary transition-colors cursor-pointer text-sm font-semibold"
            >
              Reviews
            </button>
          </li>
        </ul>

        {/* Trailing Action */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onCartOpen}
            className="p-2.5 rounded-full hover:bg-[#EAEAD2] text-[#2A2C22] transition-colors relative"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => onNavigate("collection")}
            className="hidden md:inline-block text-sm font-bold text-primary hover:text-primary-dark transition-colors cursor-pointer"
          >
            Shop Now
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-1.5 text-gray-700 hover:bg-[#EAEAD2] rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 px-6 animate-fadeIn absolute w-full left-0 z-30 shadow-lg">
          <ul className="flex flex-col gap-4 font-semibold text-gray-700">
            <li>
              <button 
                onClick={() => {
                  onNavigate("value-prop");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-2 hover:text-primary transition-colors"
              >
                Story
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  onNavigate("collection");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-2 text-primary hover:text-primary-dark transition-colors"
              >
                New Arrivals
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  onNavigate("reviews");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-2 hover:text-primary transition-colors"
              >
                Reviews
              </button>
            </li>
            <li className="pt-2 border-t border-gray-100">
              <button 
                onClick={() => {
                  onCartOpen();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-2 flex justify-between items-center text-gray-800"
              >
                <span>My Cart</span>
                <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount} items
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
