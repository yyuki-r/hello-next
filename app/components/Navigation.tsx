'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  const menuItems = [
    { href: '/', label: { ja: 'トップページ', en: 'Home' } },
    { href: '/about', label: { ja: '会社概要', en: 'About' } },
    { href: '/services', label: { ja: 'サービス/事業内容', en: 'Services' } },
    { href: 'https://forms.gle/vKFMxcPNSUMrfvuE6', label: { ja: 'お問い合わせ', en: 'Contact' } },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/ROPPOYOSHI_Icon_header.svg"
              alt="Roppoyoshi Logo"
              width={40}
              height={40}
              style={{ marginRight: '0.5rem' }}
            />
            <Link href="/" className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}>
              六方嘉
            </Link>
          </div>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.href.startsWith('http') ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-gray-700 hover:text-blue-900'
                  }`}
                >
                  {item.label[language]}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-gray-700 hover:text-blue-900'
                  }`}
                >
                  {item.label[language]}
                </Link>
              )
            ))}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded-full border transition-colors duration-300 ${
                isScrolled
                  ? 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
                  : 'border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {language === 'ja' ? 'EN' : 'JP'}
            </button>
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label[language]}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-md"
              >
                {language === 'ja' ? 'English' : '日本語'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 