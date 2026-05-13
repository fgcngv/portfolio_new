'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaTimes } from 'react-icons/fa';

const certificates = [
  {
    id: 1,
    title: 'e-SHE: CE104s Set Goals to Manage Your Time',
    image: '/certificates/certificate1.png',
  },
  {
    id: 2,
    title: 'e-SHE: DLS102s Video Conferencing with Teams',
    image: '/certificates/certificate2.png',
  },
  {
    id: 3,
    title: 'e-SHE: CE102s SS 5 How to Evaluate Resources',
    image: '/certificates/certificate3.png',
  },
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-14"
        >
          My Certificates
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-center mb-4">
                <FaCertificate className="text-6xl text-blue-500" />
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {certificate.title}
              </h3>

              <button
                onClick={() => setSelectedImage(certificate.image)}
                className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-50 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                >
                  <FaTimes />
                </button>

                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage}
                    alt="Certificate"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}