"use client";

import ContactForm from "../components/ContactForm";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";


export default function Contact() {

  

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 className="text-4xl font-bold mb-8 text-center" {...fadeInUp}>
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div className="space-y-8" {...slideInLeft}>
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch Wuth Me</h2>
            <p className="dark:text-gray-300 text-gray-700">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:birhanugezahegn099@gmail.com"
                  className="text-gray-400 dark:text-gray-300 hover:text-blue-500"
                >
                  birhanugezahegn099@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <div className="flex  gap-2">
                  <a
                    href="tel:+251961064370"
                    className="text-gray-400 dark:text-gray-300 hover:text-blue-500"
                  >
                    +251 961064370
                  </a>{" "}
                  <span>Or</span>
                  <a
                    href="tel:+251998169294"
                    className=" text-gray-400 dark:text-gray-300 hover:text-blue-500"
                  >
                    +251 998169294
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="dark:text-gray-300 text-gray-400">
                  Bahirdar University
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}

        <h1 className="text-2xl font-bold text-blue-500 text-center">
          Send Message
        </h1>
        <motion.div
          className="bg-white dark:bg-dark/50 flex flex-col items-center justify-center p-6 rounded-lg shadow-md"
          {...slideInRight}
        >


          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}




