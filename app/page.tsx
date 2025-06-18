'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BackgroundAnimation from './components/BackgroundAnimation';
import Navigation from './components/Navigation';
import ServiceCard from './components/ServiceCard';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'プロダクト戦略サポートサービス',
      description: 'プロダクト顧問として、プロダクト構想の上流で悩む展開戦略、構築戦略の立案サポートを行います。',
    },
    {
      title: 'プロダクトマネージャーメンタリングサービス',
      description: 'プロダクト組織の課題を解決し、プロダクトマネージャーの視座や発想力を引き上げるサポートを行います。',
    },
    {
      title: 'プロダクトマネージャー採用支援',
      description: 'プロダクトマネージャーの面接時に、スキル以外のマインドセットや企画構想力、顧客視点での発想力などを計測するための支援を行います。',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* ヒーローセクション */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white">
            <BackgroundAnimation />
          </div>
          
          <div className="relative z-10 text-left px-4 max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.3 } },
              }}
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-7xl font-extrabold text-blue-900 mb-2"
              >
                良い知恵で、
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-7xl font-extrabold text-blue-900 mb-2"
              >
                価値あるものを
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-7xl font-extrabold text-blue-900"
              >
                より早く
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* サービスセクション */}
        <section id="services" className="py-20 px-4 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-blue-900 mb-12 text-center"
            >
              サービス/事業内容
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section id="contact" className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="https://forms.gle/vKFMxcPNSUMrfvuE6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-blue-900 text-white rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                お問い合わせはこちら
              </a>
            </motion.div>
          </div>
        </section>

        {/* 会社概要セクション */}
        <section
          id="about"
          ref={ref}
          className="py-20 px-4 bg-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-4">PROFILE</h2>
            <h3 className="text-xl text-center mb-12">会社概要</h3>
            <div className="border-t border-gray-200">
              <dl>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-200">
                  <dt className="text-sm font-medium text-gray-700">法人名</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">六方嘉</dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-200">
                  <dt className="text-sm font-medium text-gray-700">法人番号</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">-</dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-200">
                  <dt className="text-sm font-medium text-gray-700">所在地</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    〒305-0031<br />
                    茨城県つくば市吾妻1-5-7　ダイワロイネットホテルつくばビル1F・2F
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-200">
                  <dt className="text-sm font-medium text-gray-700">設立</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">2025年7月</dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-200">
                  <dt className="text-sm font-medium text-gray-700">代表</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">與田祐樹</dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-200">
                  <dt className="text-sm font-medium text-gray-700">事業内容</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul className="list-disc list-inside space-y-1">
                      <li>プロダクト開発支援</li>
                      <li>プロダクト戦略構築支援</li>
                      <li>映像配信事業</li>
                    </ul>
                  </dd>
                </div>
                <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b border-gray-200">
                  <dt className="text-sm font-medium text-gray-700">取引銀行</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"></dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 text-center text-gray-500 text-sm mt-8">
        Copyright © ROPPOYOSHI, INC.  All Rights Reserved.
      </footer>
    </>
  );
}