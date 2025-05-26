'use client';

import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 円のアニメーション */}
      <motion.div
        className="absolute w-96 h-96 rounded-full border-2 border-blue-200"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: '20%',
          left: '10%',
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full border-2 border-blue-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
        style={{
          top: '40%',
          right: '15%',
        }}
      />

      {/* 線のアニメーション */}
      <motion.div
        className="absolute h-0.5 bg-blue-200"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '100%', opacity: 0.5 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: '30%',
          left: 0,
        }}
      />
      <motion.div
        className="absolute h-0.5 bg-blue-300"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '100%', opacity: 0.3 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
        style={{
          top: '60%',
          left: 0,
        }}
      />
    </div>
  );
} 