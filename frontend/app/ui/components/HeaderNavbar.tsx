"use client";
import { Menu, MessageCircleHeart, X } from "lucide-react";
import { useState } from "react";

export default function HeaderNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" w-full border border-b border-zinc-300 sticky shadow top-0 z-50 sm:p-2 md:p-2">
      <nav className=" flex items-center justify-around">
        {/* logo */}
        <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-zinc-900">
          <MessageCircleHeart
            size={28}
            className=" text-zonc-900"
          ></MessageCircleHeart>
          <span>Lonley.AI</span>
        </div>

        {/* DesktopNav bar */}
        <div className=" hidden sm:flex gap-4">
          <button className=" bg-black border border-zinc-50 text-zinc-100 cursor-pointer px-5 py-2 rounded-lg font-semibold hover:bg-zinc-800 transition">
            Sign In
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="sm:hidden p-2 text-zinc-900 hover:bg-zinc-100 rounded-lg transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menus */}
      {isMenuOpen && (
        <>
          <div className="sm:hidden px-4 pb-4 pt-2">
            <div className=" flex flex-col gap-2">
              <button className=" bg-white border border-zinc-900 text-zinc-900 px-5 py-2.5 rounded-lg font-semibold hover:bg-zinc-100 transition w-full">
                Sign In
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
