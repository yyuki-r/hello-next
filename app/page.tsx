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
          
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-blue-900 mb-4"
            >
              株式会社六方良
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-800"
            >
              社会の未来を知恵で切り拓く
            </motion.p>
          </div>
        </section>

        {/* サービスセクション */}
        <section className="py-20 px-4 bg-blue-50">
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

        {/* 会社概要セクション */}
        <section
          ref={ref}
          className="py-20 px-4 bg-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">会社概要</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-700">
                  <span className="font-semibold">会社名：</span>
                  株式会社六方良
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">代表取締役：</span>
                  與田祐樹
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">資本金：</span>
                  300,000円
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <span className="font-semibold">所在地：</span>
                  茨城県つくば市吾妻１丁目５−７ 2階
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}