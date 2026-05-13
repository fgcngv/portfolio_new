'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaTelegram, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className='flex justify-center items-center mb-4'
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image src="/profile_image1.jpg" alt="Profile" width={100} height={100} className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m <motion.span 
              className="text-blue-500"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Gezahegn Birhanu
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer | UI/UX Enthusiast | Open Source Contributor
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://t.me/bgdvlpr_man"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTelegram />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gezahegn-birhanu-08170b328?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B76xpv6uyS2eATkEZTS5kgw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500  transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/birhanugezahegn099/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors dark:bg-blue-500 "
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className=" inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 